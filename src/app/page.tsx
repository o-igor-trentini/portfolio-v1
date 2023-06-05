import { Home } from '@/app/components/Home';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import { Menu } from '@/app/components/Menu';
import { MenuIds } from '@/app/components/consts';
import { Technologies } from '@/app/components/Technologies';

const Page: NextPage = (): ReactElement => {
    return (
        <main className="max-h-[100vh] md:grid md:grid-cols-12 md:grid-flow-row overflow-y-scroll flex flex-col">
            <div className="h-24 md:h-auto md:relative flex flex-row md:flex-col justify-center md:justify-normal items-center order-last md:order-first bg-primary">
                <Menu />
            </div>

            <div className="h-[calc('100vh - 6rem')] md:h-auto md:col-span-11 overflow-y-scroll">
                <section id={MenuIds.Home} className="min-h-screen py-6 px-4 lg:px-32 flex content-center bg-blayout">
                    <Home />
                </section>

                <section id={MenuIds.Technologies} className="min-h-screen py-6 px-4 lg:px-32 bg-blayout-2">
                    <Technologies />
                </section>
            </div>
        </main>
    );
};

export default Page;
