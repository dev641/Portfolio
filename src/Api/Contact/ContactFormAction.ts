import {name, phone, email, subject, message, submit} from '../../data/Contact/ContactForm.json'
import { ContactFieldTransformers } from '../../decorator/ContactFormTransformer'
import { type ContactForm } from '../../types/cards'


const contactForm: ContactForm = ContactFieldTransformers({name, phone, email, subject, message, submit})
export default contactForm