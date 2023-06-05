import { FC, ReactElement, ReactNode } from 'react';
import { Title } from '@/components/ui/Title';

interface SectionTitleProps {
    children: ReactNode;
}

export const SectionTitle: FC<SectionTitleProps> = ({ children }): ReactElement => {
    return (
        <div className="flex flex-col gap-2">
            <Title level={3}>{children}</Title>

            <hr className="w-full border-t-8 border-secondary rounded-3xl" />
        </div>
    );
};
