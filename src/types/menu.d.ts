// menu -> brand  right list

import { ThemeEnum } from "../model/enum";

export type Item = {
  name?: string;
  href?: string;
};

export type itemGenerator = (items: Item | Item[]) => string;

// Theme
export type ThemeType = ThemeEnum.dark | ThemeEnum.light;

export type ThemeGenerator = (theme: ThemeType) => string;

export type ControlThemeType = (theme: ThemeType) => void;

// Header
export type headerData = {
  brand: Item;
  menu: Item[];
} & { theme: ThemeType };

export type headerGenerator = (items: headerData) => string;

export type classList = { current: string; prev: string };
