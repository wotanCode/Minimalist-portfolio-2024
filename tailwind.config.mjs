/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Colores para tema oscuro https://colorhunt.co/palette/0306373c0753720455910a67
        primary: "#910A67", // TODO
        secondary: "#720455", // TODO
        hagalRune: "#002441",
        background: "#13151a",
        backgroundWhite: "#eae5d4", // TODO: Mover a estilos de temas cuando exista.
      },
    },
  },
  plugins: [],
};
