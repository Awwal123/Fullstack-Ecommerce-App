/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#DB4444",
      },
      boxShadow: {
        customShadow:  "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;", 
      },
    },
  },
  plugins: [],
};
