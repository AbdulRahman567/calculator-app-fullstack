import axiosInstance from './axiosInstance.js'

export const register = async (userData) => {
  const { data } = await axiosInstance.post('/auth/register', userData)
  return data
}

export const login = async (credentials) => {
  const { data } = await axiosInstance.post('/auth/login', credentials)
  return data
}