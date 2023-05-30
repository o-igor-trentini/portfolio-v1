'use client';

import { FC, ReactElement, ReactNode } from 'react';
import { AddressBook, Code, Hammer, House, Info } from '@phosphor-icons/react';
import { MenuIds } from '@/app/components/consts';

interface Item {
    id: string;
    label: string;
    icon: ReactNode;
    isActive?: boolean;
}

export const Menu: FC = (): ReactElement => {
    const items: Item[] = [
        {
            id: MenuIds.Home,
            label: 'Início',
            icon: <House />,
            isActive: true,
        },
        {
            id: MenuIds.Technologies,
            label: 'Tecnologias',
            icon: <Code />,
        },
        {
            id: MenuIds.Projects,
            label: 'Projetos',
            icon: <Hammer />,
        },
        {
            id: MenuIds.AboutMe,
            label: 'Início',
            icon: <Info />,
        },
        {
            id: MenuIds.Contact,
            label: 'Contato',
            icon: <AddressBook />,
        },
    ];

    return (
        <div className="z-50 min-h-screen w-24 ml-16 fixed flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center gap-4 py-4 bg-fourth rounded-3xl">
                {items.map(({ id, label, icon, isActive }) => {
                    return (
                        <button
                            key={id}
                            id={id}
                            title={label}
                            type="button"
                            className={`p-1 rounded-3xl text-5xl cursor-pointer hover:text-secondary transition duration-300 ease-in-out ${
                                isActive && ' bg-white text-primary'
                            }`}
                        >
                            {icon}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
