import { FC, ReactElement } from 'react';
import { TechIcon, TechIconProps } from '@/app/components/Technologies/components/TechIcon';

interface TechListProps {
    list: TechIconProps[];
}

export const TechList: FC<TechListProps> = ({ list }): ReactElement => {
    return (
        <div className="w-full grid 2xl:grid-cols-12 2xl:gap-10 xl:grid-cols-10 xl:gap-8 lg:grid-cols-8 lg:gap-6 grid-cols-3 gap-8">
            {list.map((props) => {
                return <TechIcon key={props.name} {...props} />;
            })}
        </div>
    );
};
