import * as React from 'react';
import { FC, ReactElement } from 'react';

interface SvgProps {
    className?: string;
}

export const LinkedInSvg: FC<SvgProps> = ({ className }): ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256" className={className}>
        <path d="M216 20H40a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20Zm-4 192H44V44h168Zm-100-36v-52a12 12 0 0 1 21.43-7.41A40 40 0 0 1 192 152v24a12 12 0 0 1-24 0v-24a16 16 0 0 0-32 0v24a12 12 0 0 1-24 0Zm-16-52v52a12 12 0 0 1-24 0v-52a12 12 0 0 1 24 0ZM68 80a16 16 0 1 1 16 16 16 16 0 0 1-16-16Z" />
    </svg>
);

export const InstagramSvg: FC<SvgProps> = ({ className }): ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256" className={className}>
        <path d="M128 80a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48Zm0 72a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm48-132H80a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h96a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60Zm36 156a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h96a36 36 0 0 1 36 36ZM196 76a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z" />
    </svg>
);

export const GitHubSvg: FC<SvgProps> = ({ className }): ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256" className={className}>
        <path d="M212.62 75.17A63.7 63.7 0 0 0 206.39 26 12 12 0 0 0 196 20a63.71 63.71 0 0 0-50 24h-20a63.71 63.71 0 0 0-50-24 12 12 0 0 0-10.39 6 63.7 63.7 0 0 0-6.23 49.17A61.5 61.5 0 0 0 52 104v8a60.1 60.1 0 0 0 45.76 58.28A43.66 43.66 0 0 0 92 192v4H76a20 20 0 0 1-20-20 44.05 44.05 0 0 0-44-44 12 12 0 0 0 0 24 20 20 0 0 1 20 20 44.05 44.05 0 0 0 44 44h16v12a12 12 0 0 0 24 0v-40a20 20 0 0 1 40 0v40a12 12 0 0 0 24 0v-40a43.66 43.66 0 0 0-5.76-21.72A60.1 60.1 0 0 0 220 112v-8a61.5 61.5 0 0 0-7.38-28.83ZM196 112a36 36 0 0 1-36 36h-48a36 36 0 0 1-36-36v-8a37.87 37.87 0 0 1 6.13-20.12 11.65 11.65 0 0 0 1.58-11.49 39.9 39.9 0 0 1-.4-27.72 39.87 39.87 0 0 1 26.41 17.8 12 12 0 0 0 10.1 5.53h32.35a12 12 0 0 0 10.11-5.53 39.84 39.84 0 0 1 26.41-17.8 39.9 39.9 0 0 1-.4 27.72 12 12 0 0 0 1.61 11.53A37.85 37.85 0 0 1 196 104Z" />
    </svg>
);
