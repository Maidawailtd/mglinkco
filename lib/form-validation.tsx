export type ValidationRule = {
  test: (value: string) => boolean
  message: string
}

export type ValidationRules = {
  [key: string]: ValidationRule[]
}

export type ValidationErrors = {
  [key: string]: string | undefined
}

export function validateForm(values: { [key: string]: string }, rules: ValidationRules): ValidationErrors {
  const errors: ValidationErrors = {}

  Object.keys(rules).forEach((field) => {
    const fieldRules = rules[field]
    const value = values[field] || ""

    for (const rule of fieldRules) {
      if (!rule.test(value)) {
        errors[field] = rule.message
        break
      }
    }
  })

  return errors
}

export const commonValidationRules = {
  required: (fieldName: string): ValidationRule => ({
    test: (value) => !!value.trim(),
    message: `${fieldName} is required`,
  }),
  email: (): ValidationRule => ({
    test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: "Please enter a valid email address",
  }),
  minLength: (length: number): ValidationRule => ({
    test: (value) => value.length >= length,
    message: `Must be at least ${length} characters`,
  }),
  maxLength: (length: number): ValidationRule => ({
    test: (value) => value.length <= length,
    message: `Must be no more than ${length} characters`,
  }),
  passwordMatch: (compareValue: string): ValidationRule => ({
    test: (value) => value === compareValue,
    message: "Passwords do not match",
  }),
  url: (): ValidationRule => ({
    test: (value) => {
      if (!value) return true // Allow empty
      try {
        new URL(value)
        return true
      } catch {
        return false
      }
    },
    message: "Please enter a valid URL",
  }),
  numeric: (): ValidationRule => ({
    test: (value) => {
      if (!value) return true // Allow empty
      return /^\d+$/.test(value)
    },
    message: "Please enter numbers only",
  }),
  decimal: (): ValidationRule => ({
    test: (value) => {
      if (!value) return true // Allow empty
      return /^\d+(\.\d+)?$/.test(value)
    },
    message: "Please enter a valid number",
  }),
}

