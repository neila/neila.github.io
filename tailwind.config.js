module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'true/false'
    theme: {
        rotate: {
            270: '270deg',
        },
        fontWeight: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },
        fontSize: {
            xs: '.60rem',
            sm: '.875rem',
            tiny: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
            square: 'square',
        },
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        color: '#F9EFF1',
                        a: {
                            color: '#F9EFF1',
                            '&:hover': {
                                color: '#F8D106',
                            },
                        },
                        h1: {
                            color: '#F9EFF1',
                            fontWeight: '800',
                        },
                        h2: {
                            color: '#F9EFF1',
                            fontWeight: '700',
                        },
                        h3: {
                            color: '#F9EFF1',
                            fontWeight: '600',
                        },
                        h4: {
                            color: '#F9EFF1',
                            fontWeight: '500',
                        },
                    },
                },
            },
        },
    },
    variants: {
        extend: {
            animation: ['group-hover'],
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
}
