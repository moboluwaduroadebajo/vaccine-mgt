import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": "url('../assets/mom-image.png')",
        loginBg: "url(../assets/login_bg.png)",
        spiral: "url(../assets/spiral.png)",
      },
      screens: {
        tablet: "840px",
        large: "1200px",
      },
      colors: {
        green: {
          100: "#d2e8d2",
          200: "#b4d9b4",
          300: "#8fc78f",
          400: "#6ab46a",
        },
      },
      fontFamily: {
        league: ["var(--font-league_spartan)"],
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;

