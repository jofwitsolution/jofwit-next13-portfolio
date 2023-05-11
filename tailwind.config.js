/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primaryColor: "#edf2f8",
        secondaryColor: "#247af2",
        lightGrayColor: "#e4e4e4",
        grayColor: "#6b7688",
        blackColor: "#030303",
        brownColor: "#46364a",
      },
      backgroundColor: {
        primaryColor: "#edf2f8",
        secondaryColor: "#247af2",
        lightGrayColor: "#e4e4e4",
        grayColor: "#6b7688",
        blackColor: "#030303",
        brownColor: "#46364a",
      },
    },
  },
  plugins: [],
};
