/** @type {import('tailwindcss').Config} */
import shadcnConfig from "shadcn/ui/tailwind.config"

export default {
  ...shadcnConfig,
  content: ["./**/*.{html,js,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"], // Include .ts and .tsx files
  theme: {
    ...shadcnConfig.theme,
    extend: {
      ...shadcnConfig.theme.extend.colors,
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [...shadcnConfig.plugins, require("tailwindcss-animate")],
}
