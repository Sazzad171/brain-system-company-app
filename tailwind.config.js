/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#88C273",
          light: "#88C273",
        },
        secondary: "#1e293b"
      },
    },
  },
  plugins: [],
};
