module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "600px",
      md: "800px",
      lg: "1000px",
      xl: "1200px"
    },
    colors: {
      primary: "#F7BC58",
      grey: "#2A2A2A",
      white: "#fff",
      black: "#000",
      bgGrey: "#D0D0D0",
    },
    extend: {},
  },
  plugins: [],
};
