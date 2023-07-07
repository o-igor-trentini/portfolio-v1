'use client';

import { FC, ReactElement, useCallback, useState } from 'react';
import { Card } from '@/components/ui/Card';
import Image, { StaticImageData } from 'next/image';

export interface Project {
    name: string;
    url: string;
    imageUrl: StaticImageData;
}

interface ProjectCardProps {
    data: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ data }): ReactElement => {
    const handleClick = useCallback(() => {
        // ### Remover 'use client';
        alert(data.name);
    }, [data]);

    return (
        <Card
            block
            hoverable
            padding="p-0"
            className="h-64 transition-transform duration transform hover:scale-125 hover:z-10"
            onClick={handleClick}
        >
            <div className="w-full h-full relative">
                <div className="z-0 transition duration blur-sm hover:blur-none">
                    <Image src={data.imageUrl} alt="" width={500} height={300} className="w-full h-full" />
                </div>

                <div className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center p-4 rounded-3xl bg-blayout-2">
                    <span className="text-center text-secondary text-2xl font-bold">{data.name}</span>
                </div>
            </div>
        </Card>
    );
};
