/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#9bdada",
          900: "#0e1c59",
        },
        secondary: {
          900: "#e2001b",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  height: {
    "46px": "46px",
  },
};