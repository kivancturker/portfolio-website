import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunito)", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "inherit",
            h1: {
              color: "inherit",
              fontSize: "2rem",
              fontWeight: "700",
              marginTop: "0",
              marginBottom: "1rem",
            },
            h2: {
              color: "inherit",
              fontSize: "1.5rem",
              fontWeight: "600",
              marginTop: "2rem",
              marginBottom: "1rem",
            },
            h3: {
              color: "inherit",
              fontSize: "1.25rem",
              fontWeight: "600",
              marginTop: "1.5rem",
              marginBottom: "0.75rem",
            },
            h4: {
              color: "inherit",
              fontSize: "1.125rem",
              fontWeight: "600",
            },
            p: {
              color: "inherit",
              marginTop: "1rem",
              marginBottom: "1rem",
              lineHeight: "1.7",
            },
            ul: {
              marginTop: "1rem",
              marginBottom: "1rem",
              paddingLeft: "1.5rem",
            },
            li: {
              color: "inherit",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            strong: {
              color: "inherit",
              fontWeight: "600",
            },
            a: {
              color: "inherit",
              textDecoration: "underline",
              fontWeight: "inherit",
              "&:hover": {
                textDecoration: "none",
              },
            },
            code: {
              color: "inherit",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              padding: "0.25rem 0.375rem",
              borderRadius: "0.25rem",
              fontWeight: "inherit",
              fontSize: "0.875em",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            pre: {
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              borderRadius: "0.5rem",
              padding: "1rem",
              overflowX: "auto",
              border: "1px solid rgba(0, 0, 0, 0.1)",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
              borderRadius: "0",
              fontSize: "inherit",
            },
            blockquote: {
              borderLeftWidth: "4px",
              borderLeftColor: "rgba(0, 0, 0, 0.2)",
              paddingLeft: "1rem",
              fontStyle: "italic",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
