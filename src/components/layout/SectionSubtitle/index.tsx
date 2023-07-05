import { FC, ReactElement } from 'react';
import { Title } from '@/components/ui/Title';
import { SubMenuId, SubMenuLabel } from '@/app/components/consts';

interface SectionSubtitleProps {
    subMenuId: SubMenuId;
    total?: number;
}

export const SectionSubtitle: FC<SectionSubtitleProps> = ({ subMenuId, total }): ReactElement => {
    return (
        <div className="flex flex-col gap-2">
            <Title level={4}>{`${SubMenuLabel[subMenuId]}${total ? ' (' + total + ')' : ''}`}</Title>

            <hr className="w-full border-t-8 border-secondary rounded-3xl" />
        </div>
    );
};
