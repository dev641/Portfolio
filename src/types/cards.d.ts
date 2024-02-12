import { ThemeType } from "./util"

interface Link {
  name?: string
  src: string
}

export interface ImageCard {
  image: Link
}

export type render = (data: T, theme?: ThemeType, ind?:number) => string

export type renderSection = (id: string, data: T) => string

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isEmail (input: string): input is Email {
  // Regular expression to validate an email address format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  return emailRegex.test(input)
}

interface SocialIcons {
  logoClass: string[]
  link: Link
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
  skillSet: Logo[]
  likeBtn: {
    name: Logo
    number: number
  }
}

export type PortfolioExpandCard = {
  feature: string
  description: string
  project: { link: Link, logo: Logo }
  close: Logo
} & PortfolioCard

export interface SectionHeader {
  heading: string
  subHeading: string
}

export interface ProfilesCard {
  socialConnects: Link[]
}

export type ContactDetails = {
  image: Link
  name: string
  designation: string
  summary: string
  phone: string
  email: string
  socialConnects: Link[]
}

export type formInput = {
  label: string
  type?: 'text' | 'number' | 'submit' | 'email' | 'tel'
  element: 'input' | 'select' | 'textarea' | 'button',
  placeholder?: string
  required?: 'required'
  pattern?: RegExp
}
export interface nameInputData {
  label: string
  type: string
  placeholder: string
  required: string 
  element: string
}
export type nameInput = {
  label: string
  type: 'text'
  placeholder: string
  required: 'required'
  element: 'input'
}

export interface phoneInputData {
  label: string
  type: string
  placeholder: string
  pattern: string
  element: string
}
export type phoneInput = {
  label: string
  type: 'tel'
  placeholder: string
  pattern: RegExp
  element: 'input'
}

export interface emailInputData {
  label: string
  type: string
  placeholder: string
  required: string
  pattern: string
  element: string
}

export type emailInput = {
  label: string
  type: 'email'
  placeholder: string
  required: 'required'
  pattern: RegExp
  element: 'input'
}

export type subjectInput = {
  label: string
  type: 'text'
  placeholder: string
  required: 'required'
  element: 'input'
}

export interface subjectInputData {
  label: string
  type: string
  placeholder: string
  required: string
  element: string
}

export interface messageInputData {
  label: string
  placeholder: string
  required: string
  element: string
}

export type messageInput = {
  label: string
  placeholder: string
  required: 'required'
  element: 'textarea'
}

export interface submitInputData {
  label: string
  type: string
  element: string
}

export type submitInput = {
  label: string
  type:'submit'
  element: 'button'
}

export interface ContactFormData {
  name: nameInputData
  phone: phoneInputData
  email: emailInputData
  subject: subjectInputData
  message: messageInputData
  submit: submitInputData
}
export type ContactForm = {
  name: nameInput
  phone: phoneInput
  email: emailInput
  subject: subjectInput
  message: messageInput
  submit: submitInput
}

export type contactFieldTransformer = (data: ContactFormData) => ContactForm