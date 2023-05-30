import { Home } from '@/app/components/Home';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import { Menu } from '@/app/components/Menu';
import { MenuIds } from '@/app/components/consts';

const Page: NextPage = (): ReactElement => {
    return (
        <main className="relative">
            <Menu />

            <section id={MenuIds.Home} className="bg-blayout min-h-screen flex content-center p-4">
                <Home />
            </section>

            <section id={MenuIds.Technologies} className="bg-blayout-2 min-h-screen"></section>
        </main>
    );
};

export default Page;
