export const validateCalculationInput = (num1, num2, operation) => {
  if (num1 === '' || num2 === '') {
    return { valid: false, message: 'Both numbers are required' }
  }

  if (isNaN(Number(num1)) || isNaN(Number(num2))) {
    return { valid: false, message: 'Please enter valid numbers' }
  }

  if (operation === '/' && Number(num2) === 0) {
    return { valid: false, message: 'Cannot divide by zero' }
  }

  const validOps = ['+', '-', '*', '/']
  if (!validOps.includes(operation)) {
    return { valid: false, message: 'Invalid operation' }
  }

  return { valid: true, message: '' }
}

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}