'use client';

import { FC, ReactElement, ReactNode } from 'react';
import { AddressBook, Code, Hammer, House, Info } from '@phosphor-icons/react';
import { MenuId } from '@/app/components/consts';

interface Item {
    id: string;
    label: string;
    icon: ReactNode;
    isActive?: boolean;
}

export const Menu: FC = (): ReactElement => {
    const items: Item[] = [
        {
            id: MenuId.Home,
            label: 'Início',
            icon: <House />,
            isActive: true,
        },
        {
            id: MenuId.Technologies,
            label: 'Tecnologias',
            icon: <Code />,
        },
        {
            id: MenuId.Projects,
            label: 'Projetos',
            icon: <Hammer />,
        },
        {
            id: MenuId.AboutMe,
            label: 'Sobre mim',
            icon: <Info />,
        },
        {
            id: MenuId.Contact,
            label: 'Contato',
            icon: <AddressBook />,
        },
    ];

    return (
        <div className="fixed min-h-screen flex justify-center items-center">
            <div className="flex flex-row md:flex-col justify-center items-center gap-4 p-4 bg-fourth rounded-3xl">
                {items.map(({ id, label, icon, isActive }) => {
                    return (
                        <button
                            key={id}
                            id={`btn-${id}`}
                            title={label}
                            type="button"
                            className={`p-1 rounded-3xl text-5xl cursor-pointer hover:text-secondary transition duration-300 ease-in-out ${
                                isActive && 'bg-white text-primary'
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
