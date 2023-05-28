import { Home } from '@/app/components/Home';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const Page: NextPage = (): ReactElement => {
    return (
        <main>
            <section className="bg-blayout min-h-screen flex content-center p-4">
                <Home />
            </section>

            <section className="bg-blayout-2 min-h-screen"></section>
        </main>
    );
};

export default Page;
