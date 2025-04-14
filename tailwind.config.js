/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./project/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
      require('tailwind-scrollbar-hide'),
  ],
}

