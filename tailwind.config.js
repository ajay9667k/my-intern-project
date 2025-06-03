/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "rt1":"url(/src/imge/rt1.avif)"
      }
    },
  },
  plugins: [],
}

