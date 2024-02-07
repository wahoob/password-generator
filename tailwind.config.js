/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-card-color': 'hsl(248, 10%, 15%)',
        'custom-green-color': 'hsl(127, 100%, 82%)',
        'inner-card-color': 'hsl(248, 15%, 11%)',
        'text-color': 'hsl(252, 11%, 91%)',
        'header-color': 'hsl(251, 9%, 53%)',
        'too-weak': 'rgb(247, 75, 75)',
        'weak': 'rgb(251, 122, 86)',
        'medium': 'rgb(248, 203, 99)',
      },
    },
  },
  plugins: [],
}