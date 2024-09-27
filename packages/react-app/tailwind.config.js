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
      screens: {
        sm: "300px",
        md: "768px",
        lg: "1024px",
        xl: "1024px",
      },

      height: {
        root: "100vh",
        "root-100": "100vw",
        "root-90": "90vw",
      },
    },
  },
  plugins: [],
};
