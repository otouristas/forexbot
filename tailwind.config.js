/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: {
            DEFAULT: '#00ccff',
            50: '#e6f9ff',
            100: '#ccf3ff',
            200: '#99e7ff',
            300: '#66dbff',
            400: '#33cfff',
            500: '#00ccff',
            600: '#00a3cc',
            700: '#007a99',
            800: '#005266',
            900: '#002933',
          },
          orange: {
            DEFAULT: '#ff6b35',
            50: '#fff5f2',
            100: '#ffebe5',
            200: '#ffd7cc',
            300: '#ffc3b2',
            400: '#ffaf99',
            500: '#ff6b35',
            600: '#cc562a',
            700: '#994020',
            800: '#662b15',
            900: '#33150a',
          },
        },
      },
    },
  },
  plugins: [],
}
