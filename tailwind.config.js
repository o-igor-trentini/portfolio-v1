/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: '#724CF9',
                secondary: '#04F06A',
                third: '#7C7C7C',
                fourth: '#2F2F2F',
            },
            backgroundColor: {
                blayout: '#121212',
                'blayout-2': '#212121',
                bsecondary: '#7C7C7C',
                bthird: '#FFFFFF',
                bfourth: '#2F2F2F',
            },
            textColor: {
                tprimary: '#FFFFFF',
                tsecondary: '#B8B8B8',
                tthird: '#212121',
                tdisabled: '#898989',
            },
            transitionDuration: {
                DEFAULT: '300ms',
            },

            // Radix
            keyframes: {
                slideDownAndFade: {
                    from: { opacity: 0, transform: 'translateY(-2px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                },
                slideLeftAndFade: {
                    from: { opacity: 0, transform: 'translateX(2px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                slideUpAndFade: {
                    from: { opacity: 0, transform: 'translateY(2px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                },
                slideRightAndFade: {
                    from: { opacity: 0, transform: 'translateX(-2px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
            },
            animation: {
                slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
            },
        },
    },
    plugins: [],
};
