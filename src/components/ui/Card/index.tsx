import { FC, ReactElement, ReactNode } from 'react';

interface CardProps {
    children?: ReactNode;
    padding?: string;
    block?: boolean;
    hoverable?: boolean;
    className?: string;
    onClick?: () => void;
}

export const Card: FC<CardProps> = ({
    children,
    padding,
    block = false,
    hoverable = false,
    className,
    onClick,
}): ReactElement => {
    let cName = '';

    if (className) cName += ' ' + className;
    cName += ' ' + (padding || 'p-4');
    if (block) cName += ' w-full';
    if (hoverable) cName += ' cursor-pointer';

    return (
        <div onClick={onClick} className={'rounded-3xl overflow-hidden  bg-white' + cName}>
            {children}
        </div>
    );
};
