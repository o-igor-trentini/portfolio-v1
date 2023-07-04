import { FC, ReactElement, ReactNode } from 'react';

interface TitleProps {
    children: ReactNode;
    level: 1 | 2 | 3 | 4;
    className?: string;
}

export const Title: FC<TitleProps> = ({ children, level, ...props }): ReactElement => {
    const element: Record<typeof level, ReactElement> = {
        '1': <h1 {...props}>{children}</h1>,
        '2': <h2 {...props}>{children}</h2>,
        '3': (
            <h3
                {...props}
                className={props.className ?? 'text-5xl md:text-7xl text-primary font-bold lg:text-left text-left'}
            >
                {children}
            </h3>
        ),
        '4': (
            <h4 {...props} className={props.className ?? 'text-5xl text-tprimary font-bold lg:text-left text-left'}>
                {children}
            </h4>
        ),
    };

    return element[level];
};
