import { FC, ReactElement, ReactNode } from 'react';

interface CardProps {
    children?: ReactNode;
    className?: string;
}

export const Card: FC<CardProps> = ({ children, className }): ReactElement => {
    return <div className={'p-4 rounded-lg bg-white ' + (className || '')}>{children}</div>;
};
