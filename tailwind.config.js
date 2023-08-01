/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            boxShadow: {
                'search-bar': '0 1px 6px 0 #171717',
                'search-bar-light': '0 1px 6px rgba(32,33,36,.28)',
                'search-bar-nav-hover': '0 4px 12px rgba(23,23,23,0.9)',
                'search-bar-nav': '0 1px 3px rgba(23,23,23,0.24)',
                'search-bar-nav-light': '0 2px 5px 1px rgba(64,60,67,.16)',
                'search-bar-nav-light-hover':
                    '0 2px 8px 1px rgba(64,60,67,.24)',
                'clear-button': 'rgb(0, 0, 0, 0.2) 1px 2px 4px',
                'setting-dropdown': '1px 1px 15px 0px #171717',
                'setting-dropdown-light': '0 2px 10px 0 rgba(0,0,0,0.2)',
            },
            gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
