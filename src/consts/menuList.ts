interface menuListI {
  order: number;
  title: string;
  link: string;
  // TODO ICON
  // TODO: ID
  // icon: string; // Optional: Add an icon for each menu item. For example, 'user', 'code', etc.
  // id
}

export const menuList: menuListI[] = [
  {
    order: 1,
    title: 'Sobre mi',
    link: '/',
    // icon: 'user',
  },
  {
    order: 2,
    title: 'Proyectos',
    link: '/projects',
    // icon: 'code',
  },
  {
    order: 3,
    title: 'Contacto',
    link: '/contact',
    // icon: 'mail',
  }
]