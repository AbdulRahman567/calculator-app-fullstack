import { useState } from 'react'
import { createCalculation } from '../api/calculatorApi.js'
import { validateCalculationInput } from '../utils/validators.js'

const Calculator = ({ onCalculate }) => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCalculate = async (e) => {
    e.preventDefault()
    setError('')
    setResult(null)

    const validation = validateCalculationInput(num1, num2, operation)
    if (!validation.valid) {
      setError(validation.message)
      return
    }

    setLoading(true)
    try {
      const data = await createCalculation({ num1: Number(num1), num2: Number(num2), operation })
      setResult(data.result)
      onCalculate()
      setNum1('')
      setNum2('')
    } catch (err) {
      setError(err.response?.data?.message || 'Calculation failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Calculator</h2>
      
      <form onSubmit={handleCalculate} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Number 1
            </label>
            <input
              type="number"
              step="any"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter first number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Number 2
            </label>
            <input
              type="number"
              step="any"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter second number"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Operation
          </label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (×)</option>
            <option value="/">Division (÷)</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Calculating...' : 'Calculate'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
          {error}
        </div>
      )}

      {result !== null && !error && (
        <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
          <span className="font-semibold">Result: {result}</span>
        </div>
      )}
    </div>
  )
}

export default Calculator