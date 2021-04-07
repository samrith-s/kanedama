module.exports = {
    purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
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
    variants: {},
    plugins: [],
};
