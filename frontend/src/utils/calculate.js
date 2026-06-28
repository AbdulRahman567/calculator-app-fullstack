export const calculate = (num1, num2, operation) => {
  const n1 = Number(num1)
  const n2 = Number(num2)

  switch (operation) {
    case '+': return n1 + n2
    case '-': return n1 - n2
    case '*': return n1 * n2
    case '/': return n2 === 0 ? null : n1 / n2
    default: return null
  }
}

export const formatExpression = (num1, num2, operation) => {
  const symbol = operation === '*' ? '×' : operation === '/' ? '÷' : operation
  return `${num1} ${symbol} ${num2}`
}