module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'true/false'
    theme: {
        rotate: {
            '270':'270deg'
        },
        listStyleType:{
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
            square: 'square',
        },
        extend: {},
    },
    variants: {
        extend: {
            animation: ['group-hover'],
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}