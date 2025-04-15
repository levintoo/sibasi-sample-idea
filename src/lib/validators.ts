export const validateEmail = (email: string): string[] => {
  if (!email) {
    return ['The email field is required.']
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return ['The email must be a valid email address.']
  }
  return []
}

export const validatePassword = (password: string): string[] => {
  if (!password) {
    return ['The password field is required.']
  } else if (password.length <= 8) {
    return ['The password must be more than 8 characters.']
  }
  return []
}
