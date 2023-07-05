'use client';

import { FC, ReactElement, ReactNode } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { TooltipContentProps as RadixTooltipContentProps } from '@radix-ui/react-tooltip/dist/index';

export type TooltipPlacement = RadixTooltipContentProps['side'];

interface TooltipProps {
    children: ReactNode | ReactNode[];
    title: ReactNode;
    placement?: TooltipPlacement;
}

export const Tooltip: FC<TooltipProps> = ({ children, title, placement }): ReactElement => {
    return (
        <RadixTooltip.Provider delayDuration={250}>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

                <RadixTooltip.Portal>
                    <RadixTooltip.Content
                        side={placement}
                        sideOffset={5}
                        className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-tprimary select-none rounded-md bg-black px-4 py-3 text-md leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                    >
                        {title}

                        <RadixTooltip.Arrow className="fill-black" />
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    );
};
