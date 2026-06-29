import { createContext, useState, useEffect } from 'react'
import axiosInstance from '../api/axiosInstance.js'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Validate token on app load
  useEffect(() => {
    const validateAuth = async () => {
      const token = localStorage.getItem('token')
      const storedUser = localStorage.getItem('user')

      if (!token || !storedUser) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser(null)
        setLoading(false)
        return
      }

      try {
        // Verify token is still valid by calling a protected route
        await axiosInstance.get('/calculations')
        setUser(JSON.parse(storedUser))
      } catch (err) {
        // Token expired or invalid — clear everything
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    validateAuth()
  }, [])

  const login = (userData) => {
    localStorage.setItem('token', userData.token)
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    // Hard reload to clear all React state and prevent back-button cache
    window.location.href = '/login'
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}