import { FC, ReactElement } from 'react';
import { Title } from '@/components/ui/Title';

export const Description: FC = (): ReactElement => (
    <div className="flex flex-col gap-4">
        <Title level={1} className="2xl:text-7xl text-6xl text-primary font-bold lg:text-left text-center">
            Igor Trentini
        </Title>

        <Title level={2} className="2xl:text-2xl text-xl text-tthird font-semibold lg:text-left text-center font-mono">
            Desenvolvedor Full Stack
        </Title>
    </div>
);
