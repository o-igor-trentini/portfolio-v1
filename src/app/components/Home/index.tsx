import { FC, ReactElement } from 'react';
import { SocialNetworks } from '@/app/components/Home/components/SocialNetworks';
import { Description } from '@/app/components/Home/components/Description';
import { Card } from '@/components/ui/Card';
import profilePng from '../../../../public/profile.png';
import Image from 'next/image';

export const Home: FC = (): ReactElement => {
    return (
        <div className="w-full flex flex-row items-center relative">
            <div className="absolute z-10 left-[16rem] xl:left-[10rem]">
                <Image
                    src={profilePng}
                    alt=""
                    width={340}
                    height={340}
                    className="w-[20rem] xl:w-[18rem] rounded-full"
                />
            </div>

            <div className="w-[50%] z-0 flex flex-col content-center ml-[30rem] xl:ml-[24rem]">
                <Card className="pl-32 xl:pl-20 border-fourth border-b-4">
                    <div className="flex flex-col gap-4">
                        <Description />

                        <SocialNetworks />
                    </div>
                </Card>
            </div>
        </div>
    );
};
