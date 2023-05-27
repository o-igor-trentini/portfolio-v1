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
            },
            backgroundColor: {
                primary: '#121212',
                secondary: '#7C7C7C',
                aux: '#FFFFFF',
                aux2: '#2F2F2F',
                aux3: '#212121',
            },
            textColor: {
                primary: '#FFFFFF',
                secondary: '#B8B8B8',
                disabled: '#898989',
            },
        },
    },
    plugins: [],
};
