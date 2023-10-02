import { type ResumeModel } from '../model/ResumeModel'
import { type ResumeData } from '../types/Model'
import { type ResumeView } from '../view/ResumeView'
import { Controller } from './Controller'

export class ResumeController extends Controller<ResumeModel, ResumeView, ResumeData, HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (model: ResumeModel, view: ResumeView) {
    super(model, view)
    this.view.changeResumeBody(this.controlResumeBodyHandler.bind(this))
  }

  controlResumeBodyHandler (name: string): void {
    this.model.changeStatus(name)
    // eslint-disable-next-line no-debugger
    // debugger
    this.view.update(this.model.Data, this.model.Theme)
  }
}
