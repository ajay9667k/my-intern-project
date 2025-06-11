/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "img":"url(/src/imge/slider2.jpg)",
        "img1":"url(/src/imge/slider1.jpg)"
      }
    },
  },
  plugins: [],
}

