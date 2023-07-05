import { TechIconProps } from '@/app/components/Sections/Technologies/components/TechIcon';
import { TechsSvg } from '../../../../../public/images/technologies';

export enum TechTag {
    ProgrammingLanguage = 'programming-language',
    Platform = 'platform',
    ProgrammingLanguageService = 'programming-language-service',
    IDE = 'ide',
    OperationalSystem = 'operational-system',
    Framework = 'framework',
    Database = 'database',
    Library = 'library',
}

export const techs: TechIconProps[] = [
    {
        name: 'Bitbucket',
        iconSrc: TechsSvg.Bitbucket,
        tags: [TechTag.Platform],
    },
    {
        name: 'CSS',
        iconSrc: TechsSvg.Css,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'Docker',
        iconSrc: TechsSvg.Docker,
        tags: [TechTag.ProgrammingLanguageService],
    },
    {
        name: 'Git',
        iconSrc: TechsSvg.Git,
        tags: [TechTag.ProgrammingLanguageService],
    },
    {
        name: 'GitHub',
        iconSrc: TechsSvg.GitHub,
        tags: [TechTag.Platform],
    },
    {
        name: 'Golang',
        iconSrc: TechsSvg.Golang,
        favorite: true,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'HTML',
        iconSrc: TechsSvg.Html,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'Javascript',
        iconSrc: TechsSvg.Javascript,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'JetBrains',
        iconSrc: TechsSvg.JetBrains,
        favorite: true,
        tags: [TechTag.IDE],
    },
    {
        name: 'Jira',
        iconSrc: TechsSvg.Jira,
        tags: [TechTag.Platform],
    },
    {
        name: 'Linux',
        iconSrc: TechsSvg.Linux,
        favorite: true,
        tags: [TechTag.OperationalSystem],
    },
    {
        name: 'NextJS',
        iconSrc: TechsSvg.NextJs,
        favorite: true,
        tags: [TechTag.Framework],
    },
    {
        name: 'NodeJS',
        iconSrc: TechsSvg.NodeJs,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'NPM',
        iconSrc: TechsSvg.Npm,
        tags: [TechTag.Platform],
    },
    {
        name: 'PHP',
        iconSrc: TechsSvg.Php,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'PostgreSQL',
        iconSrc: TechsSvg.PostgreSql,
        favorite: true,
        tags: [TechTag.Database],
    },
    {
        name: 'ReactJS',
        iconSrc: TechsSvg.ReactJs,
        favorite: true,
        tags: [TechTag.Framework],
    },
    {
        name: 'Slack',
        iconSrc: TechsSvg.Slack,
        favorite: true,
        tags: [TechTag.Platform],
    },
    {
        name: 'Storybook',
        iconSrc: TechsSvg.Storybook,
        tags: [TechTag.Library],
    },
    {
        name: 'TailwindCSS',
        iconSrc: TechsSvg.TailwindCss,
        favorite: true,
        tags: [TechTag.Library],
    },
    {
        name: 'Typescript',
        iconSrc: TechsSvg.Typescript,
        favorite: true,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'Ubuntu',
        iconSrc: TechsSvg.Ubuntu,
        favorite: true,
        tags: [TechTag.OperationalSystem],
    },
    {
        name: 'VS Code',
        iconSrc: TechsSvg.VsCode,
        tags: [TechTag.IDE],
    },
];

export const favoriteTechs: TechIconProps[] = [...techs].filter(({ favorite }) => favorite);
