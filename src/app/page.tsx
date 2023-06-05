import { Home } from '@/app/components/Home';
import { NextPage } from 'next';
import { FC, ReactElement, useCallback, useMemo } from 'react';
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
        if (index % 2 == 0) return 'bg-blayout';

        return 'bg-blayout-2';
    }, []);

    return (
        <main className="max-h-[100vh] md:grid md:grid-cols-12 md:grid-flow-row overflow-y-scroll flex flex-col">
            <div className="h-24 md:h-auto md:relative flex flex-row md:flex-col justify-center md:justify-normal items-center order-last md:order-first bg-primary">
                <Menu />
            </div>

            <div className="h-[calc('100vh - 6rem')] md:h-auto md:col-span-11 overflow-y-scroll">
                {sections.map(({ id, component }, index) => {
                    return (
                        <section key={id} className={`min-h-screen py-6 px-4 lg:px-32 ${getBgColor(index)}`}>
                            {component}
                        </section>
                    );
                })}
            </div>
        </main>
    );
};

export default Page;
