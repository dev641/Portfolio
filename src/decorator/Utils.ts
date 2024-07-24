import { ContactField } from "../util/Enum";

export function Validate(type: ContactField) {
    return function(_: any, __: string, descriptor: PropertyDescriptor) {
        let originalSet = descriptor.set;
        descriptor.set = function(value: string) {
            switch (type) {
                case ContactField.PHONE:
                    // Example pattern: simple US phone number check (e.g., '123-456-7890')
                    const phoneRegex = /\+[0-9]{2} [0-9]{3} [0-9]{3} [0-9]{4}/
                    if (!phoneRegex.test(value)) {
                        throw new Error('Invalid phone number format')
                    }
                    break
                case ContactField.EMAIL:
                    // Example pattern for email validation
                    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                    if (!emailRegex.test(value)) {
                        throw new Error('Invalid email address format')
                    }
                    break
                // Add more cases for different types as needed
            }
            originalSet!.apply(this, [value]);
        };
    };
}


export function  FormatInputValue(type: ContactField) {
    return function(_: any, __: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(event: Event, ...otherArgs: any[]) {
            const inputElement = event.target as HTMLInputElement;
            let formattedValue: string;

            // Format based on the type argument
            switch (type) {
                case 'phone':
                    formattedValue = formatPhoneNumber(inputElement.value);
                    break;
                case 'email':
                    // Email formatting/validation can be handled separately if needed
                    formattedValue = inputElement.value; // Assuming validation rather than formatting
                    validateEmail(formattedValue); // Throws error if invalid
                    break;
                default:
                    formattedValue = inputElement.value;
            }

            // Update the input element's value with the formatted value
            inputElement.value = formattedValue;

            // Proceed with the original method
            return originalMethod.apply(this, [event, ...otherArgs]);
        };
    };
}

// Formatting function for phone numbers
function formatPhoneNumber(phoneNumber: string): string {
    // Remove all characters except digits and plus sign
    const cleaned = phoneNumber.replace(/[^\d+]/g, '').split('').reverse().join('');
    // Attempt to apply the specific pattern: +XX XXX XXX XXXX
    // const match = cleaned.match(/(\+\d{2})\s?(\d{0,3})\s?(\d{0,3})\s?(\d{0,4})/);
    const match = cleaned.match(/(\d{0,4})\s?(\d{0,3})\s?(\d{0,3})\s?(\d{1,2}\+)/);
    if (match) {
        const s = match.slice(1).map(number => number.split('').reverse().join('')).reverse().join(' ');
        return s;
    } else {
        throw new Error('Invalid phone number format');
    }
}

// Validation function for emails
function validateEmail(email: string): void {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        throw new Error('Invalid email address format');
    }
}


export function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}
 