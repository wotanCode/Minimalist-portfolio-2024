import { IDS } from "./const";

interface menuListI {
  order: number;
  title: string;
  link: string;
  id: string;
  // TODO ICON
  // icon: string; // Optional: Add an icon for each menu item. For example, 'user', 'code', etc.
}

export const menuList: menuListI[] = [
  {
    order: 1,
    title: "Sobre mi",
    link: "/",
    id: IDS.navbar.aboutMe,
    // icon: 'user',
  },
  {
    order: 2,
    title: "Proyectos",
    link: "/projects",
    id: IDS.navbar.projects,
    // icon: 'code',
  },
  {
    order: 3,
    title: "Contacto",
    link: "/contact",
    id: IDS.navbar.contact,
    // icon: 'mail',
  },
];
