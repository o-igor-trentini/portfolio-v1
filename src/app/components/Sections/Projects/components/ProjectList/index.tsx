import { FC, ReactElement } from 'react';
import { Project, ProjectCard } from '@/app/components/Sections/Projects/components/ProjectCard';

interface ProjectListProps {
    list: Project[];
}

export const ProjectList: FC<ProjectListProps> = ({ list }): ReactElement => {
    return (
        <div className="w-full grid grid-cols-3 gap-4 place-items-center">
            {list.map((props) => {
                return <ProjectCard key={props.name} data={props} />;
            })}
        </div>
    );
};
