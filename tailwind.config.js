module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: ({ colors }) => ({
                'orange': {
                    1000: '#FF621F',
                    1100: '#da8709',
                },
                'gray': {
                    1000: '#8B99B2',
                },
                'yellow': {
                    1000: '#95B541',
                },
            }),
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem' }],
                sm: ['0.875rem', { lineHeight: '1.25rem' }],
                base: ['1rem', { lineHeight: '1.5rem' }],
                lg: ['1.125rem', { lineHeight: '1.75rem' }],
                xl: ['1.25rem', { lineHeight: '1.75rem' }],
                xxl: ['1.375rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '1.875rem' }],
                '2xxl': ['2rem', { lineHeight: '2.5rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '4xxl': ['3rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '5rem' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
                '7xl': ['4.5rem', { lineHeight: '1' }],
                '8xl': ['6rem', { lineHeight: '1' }],
                '7xxl': ['7rem', { lineHeight: '1' }],
                '9xl': ['8rem', { lineHeight: '1' }],
                '12xl': ['12.5rem', { lineHeight: '13.125rem' }]
            },
            width: {
                'services-item': '14.2857143%'
            }
        },
    },
    plugins: [],
}