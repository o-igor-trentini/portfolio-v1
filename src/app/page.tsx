import { Home } from '@/app/components/Home';
import { NextPage } from 'next';
import { ReactElement, useCallback, useMemo } from 'react';
import { Menu } from '@/app/components/Menu';
import { MenuIds } from '@/app/components/consts';
import { Technologies } from '@/app/components/Technologies';

interface Section {
    id: MenuIds;
    component: ReactElement;
}

const Page: NextPage = (): ReactElement => {
    const sections: Section[] = useMemo(() => {
        return [
            {
                id: MenuIds.Home,
                component: <Home />,
            },
            {
                id: MenuIds.Technologies,
                component: <Technologies />,
            },
        ];
    }, []);

    const getBgColor: (index: number) => string = useCallback((index: number): string => {
        if (index % 2 === 0) return 'bg-blayout';

        return 'bg-blayout-2';
    }, []);

    return (
        <main className="flex flex-col md:grid md:grid-flow-row md:grid-cols-12">
            <div className="h-auto md:col-span-2 lg:col-span-1 flex flex-col items-center bg-primary invisible md:visible">
                <Menu />
            </div>

            <div className="md:col-span-10 lg:col-span-11">
                {sections.map(({ id, component }, index) => {
                    return (
                        <section
                            key={id}
                            className={`section-content h-screen min-h-screen py-6 px-4 sm:px-20 lg:px-32 overflow-y-scroll scroll- ${getBgColor(
                                index,
                            )}`}
                        >
                            {component}
                        </section>
                    );
                })}
            </div>
        </main>
    );
};

export default Page;
