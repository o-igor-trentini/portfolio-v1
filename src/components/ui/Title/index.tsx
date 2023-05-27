import React, { FC, ReactElement, ReactNode } from 'react';

interface TitleProps {
    children: ReactNode;
    level: 1 | 2 | 3;
    className?: string;
}

export const Title: FC<TitleProps> = ({ children, level, ...props }): ReactElement => {
    const element: Record<typeof level, ReactElement> = {
        '1': <h1 {...props}>{children}</h1>,
        '2': (
            <h2 {...props} {...props}>
                {children}
            </h2>
        ),
        '3': (
            <h3 {...props} {...props}>
                {children}
            </h3>
        ),
    };

    return element[level];
};
