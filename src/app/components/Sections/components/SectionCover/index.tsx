'use client';

import { FC, ReactElement } from 'react';
import { Title } from '@/components/ui/Title';
import { ArrowCircleRight } from '@phosphor-icons/react';
import { MenuId, MenuLabel, SubMenuId, SubMenuLabel } from '@/app/components/consts';
import Link from 'next/link';

interface SectionCoverProps {
    menuId: MenuId;
    subtitles?: SubMenuId[];
}

export const SectionCover: FC<SectionCoverProps> = ({ menuId, subtitles }): ReactElement => {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-6">
            <Title level={3}>{MenuLabel[menuId]}</Title>

            {subtitles && subtitles.length && (
                <div className="flex flex-col gap-2">
                    {subtitles.map((text) => {
                        return (
                            <Link key={text} href={`/#${text}`} target="_parent" className="flex items-center gap-4">
                                <ArrowCircleRight className="w-6 h-6 text-secondary" />

                                <Title level={4} className="text-md md:text-2xl text-tprimary font-mono">
                                    {SubMenuLabel[text]}
                                </Title>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
