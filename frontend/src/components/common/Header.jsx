import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import SearchBar from './SearchBar'

const Header = () => {
  const { user, logout, isAdmin } = useAuth()
  const navigate = useNavigate()
  const [showDropdown, setShowDropdown] = useState(false)

  const handleLogout = () => {
    logout()
    setShowDropdown(false)
    navigate('/')
  }

  const handleSearch = (query) => {
    navigate(`/search?query=${encodeURIComponent(query)}`)
  }

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container-narrow mx-auto px-4 py-3">
        <div className="flex-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12">
              <svg viewBox="0 0 280 80" className="w-full h-full">
                <path d="M30 50 Q60 40, 90 50 Q120 60, 150 50 Q180 40, 210 50" 
                      stroke="#FF6B35" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <path d="M145 48 Q148 45, 150 48" 
                      stroke="#2A9D8F" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M235 35 L240.19 45.82 L251.51 47.36 L242.75 54.64 L245.36 65.82 L235 60 L224.64 65.82 L227.25 54.64 L218.49 47.36 L229.81 45.82 Z" 
                      fill="#E9C46A" stroke="#E9C46A" strokeWidth="1"/>
                <text x="20" y="28" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="24" fill="#FF6B35">
                  TasteTrail
                </text>
                <text x="20" y="58" fontFamily="Space Mono, monospace" fontWeight="600" fontSize="20" fill="#00A896">
                  BiteScore
                </text>
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-xs text-slate-600">Dehradun • Mussoorie • Rishikesh • Haridwar</div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-trail-500 rounded-full flex-center text-white text-sm font-semibold">
                    {user.email.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden md:block text-slate-700">{user.email}</span>
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-card border border-slate-200 py-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-slate-700 hover:bg-slate-50"
                      onClick={() => setShowDropdown(false)}
                    >
                      My Profile
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-slate-700 hover:bg-slate-50"
                        onClick={() => setShowDropdown(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login" className="btn-ghost">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header