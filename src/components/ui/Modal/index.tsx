import * as Dialog from '@radix-ui/react-dialog';
import { FC, ReactElement, ReactNode } from 'react';
import { X } from '@phosphor-icons/react';

interface ModalProps {
    children?: ReactNode;
    open: boolean;
    title?: string;
    description?: string;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ children, open = false, title, description, onClose }): ReactElement => {
    return (
        <Dialog.Root open={open}>
            <Dialog.Portal>
                <Dialog.Overlay
                    className="bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0"
                    onClick={onClose}
                />

                <Dialog.Content className="max-h-[90vh] w-[90vw] max-w-[90vw] p-8 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-blayout-2 overflow-scroll data-[state=open]:animate-contentShow shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    {title && <Dialog.Title className="m-0 p-0 text-primary text-3xl font-bold">{title}</Dialog.Title>}

                    {description && (
                        <Dialog.Description className="text-tprimary mt-2 mb-5 text-lg leading-normal">
                            {description}
                        </Dialog.Description>
                    )}

                    <Dialog.Close asChild onClick={onClose}>
                        <button
                            type="button"
                            className="h-6 w-6 p-1 transition absolute top-4 right-4 inline-flex items-center justify-center rounded-full text-tprimary hover:bg-primary focus:shadow-violet7 appearance-none focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                            <X />
                        </button>
                    </Dialog.Close>

                    {children}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};
