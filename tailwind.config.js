module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'true/false'
    theme: {
        rotate: {
            '270':'270deg'
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