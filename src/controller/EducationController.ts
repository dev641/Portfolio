import { type EducationModel } from '../model/EducationModel'
import { type EducationData } from '../types/Model'
import { type EducationView } from '../view/EducationView'
import { Controller } from './Controller'

export class EducationController extends Controller<EducationModel, EducationView, EducationData, HTMLDivElement> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (model: EducationModel, view: EducationView) {
    super(model, view)
  }
}
