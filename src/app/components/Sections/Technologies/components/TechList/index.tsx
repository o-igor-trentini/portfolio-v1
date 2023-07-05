import { FC, ReactElement } from 'react';
import { TechIcon, TechIconProps } from '@/app/components/Sections/Technologies/components/TechIcon';

interface TechListProps {
    list: TechIconProps[];
}

export const TechList: FC<TechListProps> = ({ list }): ReactElement => {
    return (
        <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 2xl:gap-10 place-items-center">
            {list.map((props) => {
                return <TechIcon key={props.name} {...props} />;
            })}
        </div>
    );
};
