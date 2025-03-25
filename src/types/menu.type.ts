export type MenuType = {
  name: string;
  url?: string;
  weight?: number;
  subMenu?: Array<MenuType>;
};
