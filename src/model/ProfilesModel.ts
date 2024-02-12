import { type ProfilesData } from "../types/Model";
import Model from "./Model";

export class ProfilesModel extends Model<ProfilesData> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (profilesData: ProfilesData) {
        super(profilesData)
    }
}