module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Assistant', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
            },
            colors: {
                primary: 'rgb(99, 71, 209)',
            },
        },
    },
    variants: {
        extend: {
            ringWidth: ['active', 'hover'],
            ringColor: ['active', 'hover'],
            ringOpacity: ['active', 'hover'],
        },
    },
    plugins: [],
};
