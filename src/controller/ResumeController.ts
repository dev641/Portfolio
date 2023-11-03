import { type ResumeModel } from '../model/ResumeModel'
import { type ResumeData } from '../types/Model'
import { type ThemeFinder } from '../types/util'
import { type ResumeView } from '../view/ResumeView'
import { Controller } from './Controller'

export class ResumeController extends Controller<ResumeModel, ResumeView, ResumeData, HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (model: ResumeModel, view: ResumeView, themeFinder: ThemeFinder) {
    super(model, view, themeFinder)
    this.View.changeResumeBody(this.controlResumeBodyHandler.bind(this))
  }

  controlResumeBodyHandler (name: string): void {
    this.Model.changeStatus(name)
    const theme = this.ThemeFinder()
    this.View.update(theme, this.Model.Data)
  }
}
