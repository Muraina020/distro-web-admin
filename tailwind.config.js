/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#EFF6FF",
        primary: {
          default: "#00A69C",
          black: "#1B1C1E",
        },
        graylight: "#868686",
        graydark: "#696969",
      },
    },
  },
  plugins: [require("daisyui")],
};
