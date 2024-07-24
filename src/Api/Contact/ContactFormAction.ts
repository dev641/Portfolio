import {name, phone, email, subject, message, submit} from '../../data/Contact/ContactForm.json'
import { ContactFieldTransformers } from '../../decorator/ContactFormTransformer'
import { type ContactForm } from '../../types/cards'
import axios from 'axios'
export const sendEmail = (data: {name: string, phone: string, email: string, subject: string, message: string}): Promise<void> => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/send-email', data)
            .then(() => {
                console.log('Email sent successfully.')
                resolve()
            })
            .catch((error: { message: any }) => {
                console.error('Error sending email:', error.message)
                reject(error.message)
            })
    })
}

const contactForm: ContactForm = ContactFieldTransformers({name, phone, email, subject, message, submit})
export default contactForm