import { MenuId } from '@/app/components/consts';
import { ReactElement, useCallback, useMemo } from 'react';
import { NextPage } from 'next';
import { Home } from '@/app/components/Sections/Home';
import { Technologies } from '@/app/components/Sections/Technologies';
import { Menu } from '@/app/components/Sections/Menu';
import { Projects } from '@/app/components/Sections/Projects';

interface Section {
    id: MenuId;
    component: ReactElement;
}

const Page: NextPage = (): ReactElement => {
    const sections: Section[] = useMemo(() => {
        return [
            {
                id: MenuId.Home,
                component: <Home />,
            },
            {
                id: MenuId.Technologies,
                component: <Technologies menuId={MenuId.Technologies} />,
            },
            {
                id: MenuId.Projects,
                component: <Projects menuId={MenuId.Projects} />,
            },
        ];
    }, []);

    const getBgColor: (index: number) => string = useCallback(
        (index: number): string => (index % 2 === 0 ? 'bg-blayout' : 'bg-blayout-2'),
        [],
    );

    return (
        <main className="flex flex-col xl:grid xl:grid-flow-row xl:grid-cols-12">
            <div className="h-auto xl:col-span-1 flex flex-col items-center bg-fourth invisible xl:visible">
                <Menu />
            </div>

            <div className="xl:col-span-11">
                {sections.map(({ id, component }, index) => {
                    return (
                        <section
                            key={id}
                            id={id}
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
