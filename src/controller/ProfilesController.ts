import { ProfilesModel } from "../model/ProfilesModel";
import { ProfilesData } from "../types/Model";
import { ThemeFinder } from "../types/util";
import { ProfilesView } from "../view/ProfilesView";
import { Controller } from "./Controller";

export class ProfilesController extends Controller<ProfilesModel, ProfilesView, ProfilesData, HTMLDivElement> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (model: ProfilesModel, view: ProfilesView, themeFinder: ThemeFinder) {
        super(model, view, themeFinder)
    }
}