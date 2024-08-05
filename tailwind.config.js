/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        text: "#e9ebf9",
        background: "#0a0e2a", // Dark blue background
        primary: "#4f6dff", // Light blue
        secondary: "#2d3e8e", // Darker blue
        accent: "#4fc3f7", // Cyan
        backgroundDark: "#06081e", // Very dark blue
        backgroundLight: "#121839", // Light dark blue
      },
    },
  },
  plugins: [],
};
