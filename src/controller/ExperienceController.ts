import { type ExperienceModel } from '../model/ExperienceModel'
import { type ExperienceData } from '../types/Model'
import { type ThemeFinder } from '../types/util'
import { type ExperienceView } from '../view/ExperienceView'
import { Controller } from './Controller'

export class ExperienceController extends Controller<ExperienceModel, ExperienceView, ExperienceData, HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (model: ExperienceModel, view: ExperienceView, themeFinder: ThemeFinder) {
    super(model, view, themeFinder)
  }
}
