import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import StarRating from '../components/common/StarRating'
import { sampleRestaurants, sampleReviews, sampleCategories } from '../utils/sampleData'

const RestaurantDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  
  const restaurant = sampleRestaurants.find(r => r.id === parseInt(id))
  const restaurantReviews = sampleReviews.filter(r => r.restaurant_id === parseInt(id))
  
  const [userRating, setUserRating] = useState(0)
  const [reviewText, setReviewText] = useState('')
  const [showReviewForm, setShowReviewForm] = useState(false)

  if (!restaurant) {
    return (
      <div className="container-narrow mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-700 mb-4">Restaurant not found</h1>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    )
  }

  const handleSubmitRating = async () => {
    if (userRating === 0) return
    
    // Simulate API call
    console.log('Submitting rating:', userRating)
    setUserRating(0)
    // In real app, this would refresh the restaurant data
  }

  const handleSubmitReview = async () => {
    if (!reviewText.trim()) return
    
    // Simulate API call
    console.log('Submitting review:', reviewText)
    setReviewText('')
    setShowReviewForm(false)
    // In real app, this would refresh the reviews
  }

  const getRestaurantImages = () => {
    return [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop'
    ]
  }

  return (
    <div className="container-narrow mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-slate-600 hover:text-trail-500 mb-6 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back</span>
      </button>

      {/* Restaurant Header */}
      <div className="card p-8 mb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">{restaurant.name}</h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="bitescore-lg">
                {restaurant.avg_rating.toFixed(1)}
              </div>
              <StarRating rating={restaurant.avg_rating} size="lg" />
              <span className="text-slate-600">
                ({restaurantReviews.length} reviews)
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {restaurant.categories.map(category => (
                <span
                  key={category.id}
                  className={`badge ${
                    category.id % 2 === 0 ? 'badge-teal' : 'badge-saffron'
                  }`}
                >
                  {category.name}
                </span>
              ))}
            </div>

            <div className="space-y-3 text-slate-700">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{restaurant.address}</span>
              </div>
              
              {restaurant.phone_number && (
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{restaurant.phone_number}</span>
                </div>
              )}
              
              {restaurant.website_url && (
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                  <a
                    href={restaurant.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-trail-500 hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="lg:w-1/3">
            <img
              src={getRestaurantImages()[0]}
              alt={restaurant.name}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Reviews Section */}
        <div className="lg:col-span-2">
          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-6">Recent Reviews</h2>
            
            {restaurantReviews.length > 0 ? (
              <div className="space-y-6">
                {restaurantReviews.map(review => (
                  <div key={review.id} className="border-b border-slate-200 pb-6 last:border-b-0">
                    <div className="flex-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex-center">
                          <span className="text-sm font-semibold text-slate-600">
                            {review.user_email.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800">
                            {review.user_email}
                          </div>
                          <div className="text-sm text-slate-500">
                            {new Date(review.review_date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <StarRating rating={review.rating_value} size="sm" />
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {review.review_text}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                No reviews yet. Be the first to review!
              </div>
            )}
          </div>
        </div>

        {/* Rating & Review Forms */}
        <div className="space-y-6">
          {user ? (
            <>
              {/* Rating Form */}
              <div className="card p-6">
                <h3 className="font-bold text-lg mb-4">Rate this restaurant</h3>
                <div className="text-center mb-4">
                  <StarRating
                    rating={userRating}
                    onRate={setUserRating}
                    interactive={true}
                    size="xl"
                  />
                </div>
                <button
                  onClick={handleSubmitRating}
                  disabled={userRating === 0}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Rating
                </button>
              </div>

              {/* Review Form */}
              <div className="card p-6">
                <div className="flex-between mb-4">
                  <h3 className="font-bold text-lg">Write a Review</h3>
                  {!showReviewForm && (
                    <button
                      onClick={() => setShowReviewForm(true)}
                      className="btn-outline text-sm"
                    >
                      Write Review
                    </button>
                  )}
                </div>

                {showReviewForm && (
                  <div className="space-y-4">
                    <textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Share your experience at this restaurant..."
                      rows="4"
                      className="input-field resize-none"
                    />
                    <div className="flex space-x-3">
                      <button
                        onClick={handleSubmitReview}
                        disabled={!reviewText.trim()}
                        className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Submit Review
                      </button>
                      <button
                        onClick={() => setShowReviewForm(false)}
                        className="btn-ghost"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="card p-6 text-center">
              <h3 className="font-bold text-lg mb-3">Join the Conversation</h3>
              <p className="text-slate-600 mb-4">
                Login to rate and review this restaurant
              </p>
              <Link to="/login" className="btn-primary w-full">
                Login Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RestaurantDetail