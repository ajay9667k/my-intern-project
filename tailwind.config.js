/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "img":"url(/src/imge/rt2.avif)",
        "img1":"url(/src/imge/map2.jpg)"
      }
    },
  },
  plugins: [],
}

