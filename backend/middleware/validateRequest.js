export const validateRequest = (req, res, next) => {
  const { num1, num2, operation } = req.body;

  if (num1 === undefined || num2 === undefined || !operation) {
    res.status(400);
    throw new Error('num1, num2, and operation are required');
  }

  if (isNaN(Number(num1)) || isNaN(Number(num2))) {
    res.status(400);
    throw new Error('num1 and num2 must be valid numbers');
  }

  const validOps = ['+', '-', '*', '/'];
  if (!validOps.includes(operation)) {
    res.status(400);
    throw new Error('Invalid operation. Use +, -, *, /');
  }

  if (operation === '/' && Number(num2) === 0) {
    res.status(400);
    throw new Error('Cannot divide by zero');
  }

  next();
};