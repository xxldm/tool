const colors = require("tailwindcss/colors");

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/index.html", "./src/**/*.{vue,scss}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        biliPink: "#ff80ab",
        gray: colors.neutral,
      },
      zIndex: {
        1: 1,
      },
      transitionDuration: {
        0: "0s",
      },
    },
  },
  plugins: [],
};
