import { HeaderModel } from "../model/HeaderModel";
import { headerData } from "./menu";

export type UpdateFileType = (path: string, key: string, value: string) => void;

export type ModelData = {
  header: headerData;
};
