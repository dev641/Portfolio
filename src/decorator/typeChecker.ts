/* eslint-disable @typescript-eslint/restrict-template-expressions */
// import { type ExperienceData } from '../types/Model'
import { type UserDetails } from '../types/cards'

export function typeChecker (data: any[]): UserDetails[] {
  return data.map(exp => {
    if (exp.kind !== 'Company' && exp.kind !== 'Institute') {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Invalid 'kind' value: ${exp.kind}`)
    }

    if (
      exp.timeLine.end !== 'Present' &&
      !(
        typeof exp.timeLine.end === 'object' &&
        'month' in exp.timeLine.end &&
        'year' in exp.timeLine.end
      )
    ) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Invalid 'end' value: ${exp.timeLine.end}`)
    }

    return {
      ...exp,
      kind: exp.kind,
      timeLine: {
        start: exp.timeLine.start,
        end: exp.timeLine.end
      }
    }
  })
}

// export function Validate (data: any[]) {
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   return function <T extends new (...args: any[]) => {}>(constructor: T) {
//     class ValidatedClass extends constructor {
//       constructor (..._: any[]) {
//         const experienceD: ExperienceData = {
//           experience: typeChecker(data)
//         }
//         super(experienceD)
//       }
//     }

//     return ValidatedClass
//   }
// }
