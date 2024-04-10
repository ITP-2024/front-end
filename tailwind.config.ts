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
      },
      colors: {
        thistle: "#dec6ee",
        darkmagenta: "#871a99",
        white: "#fff",
        darkslategray: "#323c47",
        shadeofpurple: "#C395D9",
        black: "#000",
        "checkbox-empty": "#d5d5d5"
      },
      spacing: {},
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px"
      },
    },
    fontSize: {
      sm: "0.875rem",
      smi: "0.813rem",
      inherit: "inherit"
    },
  },
  plugins: [],
};
export default config;
