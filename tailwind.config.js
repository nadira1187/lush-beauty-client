/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--color-border)",
        ring: "var(--color-ring)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        destructive: "var(--color-destructive)",
        card: "var(--color-card)",
        popover: "var(--color-popover)",
        sidebar: "var(--color-sidebar)",
      },
      // Allow outline-color utilities like outline-ring/50
      outlineColor: {
        ring: "var(--color-ring)",
      },
      // Ensure bg-*, text-*, border-* variable utilities work
      backgroundColor: {
        background: "var(--color-background)",
        card: "var(--color-card)",
        popover: "var(--color-popover)",
        sidebar: "var(--color-sidebar)",
      },
      textColor: {
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        destructive: "var(--color-destructive)",
      },
      borderColor: {
        border: "var(--color-border)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
