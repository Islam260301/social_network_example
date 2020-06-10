export const requiredField = (value) => {
  if(value) return undefined;

  return "Field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
  return value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined
}

export const minLengthCreator = (minLength) => (value) => {
  return value && value.length < minLength ? `Must be ${minLength} characters or more` : undefined
}

export const email = value => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address' : undefined
}