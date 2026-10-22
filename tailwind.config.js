/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#F0F7F7',
          100: '#D6EAE9',
          200: '#ADD5D3',
          300: '#7FBEBB',
          400: '#3D9E9A',
          500: '#147470',
          600: '#0E5C59',
          700: '#0B4845',
          800: '#083836',
          900: '#052625',
          950: '#021615',
        },
        gold: {
          50: '#FAF8F2',
          100: '#F3EDE0',
          200: '#E6D9C0',
          300: '#D7C29B',
          400: '#C7AA72',
          500: '#B89249', // Antique Gold
          600: '#9E7A36',
          700: '#7E6128',
          800: '#5F481C',
          900: '#413112',
          accent: '#C5A059',
          light: '#DFC793',
          dark: '#8C6E2D',
        },
        slate: {
          surface: '#F8F9FA',
          subtle: '#EEF0F2',
          border: '#E1E4E8',
        },
        stark: {
          black: '#070A0A',
          charcoal: '#121617',
          muted: '#4B5563',
        }
      },
      fontFamily: {
        serif: [
          'Merriweather',
          'Playfair Display',
          'Cinzel',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'serif',
        ],
        sans: [
          'Merriweather',
          'Georgia',
          'serif',
        ],
      },
      borderRadius: {
        none: '0px',
        xs: '2px',
        sm: '3px',
        DEFAULT: '4px',
        md: '4px', // strict limit: no heavy rounding
        lg: '4px', // strict limit: no heavy rounding
        xl: '4px', // strict limit: no heavy rounding
        '2xl': '4px',
        '3xl': '4px',
        full: '4px', // Safety override to prevent pill shapes entirely
      },
    },
  },
  plugins: [],
};
