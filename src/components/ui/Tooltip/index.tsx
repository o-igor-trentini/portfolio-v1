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
        <RadixTooltip.Provider delayDuration={300}>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

                <RadixTooltip.Portal>
                    <RadixTooltip.Content
                        side={placement}
                        sideOffset={5}
                        className="px-4 py-3 text-tprimary text-md rounded-3xl bg-fourth data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                    >
                        {title}

                        <RadixTooltip.Arrow className="fill-transparent" />
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    );
};
