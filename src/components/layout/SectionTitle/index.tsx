import { FC, ReactElement } from 'react';
import { Title } from '@/components/ui/Title';

export const SectionTitle: FC = (): ReactElement => {
    return (
        <div className="flex flex-col gap-4">
            <Title level={3}>Stack atual</Title>
        </div>
    );
};
