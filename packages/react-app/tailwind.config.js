/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        spacing: "var(--spacing)",
        "inner-spacing": "var(--inner-spacing)",
      },
      colors: {
        purple: "var(--purple)",
        "purple-hover": "var(--purple-hover)",
        "light-purple": "var(--light-purple)",
        "dark-gray": "var(--dark-gray)",
        gray: "var(--gray)",
        borders: "var(--borders)",
        "light-gray": "var(--light-gray)",
        white: "var(--white)",
        red: "var(--red)",
      },
    },
  },
  plugins: [],
};
