import { type phoneInputData, type nameInput,type nameInputData, type phoneInput, emailInput, emailInputData, subjectInputData, subjectInput, messageInputData, messageInput, submitInputData, submitInput, contactFieldTransformer } from "../types/cards"

export function nameFieldTransformer (data: nameInputData): nameInput {
  const {label, placeholder} = data
  const nameData = data
  if (nameData.type !== 'text') {
    throw new Error(`Invalid 'type' value: ${nameData.type}`)
  }

  if (nameData.element !== 'input') {
    throw new Error(`Invalid 'element' value: ${nameData.element}`)
  }

  if (nameData.required !=='required') {
    throw new Error(`Invalid'required' value: ${nameData.required}`)
  }
  return {
    label,
    type: nameData.type,
    placeholder,
    required: nameData.required,
    element: nameData.element
  }
}

export function phoneFieldTransformer (data: phoneInputData): phoneInput {
    const {label, placeholder} = data
    const phoneData = data
    const pattern = new RegExp(phoneData.pattern)
    if (phoneData.type !== 'tel') {
        throw new Error(`Invalid 'type' value: ${phoneData.type}`)
    }
    if (phoneData.element !== 'input') {
        throw new Error(`Invalid 'element' value: ${phoneData.element}`)
    }
    return {
        label,
        placeholder,
        type: phoneData.type,
        pattern,
        element: phoneData.element
    }
}

export function emailFieldTransformer (data: emailInputData): emailInput {
    const {label, placeholder} = data
    const emailData = data
    const pattern = new RegExp(emailData.pattern)
    if (emailData.type !== 'email') {
        throw new Error(`Invalid 'type' value: ${emailData.type}`)
    }
    if (emailData.element !== 'input') {
        throw new Error(`Invalid 'element' value: ${emailData.element}`)
    }
    if (emailData.required !=='required') {
        throw new Error(`Invalid'required' value: ${emailData.required}`)
    }
    return {
        label,
        placeholder,
        required: emailData.required,
        type: emailData.type,
        pattern,
        element: emailData.element
    }
}

export function subjectFieldTransformer (data: subjectInputData): subjectInput {
    const {label, placeholder} = data
    const subjectData = data
    if (subjectData.type !== 'text') {
        throw new Error(`Invalid 'type' value: ${subjectData.type}`)
    }
    if (subjectData.element !== 'input') {
        throw new Error(`Invalid 'element' value: ${subjectData.element}`)
    }
    if (subjectData.required !=='required') {
        throw new Error(`Invalid'required' value: ${subjectData.required}`)
    }
    return {
        label,
        placeholder,
        required: subjectData.required,
        type: subjectData.type,
        element: subjectData.element
    }
}

export function messageFieldTransformer (data: messageInputData): messageInput {
    const {label, placeholder} = data
    const messageData = data
    if (messageData.element !== 'textarea') {
        throw new Error(`Invalid 'element' value: ${messageData.element}`)
    }
    if (messageData.required !=='required') {
        throw new Error(`Invalid'required' value: ${messageData.required}`)
    }
    return {
        label,
        placeholder,
        required: messageData.required,
        element: messageData.element
    }
}

export function submitFieldTransformer (data: submitInputData): submitInput {
    const {label} = data
    const submitData = data
    if (submitData.type !=='submit') {
        throw new Error(`Invalid 'type' value: ${submitData.type}`)
    }
    if (submitData.element !== 'button') {
        throw new Error(`Invalid 'element' value: ${submitData.element}`)
    }
    return {
        label,
        type: submitData.type,
        element: submitData.element
    }
}

export const ContactFieldTransformers: contactFieldTransformer = (data) => {
    return {
        name: nameFieldTransformer(data.name),
        phone: phoneFieldTransformer(data.phone),
        email: emailFieldTransformer(data.email),
        subject: subjectFieldTransformer(data.subject),
        message: messageFieldTransformer(data.message),
        submit: submitFieldTransformer(data.submit)
    }
}