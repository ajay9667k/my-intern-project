/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "img":"url(/src/imge/slider2.jpg)",
        "img1":"url(/src/imge/slider2.jpg)",
        "img2":"url(/src/imge/v1.jpg)",
        "img3":"url(/src/imge/host.gif)"
      }
    },
  },
  plugins: [],
}

