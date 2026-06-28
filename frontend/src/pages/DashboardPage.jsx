import { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth.js'
import Calculator from '../components/Calculator.jsx'
import HistoryList from '../components/HistoryList.jsx'
import { getHistory } from '../api/calculatorApi.js'

const DashboardPage = () => {
  const { user } = useAuth()
  const [history, setHistory] = useState([])
  const [sortOrder, setSortOrder] = useState('newest')

  const loadHistory = async () => {
    try {
      const data = await getHistory()
      setHistory(data)
    } catch (err) {
      console.error('Failed to load history')
    }
  }

  useEffect(() => {
    loadHistory()
  }, [])

  return (
    <div className="space-y-6">
      <div className="text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Welcome, {user?.name}!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Perform calculations and view your history below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Calculator onCalculate={loadHistory} />
        <HistoryList
          history={history}
          setHistory={setHistory}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>
    </div>
  )
}

export default DashboardPage