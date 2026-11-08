import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#1e242b', muted: '#69727d', line: '#e7e9ec', paper: '#fafafa' }, fontFamily: { sans: ['Arial', 'Helvetica', 'sans-serif'] } } },
  plugins: [],
} satisfies Config;
