import { ControlThemeType } from "./../types/menu.d";
import { HeaderView } from "../view/HeaderView";
import { HeaderModel } from "../model/HeaderModel";
export class HeaderController {
  private headerModel: HeaderModel;
  private headerView: HeaderView;
  constructor(headerModel: HeaderModel, headerView: HeaderView) {
    this.headerModel = headerModel;
    this.headerView = headerView;
    this.headerView.changeTheme(this.controlTheme.bind(this));
  }
  controlTheme: ControlThemeType = (theme) => {
    this.headerModel.changeTheme(theme);
    this.headerView.update(this.headerModel.Data);
  };
}
