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
          "background": "#171717",
        },
      },
      ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

