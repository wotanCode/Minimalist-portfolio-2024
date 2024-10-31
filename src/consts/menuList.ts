interface menuListI {
  order: number;
  title: string; //internalizar esto
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
    // id: constants.id
    // icon: 'user',
  },
  {
    order: 2,
    title: 'Proyectos',
    link: '/projects',
    // id: constants.id
    // icon: 'code',
  },
  {
    order: 3,
    title: 'Contacto',
    link: '/contact',
    // id: constants.id
    // icon: 'mail',
  }
]