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
        },
    },
    plugins: [],
};
