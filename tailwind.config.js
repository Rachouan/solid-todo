/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        solid: ["degular", "sans-serif"],
        body: ["supria-sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
