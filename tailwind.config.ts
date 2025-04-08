import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ted-blue': {
          50: 'var(--ted-blue-50)',
          100: 'var(--ted-blue-100)',
          200: 'var(--ted-blue-200)',
          300: 'var(--ted-blue-300)',
          400: 'var(--ted-blue-400)',
          500: 'var(--ted-blue-500)',
          600: 'var(--ted-blue-600)',
          700: 'var(--ted-blue-700)',
          800: 'var(--ted-blue-800)',
          900: 'var(--ted-blue-900)',
        },
      },
    },
  },
  plugins: [],
};

export default config; 