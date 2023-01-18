/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide": "slide 1000ms ease infinite"
      },
      keyframes: {
        slide: {
          "0%": { transform: "translate(-8rem)" },
          "100%": { transform: "translate(10rem)" }
        }
      }
    },
  },
  plugins: [],
}
