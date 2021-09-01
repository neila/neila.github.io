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
        extend: {
            typography:{
                DEFAULT:{
                    css:{
                        color:'#F9EFF1',
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
                    }
                }
            }
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