/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#ffffff',
          text: '#000000',
        },
        accent: {
          blue: '#4d6198',
          lightblue: '#a4aec9',
          red: '#cf2e2e',
          orange: '#ff6900',
          grey: '#32373c',
        },
      },
      fontFamily: {
        sans: ['Sofia Pro', 'Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        xs: '13px',
        sm: '14px',
        base: '15px',
        lg: '20px',
        xl: '28px',
        '2xl': '36px',
        '3xl': '40px',
        '4xl': '42px',
      },
      lineHeight: {
        body: '1.7',
        heading: '1.3',
      },
      spacing: {
        section: 'clamp(2rem, 6vw, 6rem)',
        'gutter-mobile': '6vw',
        'gutter-desktop': '4vw',
      },
      maxWidth: {
        site: '2400px',
      },
      screens: {
        tablet: '737px',
        desktop: '1025px',
      },
      gridTemplateColumns: {
        mobile: 'repeat(8, 1fr)',
        desktop: 'repeat(24, 1fr)',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
      },
    },
  },
  plugins: [],
};
