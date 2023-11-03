// /* eslint-disable @typescript-eslint/strict-boolean-expressions */
// /**
//  * Given  :-
//  *    Image is present inside front end
//  *    Api contains skill name which  need to be added
//  *    Api doesn't contains skill category
//  *
//  * Requirement: - When Added Category based Skill like AI/ML, Front end ....
//  *               Skill shown should comes under Category mentioned abov
//  *    Mapper function will mapped the skill name with its src href
//  *    Mapper function will mapped the skill name with its category also.
//  *
//  * {
//  *                "AI/ML": ["Tensorflow", "Pytorch","Scala"],
//  *                "Front-end": ["React","Angular"]
//  *               }
//  */
// // import fs from 'fs'
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// import fs from 'fs'

// export class SkillSetMapper {
//   private readonly skillSetMapper: Record<string, string> = {}
//   private readonly skillSetCategoryMapper: Record<string, string> = {}
//   private readonly rootDir: string
//   constructor (rootDir: string) {
//     this.rootDir = rootDir
//   }

//   get SkillSetMapper (): Record<string, string> {
//     return this.skillSetMapper
//   }

//   get SkillSetCategoryMapper (): Record<string, string> {
//     return this.skillSetCategoryMapper
//   }

//   private async traverseDirectory (directory: string, skillName: string): Promise<void> {
//     const files = await this.readDirectory(directory)

//     for (const file of files) {
//       const fullPath = `${directory}/${file.name}`

//       if (file.isDirectory) {
//         await this.traverseDirectory(fullPath, skillName)
//       } else {
//         const relativePath = fullPath.replace(`${this.rootDir}/`, '')
//         this.mapper[skillName] = relativePath
//       }
//     }
//   }

//   private async readDirectory (directory: string): Promise<File[]> {
//     return await new Promise((resolve, reject) => {
//       const dirReader = this.createDirectoryReader(directory)
//       const files: File[] = []

//       function readEntries () {
//         dirReader.readEntries((entries) => {
//           if (entries.length === 0) {
//             resolve(files)
//           } else {
//             entries.forEach((entry) => {
//               if (entry.isFile) {
//                 files.push(entry)
//               } else if (entry.isDirectory) {
//                 // If you want to include directories, you can handle them here
//               }
//             })
//             readEntries()
//           }
//         }, reject)
//       }

//       readEntries()
//     })
//   }

//   private createDirectoryReader (directory: string): FileSystemDirectoryReader {
//     const dir = window.webkit ? new (window.webkit.directoryEntry)(directory) : new FileSystemDirectoryEntry(directory, '')
//     return dir.createReader()
//   }

//   public async generateMapper (): void {
//     const skillDirectories = await this.readDirectory(this.rootDir)

//     for (const skill of skillDirectories) {
//       await this.traverseDirectory(skill.fullPath, skill.name)
//     }
//   }
// }
// // class SkillMapper {
// //   private mapper: Record<string, string> = {}

// //   constructor (private readonly rootDir: string) {}

// //   // Rest of the class remains the same
// // }

// export default SkillMapper
