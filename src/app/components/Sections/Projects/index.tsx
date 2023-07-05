import { FC, ReactElement } from 'react';
import { SectionProps } from '@/@types';
import { SubMenuId } from '@/app/components/consts';
import { SectionSubtitle } from '@/components/layout/SectionSubtitle';
import { SectionCover } from '@/app/components/Sections/components/SectionCover';
import { ProjectList } from '@/app/components/Sections/Projects/components/ProjectList';
import { personalProjects, professionalProjects } from '@/app/components/Sections/Projects/consts';

type ProjectsProps = SectionProps;

export const Projects: FC<ProjectsProps> = ({ menuId }): ReactElement => {
    return (
        <div className="flex flex-col">
            <SectionCover menuId={menuId} subtitles={[SubMenuId.ProjectsProfessionals, SubMenuId.ProjectsPersonal]} />

            <div className="min-h-screen flex flex-col gap-24 pt-6">
                <div id={SubMenuId.ProjectsProfessionals} className="flex flex-col gap-8">
                    <SectionSubtitle subMenuId={SubMenuId.ProjectsProfessionals} />

                    <ProjectList list={professionalProjects} />
                </div>

                <div id={SubMenuId.ProjectsPersonal} className="flex flex-col gap-8">
                    <SectionSubtitle subMenuId={SubMenuId.ProjectsPersonal} />

                    <ProjectList list={personalProjects} />
                </div>
            </div>
        </div>
    );
};
