/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
      colors: {
        bunker: {
          50: "#f5f7fa",
          100: "#eaeff4",
          200: "#d0dce7",
          300: "#a7bed2",
          400: "#779cb9",
          500: "#5680a1",
          600: "#436686",
          700: "#37536d",
          800: "#31465b",
          900: "#2c3c4e",
          950: "#141b23",
        },
        'customGreen': "#C3F00F",
      },
    },
  },
  plugins: [],
};
