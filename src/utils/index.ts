export const resetScrollTop = (id: string): void => {
    const element = document.getElementById(id) as HTMLDivElement | undefined;

    element?.scrollTo({ top: 0 });
};
