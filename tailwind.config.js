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
        // Professional theme colors
        'primary': '#1E40AF', // Deep blue
        'secondary': '#0F766E', // Teal
        'accent': '#4F46E5', // Indigo
        'neutral': '#1F2937', // Dark gray
        'base-100': '#FFFFFF', // White
        'base-200': '#F3F4F6', // Light gray
        'base-300': '#E5E7EB', // Lighter gray
        'info': '#3ABFF8', // Info blue
        'success': '#36D399', // Success green
        'warning': '#FBBD23', // Warning yellow
        'error': '#F87272', // Error red
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #1E40AF, #4F46E5)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        professionalTheme: {
          primary: '#1E40AF',
          secondary: '#0F766E',
          accent: '#4F46E5',
          neutral: '#1F2937',
          'base-100': '#FFFFFF',
          'base-200': '#F3F4F6',
          'base-300': '#E5E7EB',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
}; 