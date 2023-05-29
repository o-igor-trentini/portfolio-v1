import { FC, ReactElement } from 'react';
import { SocialNetworks } from '@/app/components/Home/components/SocialNetworks';
import { Description } from '@/app/components/Home/components/Description';
import { Card } from '@/components/ui/Card';
import profilePng from '../../../../public/profile.png';
import Image from 'next/image';

export const Home: FC = (): ReactElement => {
    return (
        <div className="w-full flex lg:flex-row flex-col lg:justify-start justify-center items-center lg:gap-0 gap-4 relative">
            <div className="lg:absolute lg:z-10 2xl:left-[26rem] xl:left-[14rem] lg:left-[10rem]">
                <Image
                    src={profilePng}
                    alt=""
                    width={340}
                    height={340}
                    className="2xl:w-[20rem] xl:w-[18rem] w-[16rem] rounded-full"
                />
            </div>

            <div className="2xl:w-[38%] xl:w-[44%] lg:w-[50%] lg:z-0 flex flex-col content-center 2xl:ml-[40rem] xl:ml-[28rem] lg:ml-[22rem]">
                <Card className="2xl:pl-32 xl:pl-24 lg:pl-20 border-fourth border-b-4">
                    <div className="flex flex-col gap-4 lg:items-start items-center">
                        <Description />

                        <SocialNetworks />
                    </div>
                </Card>
            </div>
        </div>
    );
};
