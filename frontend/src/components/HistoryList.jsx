import { useState } from 'react'
import { getHistory, clearHistory } from '../api/calculatorApi.js'
import HistoryItem from './HistoryItem.jsx'

const HistoryList = ({ history, setHistory, sortOrder, setSortOrder }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchHistory = async () => {
    setLoading(true)
    try {
      const data = await getHistory()
      setHistory(data)
    } catch (err) {
      setError('Failed to load history')
    } finally {
      setLoading(false)
    }
  }

  const handleClearAll = async () => {
    if (!window.confirm('Are you sure you want to clear all history?')) return
    try {
      await clearHistory()
      setHistory([])
    } catch (err) {
      setError('Failed to clear history')
    }
  }

  const sortedHistory = [...history].sort((a, b) => {
    const dateA = new Date(a.createdAt)
    const dateB = new Date(b.createdAt)
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
  })

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">History</h2>
        <div className="flex gap-2">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-3 py-1 text-sm border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          <button
            onClick={fetchHistory}
            className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Refresh
          </button>
          {history.length > 0 && (
            <button
              onClick={handleClearAll}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8 text-gray-500">Loading...</div>
      ) : sortedHistory.length === 0 ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No calculations yet
        </div>
      ) : (
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {sortedHistory.map((item) => (
            <HistoryItem
              key={item._id}
              item={item}
              onDelete={(id) => setHistory(history.filter((h) => h._id !== id))}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default HistoryList