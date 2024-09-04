import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#ffffff",
        whiteActive: "#ffffff", // Add whiteActive variant
        primary: "#d1d5db", // Modify primary color
        primaryActive: "#b8bdc7", // Modify primaryActive color
        light: "#f3f4f6",
        lightActive: "#e5e7eb", // Add lightActive variant
        secondary: "#9ca3af", // Modify secondary color
        secondaryActive: "#6b7280", // Modify secondaryActive color
        success: "#6ee7b7", // Modify success color
        successActive: "#48bb78", // Modify successActive color
        info: "#d1d5db", // Modify info color
        infoActive: "#b8bdc7", // Modify infoActive color
        warning: "#fbbf24", // Modify warning color
        warningActive: "#f59e0b", // Modify warningActive color
        danger: "#f87171", // Modify danger color
        dangerActive: "#ef4444", // Modify dangerActive color
        dark: "#4b5563", // Modify dark color
        darkActive: "#1f2937", // Add darkActive variant
      },
    },
  },
  plugins: [],
};

export default config;
export default config;
