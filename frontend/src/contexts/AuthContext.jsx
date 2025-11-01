import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    if (token && userData) {
      setUser(JSON.parse(userData))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Simulate API call
      const response = await mockLoginAPI(email, password)
      if (response.success) {
        setUser(response.user)
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))
        return { success: true }
      }
      return { success: false, error: response.error }
    } catch (error) {
      return { success: false, error: 'Login failed' }
    }
  }

  const register = async (email, password) => {
    try {
      // Simulate API call
      const response = await mockRegisterAPI(email, password)
      if (response.success) {
        setUser(response.user)
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))
        return { success: true }
      }
      return { success: false, error: response.error }
    } catch (error) {
      return { success: false, error: 'Registration failed' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const isAdmin = user?.email === 'admin@tastetrail.com'

  const value = {
    user,
    login,
    register,
    logout,
    isAdmin,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Mock API functions
const mockLoginAPI = async (email, password) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  if (email === 'admin@tastetrail.com' && password === 'admin123') {
    return {
      success: true,
      user: { email: 'admin@tastetrail.com', registration_date: '2024-01-01', role: 'admin' },
      token: 'admin_token_123'
    }
  }
  
  if (email === 'user@example.com' && password === 'password') {
    return {
      success: true,
      user: { email: 'user@example.com', registration_date: '2024-01-15' },
      token: 'user_token_123'
    }
  }
  
  return { success: false, error: 'Invalid credentials' }
}

const mockRegisterAPI = async (email, password) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return {
    success: true,
    user: { email, registration_date: new Date().toISOString().split('T')[0] },
    token: 'new_user_token_123'
  }
}