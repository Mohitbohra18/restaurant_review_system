import { useState, useEffect } from 'react'
import { sampleRestaurants } from '../utils/sampleData'

export const useRestaurants = (filters = {}) => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500))
        
        let filteredRestaurants = [...sampleRestaurants]

        // Apply filters
        if (filters.query) {
          const query = filters.query.toLowerCase()
          filteredRestaurants = filteredRestaurants.filter(restaurant =>
            restaurant.name.toLowerCase().includes(query) ||
            restaurant.categories.some(cat => 
              cat.name.toLowerCase().includes(query)
            ) ||
            restaurant.address.toLowerCase().includes(query)
          )
        }

        if (filters.minRating > 0) {
          filteredRestaurants = filteredRestaurants.filter(
            restaurant => restaurant.avg_rating >= filters.minRating
          )
        }

        if (filters.categories && filters.categories.length > 0) {
          filteredRestaurants = filteredRestaurants.filter(restaurant =>
            restaurant.categories.some(cat =>
              filters.categories.includes(cat.id)
            )
          )
        }

        // Apply sorting
        if (filters.sortBy === 'rating') {
          filteredRestaurants.sort((a, b) => b.avg_rating - a.avg_rating)
        } else if (filters.sortBy === 'name') {
          filteredRestaurants.sort((a, b) => a.name.localeCompare(b.name))
        }

        setRestaurants(filteredRestaurants)
        setError(null)
      } catch (err) {
        setError('Failed to fetch restaurants')
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurants()
  }, [filters])

  return { restaurants, loading, error }
}