import { useState, useEffect } from 'react'
import { sampleReviews } from '../utils/sampleData'

export const useReviews = (restaurantId) => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 300))
        
        const restaurantReviews = sampleReviews.filter(
          review => review.restaurant_id === restaurantId && review.approved
        )
        
        setReviews(restaurantReviews)
        setError(null)
      } catch (err) {
        setError('Failed to fetch reviews')
      } finally {
        setLoading(false)
      }
    }

    if (restaurantId) {
      fetchReviews()
    }
  }, [restaurantId])

  const addReview = async (reviewData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const newReview = {
        id: Math.max(...sampleReviews.map(r => r.id)) + 1,
        ...reviewData,
        review_date: new Date().toISOString().split('T')[0],
        approved: false
      }
      
      setReviews(prev => [newReview, ...prev])
      return { success: true }
    } catch (err) {
      return { success: false, error: 'Failed to submit review' }
    }
  }

  return { reviews, loading, error, addReview }
}