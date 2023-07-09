'use client';

import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

interface Images {
    id: string;
    component: ReactElement;
    href: string;
}

export const SocialNetworks: FC = (): ReactElement => {
    const iconClassName = 'w-8 h-8 fill-third cursor-pointer hover:fill-secondary transition ease-in-out';

    const images: Images[] = [
        {
            id: 'LinkedIn',
            component: <LinkedinLogo weight="bold" className={iconClassName} />,
            href: 'https://www.linkedin.com/in/igor-trentini/',
        },
        {
            id: 'Instagram',
            component: <InstagramLogo weight="bold" className={iconClassName} />,
            href: 'https://www.instagram.com/ct.igor/',
        },
        {
            id: 'GitHub',
            component: <GithubLogo weight="bold" className={iconClassName} />,
            href: 'https://github.com/o-igor-trentini',
        },
    ];

    return (
        <div className="flex flex-row gap-2">
            {images.map(({ id, component, href }) => {
                return (
                    <Link key={id} href={href} target="_blank" title={id} className="">
                        {component}
                    </Link>
                );
            })}
        </div>
    );
};
