import { deleteCalculation } from '../api/calculatorApi.js'

const HistoryItem = ({ item, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteCalculation(item._id)
      onDelete(item._id)
    } catch (err) {
      alert('Failed to delete calculation')
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition">
      <div className="flex-1 min-w-0">
        <p className="text-gray-800 dark:text-gray-200 font-medium">
          {item.expression} = <span className="text-blue-600 dark:text-blue-400">{item.result}</span>
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {formatDate(item.createdAt)}
        </p>
      </div>
      <button
        onClick={handleDelete}
        className="ml-2 px-2 py-1 text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/50 transition"
      >
        Delete
      </button>
    </div>
  )
}

export default HistoryItem