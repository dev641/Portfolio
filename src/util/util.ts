import { HEADER, PORTFOLIO_SECTION, RESUME, THEME_ELEMENT_CLASS } from '../constant/constant'
import { ThemeType, type classList } from '../types/util'

export const themeClassGenerator: (prevTheme: ThemeType, curTheme: ThemeType) => (className: string) => classList = (prevTheme, curTheme) => {
  return (className) => {
    const classNameGenerator: (theme: string) => string = (theme) => `${theme}-${className}`
    return {
      current: classNameGenerator(curTheme),
      prev: classNameGenerator(prevTheme)
    }
  }
}

export const themeUpdator: (element: HTMLElement, classList: classList) => void = (
  element,
  { current, prev }
) => {
  element.classList.remove(prev)
  element.classList.add(current)
}

type CustomElementInfo = { name: string; className: string };

// Define the customElementsGenerators function
export const customElementsGenerators: (
  options: { container: string; theme?: ThemeType }
) => CustomElementInfo[] | undefined = ({ container }) => {
  const customElementsMap = new Map([
    [
      HEADER,
      [ 
        { name: `#${HEADER} .nav`, className: 'heading' },
        { name: `#${HEADER} .nav-container__theme`, className: 'theme' },
        { name: `#${HEADER} #${THEME_ELEMENT_CLASS}`, className: 'theme-btn' },
      ],
    ],
    [
      RESUME,
      [
        { name: `.${RESUME}-body`, className: 'body' },
        // Adjust the selector according to your actual structure
      ],
    ],
    [
      PORTFOLIO_SECTION,
      [
        { name: '.carousel__btn', className: 'arrows' },
        // Adjust the selector according to your actual structure
      ],
    ],
    // Add more mappings as needed
  ]);

  // Return the custom elements based on the provided container
  return customElementsMap.get(container);
};

export function getScrollYOfSection(sectionId: string): number {
  const sectionElement = document.getElementById(sectionId)

  if (sectionElement) {
    const rect = sectionElement.getBoundingClientRect()
    return window.scrollY + rect.top
  }

  return 0 // Default value if the section element is not found
}

export function formatPhoneNumber(number: string): string {
  // Convert the input to a string and remove all non-digit characters
  const digits = number.replace(/\D/g, '')

  // Use a regular expression to capture the country code and the parts of the phone number
  const match = digits.match(/^(\d{2})(\d{3})(\d{3})(\d{4})$/)

  if (match) {
    // If the input matches the expected pattern, format it
    return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`
  }

  // Return null or an error message if the input does not match the expected format
  return 'Invalid number' // Adjust based on how you want to handle invalid inputs
}