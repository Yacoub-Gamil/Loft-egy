/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        xxl: "1320px",
      },
      fontFamily: {
        sevillana: ["Sevillana"],
      },
    },
    keyframes: {
      slider: {
        "0%,15%": { backgroundImage: 'url("loft/bg-1.jpg")' },
        "15%,30%": { backgroundImage: 'url("loft/bg-2.jpg")' },
        "30% ,45%": { backgroundImage: 'url("loft/bg-3.jpg")' },
        "45%,60%": { backgroundImage: 'url("loft/bg-4.jpg")' },
        "60%, 80%": { backgroundImage: 'url("loft/bg-5.jpg")' },
        "80%, 100%": { backgroundImage: 'url("loft/bg-6.jpg")' },

        // "20%": { " background-color": "#f1s5f6" },
        // "40%": { opacity: 0.4 },
        // "80%": { opacity: 0.6 },
        // "100%": { opacity: 1 },
      },
    },
  },
  plugins: [],
};
