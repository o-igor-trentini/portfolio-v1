import { FC, ReactElement } from 'react';
import { Title } from '@/components/ui/Title';

export const Description: FC = (): ReactElement => (
    <div className="flex flex-col gap-4">
        <Title level={1} className="text-5xl lg:text-6xl 2xl:text-7xl font-bold text-center lg:text-left text-primary">
            Igor Trentini
        </Title>

        <Title
            level={2}
            className="text-lg lg:text-xl 2xl:text-2xl font-semibold text-center lg:text-left font-mono text-tthird"
        >
            Desenvolvedor Full Stack
        </Title>
    </div>
);
