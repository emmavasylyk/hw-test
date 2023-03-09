/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#EBD8FF",
        accent: "#5CD3A8",
        black: "#373737",
      },
    },
  },
  plugins: [],
};
