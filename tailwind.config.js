/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#DB4444", // Name your color (e.g., "customRed")
      },
    },
  },
  plugins: [],
};
