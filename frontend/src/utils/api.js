// API utility functions for communicating with backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api'

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.text()
    throw new Error(error || 'API request failed')
  }
  return response.json()
}

export const api = {
  // Restaurant endpoints
  restaurants: {
    list: (filters = {}) => {
      const queryParams = new URLSearchParams()
      if (filters.query) queryParams.append('query', filters.query)
      if (filters.minRating) queryParams.append('minRating', filters.minRating)
      if (filters.categories) queryParams.append('categories', filters.categories.join(','))
      if (filters.sortBy) queryParams.append('sortBy', filters.sortBy)

      return fetch(`${API_BASE_URL}/restaurants?${queryParams}`)
        .then(handleResponse)
    },
    
    get: (id) => {
      return fetch(`${API_BASE_URL}/restaurants/${id}`)
        .then(handleResponse)
    },
    
    create: (data) => {
      return fetch(`${API_BASE_URL}/restaurants`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(handleResponse)
    }
  },

  // Review endpoints
  reviews: {
    list: (restaurantId) => {
      return fetch(`${API_BASE_URL}/restaurants/${restaurantId}/reviews`)
        .then(handleResponse)
    },
    
    create: (restaurantId, data) => {
      return fetch(`${API_BASE_URL}/restaurants/${restaurantId}/reviews`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
      }).then(handleResponse)
    },
    
    update: (reviewId, data) => {
      return fetch(`${API_BASE_URL}/reviews/${reviewId}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
      }).then(handleResponse)
    },
    
    delete: (reviewId) => {
      return fetch(`${API_BASE_URL}/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(handleResponse)
    }
  },

  // Rating endpoints
  ratings: {
    create: (restaurantId, rating) => {
      return fetch(`${API_BASE_URL}/restaurants/${restaurantId}/ratings`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ rating_value: rating })
      }).then(handleResponse)
    },
    
    update: (ratingId, rating) => {
      return fetch(`${API_BASE_URL}/ratings/${ratingId}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ rating_value: rating })
      }).then(handleResponse)
    }
  },

  // User endpoints
  users: {
    profile: () => {
      return fetch(`${API_BASE_URL}/users/profile`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(handleResponse)
    },
    
    reviews: () => {
      return fetch(`${API_BASE_URL}/users/reviews`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(handleResponse)
    }
  },

  // Admin endpoints
  admin: {
    pendingReviews: () => {
      return fetch(`${API_BASE_URL}/admin/reviews/pending`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(handleResponse)
    },
    
    approveReview: (reviewId) => {
      return fetch(`${API_BASE_URL}/admin/reviews/${reviewId}/approve`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(handleResponse)
    },
    
    rejectReview: (reviewId) => {
      return fetch(`${API_BASE_URL}/admin/reviews/${reviewId}/reject`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(handleResponse)
    }
  }
}

// Helper function for authenticated requests
export const authFetch = (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }).then(handleResponse)
}