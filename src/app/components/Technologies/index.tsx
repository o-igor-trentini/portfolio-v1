import { FC, ReactElement } from 'react';
import { TechIconProps } from '@/app/components/Technologies/components/TechIcon';
import golangSvg from '../../../../public/technologies/golang.svg';
import typescriptSvg from '../../../../public/technologies/typescript.svg';
import reactSvg from '../../../../public/technologies/react.svg';
import postgresqlSvg from '../../../../public/technologies/postgresql.svg';
import { TechList } from '@/app/components/Technologies/components/TechList';
import { SectionCover } from '@/app/components/SectionCover';
import { SectionProps } from '@/app/components/@types';
import { SubMenuId } from '@/app/components/consts';
import { SectionSubtitle } from '@/components/layout/SectionSubtitle';

const currentStack: TechIconProps[] = [
    {
        name: 'Golang',
        iconSrc: golangSvg,
    },
    {
        name: 'Typescript',
        iconSrc: typescriptSvg,
    },
    {
        name: 'ReactJS',
        iconSrc: reactSvg,
    },
    {
        name: 'PostgreSQL',
        iconSrc: postgresqlSvg,
    },

    {
        name: 'Golang2',
        iconSrc: golangSvg,
    },
    {
        name: 'Typescript2',
        iconSrc: typescriptSvg,
    },
    {
        name: 'ReactJS2',
        iconSrc: reactSvg,
    },
    {
        name: 'PostgreSQL2',
        iconSrc: postgresqlSvg,
    },

    {
        name: 'Golang3',
        iconSrc: golangSvg,
    },
    {
        name: 'Typescript3',
        iconSrc: typescriptSvg,
    },
    {
        name: 'ReactJS3',
        iconSrc: reactSvg,
    },
    {
        name: 'PostgreSQL3',
        iconSrc: postgresqlSvg,
    },

    {
        name: 'Golang4',
        iconSrc: golangSvg,
    },
    {
        name: 'Typescript4',
        iconSrc: typescriptSvg,
    },
    {
        name: 'ReactJS4',
        iconSrc: reactSvg,
    },
    {
        name: 'PostgreSQL4',
        iconSrc: postgresqlSvg,
    },

    {
        name: 'Golang5',
        iconSrc: golangSvg,
    },
    {
        name: 'Typescript5',
        iconSrc: typescriptSvg,
    },
    {
        name: 'ReactJS5',
        iconSrc: reactSvg,
    },
    {
        name: 'PostgreSQL5',
        iconSrc: postgresqlSvg,
    },
];

type TechnologiesProps = SectionProps;

export const Technologies: FC<TechnologiesProps> = ({ menuId }): ReactElement => {
    return (
        <div className="flex flex-col">
            <SectionCover
                menuId={menuId}
                subtitles={[SubMenuId.TechnologiesFavorite, SubMenuId.TechnologiesAlreadyUsed]}
            />

            <div className="min-h-screen flex flex-col gap-24 pt-6">
                <div className="flex flex-col gap-8">
                    <SectionSubtitle subMenuId={SubMenuId.TechnologiesFavorite} />

                    <TechList list={currentStack} />
                </div>

                <div className="flex flex-col gap-8">
                    <SectionSubtitle subMenuId={SubMenuId.TechnologiesAlreadyUsed} />

                    <TechList list={currentStack} />
                </div>
            </div>
        </div>
    );
};
