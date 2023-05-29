import { FC, ReactElement } from 'react';
import { AddressBook, Code, House, Info } from 'phosphor-react';

export const Menu: FC = (): ReactElement => {
    return (
        <div className="min-h-screen w-24 ml-16 fixed flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center gap-8 bg-fourth rounded-lg">
                <span>.</span> <span>.</span> <span>.</span> <span>.</span> <span>.</span>
                {/*<House />*/}
                {/*<Code />*/}
                {/*<Hammer />*/}
                {/*<Info />*/}
                {/*<AddressBook />*/}
            </div>
        </div>
    );
};
