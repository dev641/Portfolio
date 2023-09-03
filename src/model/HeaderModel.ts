import { brand, menu } from "../data/menu/menu.json";
import { Item, ThemeType, headerData } from "../types/menu";
import { Theme } from "./ThemeModel";
import { ThemeEnum } from "./Enum";

export class HeaderModel implements Theme {
  private brand: Item = {};
  private menu: Item[] = [];
  private theme: ThemeType;
  constructor() {
    this.brand = brand;
    this.menu = menu;
    this.theme = ThemeEnum.dark;
  }

  get Theme() {
    return this.theme;
  }

  get Brand() {
    return this.brand;
  }

  get Menu() {
    return this.menu;
  }

  get Data(): headerData {
    const brand = this.Brand;
    const menu = this.Menu;
    const theme = this.Theme;
    return {
      brand,
      menu,
      theme,
    };
  }
  changeTheme = (theme: ThemeType): void => {
    if (this.theme !== theme) {
      this.theme = theme;
    }
  };
}

export default new HeaderModel();
