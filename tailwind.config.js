/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#F2C21A", // Vibrant Yellow
        secondary: {
          100: "#FCECDD", // Light Peach for a softer contrast
          200: "#DAA520", // Golden Rod, darker shade of yellow
        },
        dark: "#111111", // Keeping dark as is for neutral contrast
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
