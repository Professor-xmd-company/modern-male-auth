import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          void: "#121416",
        },
        slate: {
          border: "#2A2E33",
        },
        bronze: {
          DEFAULT: "#B87333",
          hover: "#C9854A",
        },
        copper: {
          error: "#9E4739",
        },
        calm: {
          text: "#E2E4E7",
        },
      },
    },
  },
  plugins: [],
};
export default config;
