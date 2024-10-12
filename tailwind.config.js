/** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class', // Enables dark mode with a 'class'
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}', // Adjust to your file structure
//     './components/**/*.{js,ts,jsx,tsx}',
//     './pages/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
module.exports = {
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        dark: {
          400: '#4A5568', // Define your dark colors
          500: '#2D3748',
        },
      },
    },
  },
  plugins: [],
};
