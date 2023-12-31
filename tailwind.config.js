/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      340: "340px",
      425: "425px",
      480: "480px",
      560: "560px",
      640: "640px",
      690: "690px",
      768: "768px",
      880: "880px",
      960: "960px",
      1024: "1024px",
      1180: "1180px",
      1200: "1200px",
      1280: "1280px",
      1340: "1340px",
      1400: "1400px",
      1600: "1600px",
      1700: "1700px",
      2000: "2000px",
    },
    extend: {
      colors: {
        primary: {
          100: "#cceafd",
          200: "#ddf4e4",
          300: "#c39cf6",
          400: "#2C7D7B",
          main: "#1A44ED",
          hmain: "#0063D7",
          navy: "#0F2167",
          600: "#185F5D",
          650: "#003E3C",
          700: "#0D4970",
          h700: "#092c28",
          800: "#00395F",
          900: "#002C49",
          1000: "#19154e",
        },
        neutral: {
          20: "#dfdede",
          50: "#FAFAFA",
          100: "#f1f2f4",
          main: "#414141",
          300: "#CED2D6",
          400: "#9EA5AD",
          420: "#7C7C7C",
          500: "#676E76",
          600: "#596066",
          700: "#6b6b78",
          900: "#90909e",
          1000: "#1A1D1F",
        },
        yellow: {
          100: " #fec84b",
          700: "#fee9cb",
        },
        orange: {
          900: "#FB8B24",
        },
        red: {
          400: "#860A35",
          700: "#DC0000",
        },
        blackhue: {
          100: "#2e2e2e",
          200: "#101828",
        },
        cream: {
          100: "#fef9f6",
        },
      },
      fontFamily: {
        primary: ["Inter", "Sans-Serif"],
      },
      animation: {
        "float-xy": "float-xy 6s linear infinite",
        grow: "grow .8s linear infinite",
        grow_sm: "grow_sm .3s linear",
        slide_down: "slide_down .4s linear",
        slide_right: "slide_right .4s linear",
      },
      keyframes: {
        "float-xy": {
          "0%": {
            transform: "translateY(0)",
            scale: "1",
            rotate: "0",
            opacity: 0,
          },
          "50%": {
            transform: "translateY(15px)",
            scale: "1.1",
            rotate: "5deg",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(32px)",
            scale: "1.2",
            rotate: "10deg",
            opacity: 0,
          },
        },
        grow: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
        grow_sm: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        slide_down: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        slide_right: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
    },
  },
  plugins: [],
};
