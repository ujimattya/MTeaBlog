module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {
      colors: {
        green: "#088988",
        black: {
          light: "#2C3E51",
          DEFAULT: "#1b1c1d",
          dark: "#161E2E",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
