export enum MenuId {
    Home = 'home',
    Technologies = 'technologies',
    Projects = 'projects',
    AboutMe = 'about-me',
    Contact = 'contact',
}

export const MenuLabel: Record<MenuId, string> = {
    [MenuId.Home]: 'Início',
    [MenuId.Technologies]: 'Tecnologias',
    [MenuId.Projects]: 'Projetos',
    [MenuId.AboutMe]: 'Sobre mim',
    [MenuId.Contact]: 'Contato',
};

export enum SubMenuId {
    TechnologiesFavorite = MenuId.Technologies + '-favorite',
    TechnologiesAlreadyUsed = MenuId.Technologies + '-already-used',
    ProjectsProfessionals = MenuId.Projects + '-professionals',
    ProjectsPersonal = MenuId.Projects + '-personal',
}

export const SubMenuLabel: Record<SubMenuId, string> = {
    [SubMenuId.TechnologiesFavorite]: 'Favoritas',
    [SubMenuId.TechnologiesAlreadyUsed]: 'Já utilizadas',
    [SubMenuId.ProjectsProfessionals]: 'Profissionais',
    [SubMenuId.ProjectsPersonal]: 'Pessoais',
};
