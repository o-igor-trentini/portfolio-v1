import { TechIconProps } from '@/app/components/Sections/Technologies/components/TechIcon';
import { TechImages } from '../../../../../public/images/technologies';

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
        iconSrc: TechImages.Bitbucket,
        tags: [TechTag.Platform],
    },
    {
        name: 'CSS',
        iconSrc: TechImages.Css,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'Docker',
        iconSrc: TechImages.Docker,
        tags: [TechTag.ProgrammingLanguageService],
    },
    {
        name: 'Git',
        iconSrc: TechImages.Git,
        tags: [TechTag.ProgrammingLanguageService],
    },
    {
        name: 'GitHub',
        iconSrc: TechImages.GitHub,
        tags: [TechTag.Platform],
    },
    {
        name: 'Golang',
        iconSrc: TechImages.Golang,
        favorite: true,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'HTML',
        iconSrc: TechImages.Html,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'Javascript',
        iconSrc: TechImages.Javascript,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'JetBrains',
        iconSrc: TechImages.JetBrains,
        favorite: true,
        tags: [TechTag.IDE],
    },
    {
        name: 'Jira',
        iconSrc: TechImages.Jira,
        tags: [TechTag.Platform],
    },
    {
        name: 'Linux',
        iconSrc: TechImages.Linux,
        favorite: true,
        tags: [TechTag.OperationalSystem],
    },
    {
        name: 'NextJS',
        iconSrc: TechImages.NextJs,
        favorite: true,
        tags: [TechTag.Framework],
    },
    {
        name: 'NodeJS',
        iconSrc: TechImages.NodeJs,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'NPM',
        iconSrc: TechImages.Npm,
        tags: [TechTag.Platform],
    },
    {
        name: 'PHP',
        iconSrc: TechImages.Php,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'PostgreSQL',
        iconSrc: TechImages.PostgreSql,
        favorite: true,
        tags: [TechTag.Database],
    },
    {
        name: 'ReactJS',
        iconSrc: TechImages.ReactJs,
        favorite: true,
        tags: [TechTag.Framework],
    },
    {
        name: 'Slack',
        iconSrc: TechImages.Slack,
        favorite: true,
        tags: [TechTag.Platform],
    },
    {
        name: 'Storybook',
        iconSrc: TechImages.Storybook,
        tags: [TechTag.Library],
    },
    {
        name: 'TailwindCSS',
        iconSrc: TechImages.TailwindCss,
        favorite: true,
        tags: [TechTag.Library],
    },
    {
        name: 'Typescript',
        iconSrc: TechImages.Typescript,
        favorite: true,
        tags: [TechTag.ProgrammingLanguage],
    },
    {
        name: 'Ubuntu',
        iconSrc: TechImages.Ubuntu,
        favorite: true,
        tags: [TechTag.OperationalSystem],
    },
    {
        name: 'VS Code',
        iconSrc: TechImages.VsCode,
        tags: [TechTag.IDE],
    },
];

export const favoriteTechs: TechIconProps[] = [...techs].filter(({ favorite }) => favorite);
