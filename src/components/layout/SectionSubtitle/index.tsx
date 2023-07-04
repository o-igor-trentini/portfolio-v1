import { FC, ReactElement } from 'react';
import { Title } from '@/components/ui/Title';
import { SubMenuId, SubMenuLabel } from '@/app/components/consts';

interface SectionSubtitleProps {
    subMenuId: SubMenuId;
}

export const SectionSubtitle: FC<SectionSubtitleProps> = ({ subMenuId }): ReactElement => {
    return (
        <div id={subMenuId} className="flex flex-col gap-2">
            <Title level={4}>{SubMenuLabel[subMenuId]}</Title>

            <hr className="w-full border-t-8 border-secondary rounded-3xl" />
        </div>
    );
};
