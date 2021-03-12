module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: "#088988",
        black: {
          light: "#2C3E51",
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
