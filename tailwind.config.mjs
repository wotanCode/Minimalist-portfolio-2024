/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Colores para tema oscuro https://colorhunt.co/palette/0306373c0753720455910a67
        primary: "#910A67",
        secondary: "#720455",
        accent: "#3C0753",
        background: "#030637",
      },
    },
  },
  plugins: [],
};
