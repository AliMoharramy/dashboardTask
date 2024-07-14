import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      tableTop: "#F4F7FD",
      blue: "#0B64FE",
      gray: "#DAE2ED",
      white: "#FFFFFF",
      grayText: "#7E8595",
      borderColor: "rgba(0, 0, 0, 0.05)",
      navborderColor: "rgba(0, 0, 0, 0.15)",
      green: "#078C03",
      red: "#F20505",
      black: "#000000",
    },
    extend: {
      height: {
        "85vh": "90vh",
        "15vh": "10vh",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
