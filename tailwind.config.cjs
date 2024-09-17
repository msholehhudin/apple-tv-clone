/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, ts,tsx}"
  ],
  theme: {
    colors: {
      background: '#000',
      backgroundContrast: '#111',
      textBlack: '#1d1d1f',
      white: '#fff',
      red: '#AA4A44'
    },
    fontFamily: {
      sans: [
        "SF Pro Display",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    fontSize: {
      //12, 14, 17, 19, 21, 24, 28, 40, 72

      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1.0625rem", // 17px
      lg: ["1.1875rem", "1.21"], // 19px
      xl: "1.3125rem", // 21px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": ["2.5rem", "1.1"], // 40px
      "5xl": ["4.5rem", "1.05"], // 72px
    },
    extend: {},
  },
  plugins: [],
};
