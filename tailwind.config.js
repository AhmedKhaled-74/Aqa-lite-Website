/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainBlue: "rgb(28, 79, 154)",
        darkModeBabyBlue: "#08182e",
        darkModeMainBlue: "#E8EDF5",
        babyBlue: "#CEEBF3",
        darkCircles: "#061325",
        softRose: "#EA7C98",
        someDarkRed: "#E24547",
        someDarkOrange: "#F47433",
      },
      screens: {
        "3xl": "1535px",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
