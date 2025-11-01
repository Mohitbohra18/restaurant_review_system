import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import StarRating from '../components/common/StarRating'
import { sampleReviews, sampleRestaurants } from '../utils/sampleData'

const Profile = () => {
  const { user } = useAuth()

  // Filter reviews for the current user
  const userReviews = sampleReviews.filter(review => 
    review.user_email === user?.email
  )

  if (!user) {
    return (
      <div className="container-narrow mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-700 mb-4">Please log in to view your profile</h1>
      </div>
    )
  }

  return (
    <div className="container-narrow mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="card p-8 mb-8">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-gradient-to-br from-trail-500 to-ganga-500 rounded-full flex-center text-white text-2xl font-bold">
            {user.email.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">My Profile</h1>
            <p className="text-slate-600 mb-1">{user.email}</p>
            <p className="text-sm text-slate-500">
              Member since {new Date(user.registration_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* My Reviews */}
        <div className="lg:col-span-2">
          <div className="card p-6">
            <div className="flex-between mb-6">
              <h2 className="text-2xl font-bold">My Reviews</h2>
              <span className="badge bg-trail-100 text-trail-700">
                {userReviews.length} review{userReviews.length !== 1 ? 's' : ''}
              </span>
            </div>

            {userReviews.length > 0 ? (
              <div className="space-y-6">
                {userReviews.map(review => {
                  const restaurant = sampleRestaurants.find(r => r.id === review.restaurant_id)
                  return (
                    <div key={review.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex-between mb-3">
                        <div>
                          <h3 className="font-semibold text-slate-800 hover:text-trail-500 transition-colors">
                            {restaurant?.name}
                          </h3>
                          <div className="text-sm text-slate-500">
                            {new Date(review.review_date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                        <StarRating rating={review.rating_value} size="sm" />
                      </div>
                      
                      <p className="text-slate-700 leading-relaxed mb-3">
                        {review.review_text}
                      </p>
                      
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{restaurant?.address}</span>
                      </div>

                      {!review.approved && (
                        <div className="mt-3 flex items-center space-x-2 text-amber-600 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Pending approval</span>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-slate-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-700 mb-2">No reviews yet</h3>
                <p className="text-slate-500 mb-4">Start exploring restaurants and share your experiences!</p>
                <a
                  href="/search"
                  className="btn-primary"
                >
                  Explore Restaurants
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Stats & Actions */}
        <div className="space-y-6">
          {/* Statistics */}
          <div className="card p-6">
            <h3 className="font-bold text-lg mb-4">My Stats</h3>
            <div className="space-y-4">
              <div className="flex-between">
                <span className="text-slate-600">Total Reviews</span>
                <span className="font-semibold text-slate-900">{userReviews.length}</span>
              </div>
              <div className="flex-between">
                <span className="text-slate-600">Average Rating</span>
                <span className="font-semibold text-slate-900">
                  {userReviews.length > 0 
                    ? (userReviews.reduce((sum, review) => sum + review.rating_value, 0) / userReviews.length).toFixed(1)
                    : '0.0'
                  }
                </span>
              </div>
              <div className="flex-between">
                <span className="text-slate-600">Member Since</span>
                <span className="font-semibold text-slate-900">
                  {new Date(user.registration_date).getFullYear()}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card p-6">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <a
                href="/search"
                className="w-full btn-outline text-center justify-center"
              >
                Find Restaurants
              </a>
              <button className="w-full btn-ghost justify-center">
                Edit Profile
              </button>
              <button className="w-full btn-ghost justify-center text-red-600 hover:bg-red-50">
                Delete Account
              </button>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="card p-6">
            <h3 className="font-bold text-lg mb-4">Badges</h3>
            <div className="space-y-3">
              {userReviews.length >= 1 && (
                <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex-center">
                    <span className="text-amber-600">🌟</span>
                  </div>
                  <div>
                    <div className="font-semibold text-amber-800">First Review</div>
                    <div className="text-sm text-amber-600">You shared your first experience!</div>
                  </div>
                </div>
              )}
              
              {userReviews.length >= 5 && (
                <div className="flex items-center space-x-3 p-3 bg-ganga-50 rounded-lg">
                  <div className="w-10 h-10 bg-ganga-100 rounded-full flex-center">
                    <span className="text-ganga-600">🏆</span>
                  </div>
                  <div>
                    <div className="font-semibold text-ganga-800">Food Critic</div>
                    <div className="text-sm text-ganga-600">5+ reviews published</div>
                  </div>
                </div>
              )}

              {userReviews.length === 0 && (
                <div className="text-center py-4 text-slate-500">
                  Complete reviews to earn badges!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile