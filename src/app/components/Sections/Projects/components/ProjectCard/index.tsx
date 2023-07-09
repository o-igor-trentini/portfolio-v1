'use client';

import { FC, ReactElement, useCallback, useState } from 'react';
import { Card } from '@/components/ui/Card';
import Image, { StaticImageData } from 'next/image';
import { Modal } from '@/components/ui/Modal';

export interface Project {
    name: string;
    url: string;
    imageUrl: StaticImageData;
}

interface ProjectCardProps {
    data: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ data }): ReactElement => {
    const [modaIsOpen, setModalIsOpen] = useState<boolean>(false);

    const handleClick = useCallback(() => setModalIsOpen(true), []);

    const handleClose = useCallback(() => setModalIsOpen(false), []);

    return (
        <>
            <Card
                block
                hoverable
                padding="p-0"
                className="h-64 transition-transform transform hover:scale-125 hover:z-10"
                onClick={handleClick}
            >
                <div className="w-full h-full relative">
                    <div className="w-full h-full z-0 transition blur-sm hover:blur-none">
                        <Image src={data.imageUrl} alt="" width={500} height={300} className="w-full h-full" />
                    </div>

                    <div className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center p-4 rounded-3xl bg-blayout-2">
                        <span className="text-center text-secondary text-2xl font-bold">{data.name}</span>
                    </div>
                </div>
            </Card>

            <Modal
                open={modaIsOpen}
                title={data.name}
                description={`Um pouco sobre o projeto ${data.name} :)`}
                onClose={handleClose}
            >
                <Image src={data.imageUrl} alt="" width={800} height={400} className="rounded-3xl" />
            </Modal>
        </>
    );
};
