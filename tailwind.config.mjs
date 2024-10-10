/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Colores para tema oscuro https://colorhunt.co/palette/0306373c0753720455910a67
        primary: "rgba(var(--color-primary))",
        secondary: "rgba(var(--color-secondary))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
