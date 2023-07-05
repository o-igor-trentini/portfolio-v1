import { FC, ReactElement } from 'react';
import { SectionProps } from '@/@types';
import { SubMenuId } from '@/app/components/consts';
import { SectionSubtitle } from '@/components/layout/SectionSubtitle';
import { TechList } from '@/app/components/Sections/Technologies/components/TechList';
import { favoriteTechs, techs } from '@/app/components/Sections/Technologies/consts';
import { SectionCover } from '@/app/components/Sections/components/SectionCover';

type TechnologiesProps = SectionProps;

export const Technologies: FC<TechnologiesProps> = ({ menuId }): ReactElement => {
    return (
        <div className="flex flex-col">
            <SectionCover
                menuId={menuId}
                subtitles={[SubMenuId.TechnologiesFavorite, SubMenuId.TechnologiesAlreadyUsed]}
            />

            <div className="min-h-screen flex flex-col gap-24 pt-6">
                <div id={SubMenuId.TechnologiesFavorite} className="flex flex-col gap-8">
                    <SectionSubtitle subMenuId={SubMenuId.TechnologiesFavorite} total={favoriteTechs.length} />

                    <TechList list={favoriteTechs} />
                </div>

                <div id={SubMenuId.TechnologiesAlreadyUsed} className="flex flex-col gap-8">
                    <SectionSubtitle subMenuId={SubMenuId.TechnologiesAlreadyUsed} total={techs.length} />

                    <TechList list={techs} />
                </div>
            </div>
        </div>
    );
};
