import { FC, ReactElement } from 'react';
import { SectionTitle } from '@/components/layout/SectionTitle';
import { TechIconProps } from '@/app/components/Technologies/components/TechIcon';
import golangSvg from '../../../../public/technologies/golang.svg';
import typescriptSvg from '../../../../public/technologies/typescript.svg';
import reactSvg from '../../../../public/technologies/react.svg';
import postgresqlSvg from '../../../../public/technologies/postgresql.svg';
import { TechList } from '@/app/components/Technologies/components/TechList';

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

export const Technologies: FC = (): ReactElement => {
    return (
        <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-8">
                <SectionTitle>Stack Atual</SectionTitle>

                <TechList list={currentStack} />
            </div>

            <div className="flex flex-col gap-8">
                <SectionTitle>Já utilizadas</SectionTitle>

                <TechList list={currentStack} />
            </div>
        </div>
    );
};
