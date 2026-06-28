import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Calculator App
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-gray-700 dark:text-gray-300 hidden sm:block">
            Welcome, <strong>{user?.name}</strong>
          </span>
          <ThemeToggle />
          <Link
            to="/profile"
            className="px-3 py-1 text-sm rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar