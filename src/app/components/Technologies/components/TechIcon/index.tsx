import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { TechTag } from '@/app/components/Technologies/consts';

export interface TechIconProps {
    name: string;
    iconSrc: string;
    favorite?: boolean;
    tags: TechTag[];
}

export const TechIcon: FC<TechIconProps> = ({ name, iconSrc }): ReactElement => {
    return (
        <div className="w-20 h-20 p-4 bg-bfourth rounded-2xl">
            <Image title={name} src={iconSrc} alt="" width={32} height={32} className="w-full h-full" />
        </div>
    );
};
