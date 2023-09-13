interface Link {
  name?: string
  src: string
}

export interface ImageCard {
  image: Link
}

export type render = (data: T) => string

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isEmail (input: string): input is Email {
  // Regular expression to validate an email address format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  return emailRegex.test(input)
}

interface Logo {
  logoClass: string[]
  name?: string | number
}

type Download = {
  extension: string
} & Link
interface Date {
  month: number | string
  year: number
}
interface BioCardInfo {
  designation: Logo
  email: Logo
  location: Logo
}
export interface BioCard {
  logo: Logo
  name: string
  description: string
  info: BioCardInfo
}

export interface CvCard {
  heading: string
  download: Download
  contact: Link
}

interface timeLine {
  start: Date
  end: Date | 'Present'
}
export type UserDetails = {
  kind: 'Institute' | 'Company'
  image?: Link
  timeLine: timeLine
  name: string
  btn?: Link
  location: string
  description?: string
} & (Institute | Company)

interface CGPA {
  cgpa: number
  total: number
}

interface Degree {
  degree: string
  stream: string
}
interface Institute {
  degree: Degree
  cgpa: CGPA
  courses?: string[]
}
interface Company {
  designation: string
  skillSet: string[]
}

export interface PortfolioCard {
  image: Link
  heading: string
  skillSet: string[]
  likes: {
    name: Logo
    number: number
  }
}

export interface PortfolioExpandCard {
  image: Link
  heading: string
  feature: string
  skillSet: Logo[]
  description: string
  project: { link: Link, logo: Logo }
  likeBtn: Logo
  close: Logo
}
