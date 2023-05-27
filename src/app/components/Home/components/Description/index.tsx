import { FC, ReactElement } from 'react';
import { Title } from '@/components/ui/Title';

export const Description: FC = (): ReactElement => (
    <div className="flex flex-col gap-4">
        <Title level={1} className="text-7xl xl:text-6xl text-primary font-bold text-left">
            Igor Trentini
        </Title>

        <Title level={2} className="text-2xl xl:text-xl text-tthird font-semibold text-left font-mono">
            Desenvolvedor Full Stack
        </Title>
    </div>
);
