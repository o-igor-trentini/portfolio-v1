'use client';

import { FC, ReactElement, ReactNode, useCallback, useState } from 'react';
import { AddressBook, Code, Hammer, House, Info } from '@phosphor-icons/react';
import { MenuId, MenuLabel } from '@/app/components/consts';
import Link from 'next/link';

interface Item {
    id: MenuId;
    icon: ReactNode;
    isActive: boolean;
}

export const Menu: FC = (): ReactElement => {
    const [items, setItems] = useState<Item[]>([
        {
            id: MenuId.Home,
            icon: <House />,
            isActive: true,
        },
        {
            id: MenuId.Technologies,
            icon: <Code />,
            isActive: false,
        },
        {
            id: MenuId.Projects,
            icon: <Hammer />,
            isActive: false,
        },
        {
            id: MenuId.AboutMe,
            icon: <Info />,
            isActive: false,
        },
        {
            id: MenuId.Contact,
            icon: <AddressBook />,
            isActive: false,
        },
    ]);

    const handleClick = useCallback((id: MenuId): void => {
        setItems((state) => {
            const newActiveIndex = state.findIndex((item) => item.id === id);

            if (newActiveIndex > -1 && !state[newActiveIndex].isActive) {
                const currentActiveIndex = state.findIndex(({ isActive }) => isActive);

                const newState = [...state];
                newState[currentActiveIndex] = { ...newState[currentActiveIndex], isActive: false };
                newState[newActiveIndex] = { ...newState[newActiveIndex], isActive: true };

                return newState;
            }

            return state;
        });
    }, []);

    return (
        <div className="fixed min-h-screen flex justify-center items-center">
            <div className="flex flex-row md:flex-col justify-center items-center gap-4 p-4 bg-fourth rounded-3xl">
                {items.map(({ id, icon, isActive }) => {
                    return (
                        <Link
                            key={id}
                            href={`/#${id}`}
                            id={`btn-${id}`}
                            title={MenuLabel[id]}
                            className={`p-2 rounded-3xl text-5xl cursor-pointer hover:text-secondary transition duration-300 ease-in-out ${
                                isActive && 'bg-white text-primary'
                            }`}
                            onClick={() => handleClick(id)}
                        >
                            {icon}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
