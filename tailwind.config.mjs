/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Colores para tema oscuro
        primary: "#002341", //ESTE SI
        secondary: "#eee",
      },
    },
  },
  plugins: [],
};
