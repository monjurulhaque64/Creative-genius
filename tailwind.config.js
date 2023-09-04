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
          "primary": "#FF0000",
          "background": "#FFFFFF",
        },
      },
      ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

