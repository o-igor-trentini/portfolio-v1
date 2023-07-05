import { FC, ReactElement } from 'react';
import { Card } from '@/components/ui/Card';
import profilePng from '../../../../../public/images/profile.png';
import Image from 'next/image';
import { Description } from '@/app/components/Sections/Home/components/Description';
import { SocialNetworks } from '@/app/components/Sections/Home/components/SocialNetworks';

export const Home: FC = (): ReactElement => {
    return (
        <div className="w-full h-full lg:relative flex flex-col lg:flex-row items-center justify-start gap-4 lg:gap-0">
            <div className="lg:absolute lg:z-10 lg:left-[6%] xl:left-[20%]">
                <Image
                    src={profilePng}
                    alt="Imagem de Igor Trentini em um circulo."
                    width={340}
                    height={340}
                    className="w-[16rem] lg:w-[20rem] rounded-full"
                />
            </div>

            <div className="lg:w-[60%] xl:w-[45%] lg:z-0 flex flex-col content-center lg:ml-[calc(6%+15rem)] xl:ml-[calc(20%+15rem)]">
                <Card className="lg:pl-24 xl:pl-32 border-fourth border-b-4">
                    <div className="w-full flex flex-col gap-4 items-center lg:items-start px-12 lg:px-0">
                        <Description />

                        <SocialNetworks />
                    </div>
                </Card>
            </div>
        </div>
    );
};
