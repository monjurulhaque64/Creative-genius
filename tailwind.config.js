/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FFF",
          "background": "#222A33",
          "info": "#FF1200"
        },
      },
      ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

