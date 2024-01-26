/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
      center: true,
    },
    screens: {
      xs: "350px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1600px",
    },
    extend: {
      fontFamily: {
        primaryFont: ["DM Sans", "sans-serif"],
      },
      colors: {
        "black-100": "#262626",
        "black-rgb": "rgba(38, 38, 38, 0.7)",
        "gray-100": "#767676",
        "white-100": "#F5F5F3",
        white: "#fff",
        "white-70": "rgba(255, 255, 255, 0.7)",
        "broder-70": "#2D2D2D",
        "white-30": "#C4C4C4",
        "box-100": "#D8D8D8",
        "pragrap-100": "#6D6D6D",
        "border-100": "#F0F0F0",
      },
    },
  },
  plugins: [],
};
