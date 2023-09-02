/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      customButton: {
        backgroundColor: 'blue-500',
        textColor: 'white',
        padding: '.5rem 1rem',
      },
    },
  },

  plugins: [],
}
