import { FC, ReactElement } from 'react';
import { GitHubSvg, InstagramSvg, LinkedInSvg } from '@/app/components/Home/components/SocialNetworks/Icons';
import Link from 'next/link';

interface Images {
    id: string;
    component: ReactElement;
    href: string;
}

export const SocialNetworks: FC = (): ReactElement => {
    const iconClassName = 'fill-third cursor-pointer hover:fill-secondary transition duration-300 ease-in-out';

    const images: Images[] = [
        {
            id: 'LinkedIn',
            component: <LinkedInSvg className={iconClassName} />,
            href: 'https://www.linkedin.com/in/igor-trentini/',
        },
        {
            id: 'Instagram',
            component: <InstagramSvg className={iconClassName} />,
            href: 'https://www.instagram.com/ct.igor/',
        },
        {
            id: 'GitHub',
            component: <GitHubSvg className={iconClassName} />,
            href: 'https://github.com/o-igor-trentini',
        },
    ];

    // TODO: Implementar tooltip nas imagens

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
