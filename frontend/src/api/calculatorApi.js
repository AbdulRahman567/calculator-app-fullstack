import axiosInstance from './axiosInstance.js'

export const createCalculation = async (calcData) => {
  const { data } = await axiosInstance.post('/calculations', calcData)
  return data
}

export const getHistory = async () => {
  const { data } = await axiosInstance.get('/calculations')
  return data
}

export const deleteCalculation = async (id) => {
  const { data } = await axiosInstance.delete(`/calculations/${id}`)
  return data
}

export const clearHistory = async () => {
  const { data } = await axiosInstance.delete('/calculations')
  return data
}