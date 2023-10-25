import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          120: '#3E5037',
          110: '#7BA06E',
          100: '#9AC88A',
          80: '#AED3A1',
          50: '#CCE3C4',
        }
      },
      fontFamily: {
        sans: [
          'Outfit', 'sans-serif'
        ],
        accent: ['Rammetto One', 'serif']
      },
      fontSize: {
        'small-heading': '1.25rem',
        'medium-subheading': '1.5rem',
        'medium-heading': '1.8rem',
        'big-subheading': '2rem',
        'big-heading': '2.3rem',
        'huge-heading': '4rem',
      }
    },
  },
  plugins: [],
}
export default config
