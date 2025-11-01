import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { sampleReviews, sampleRestaurants } from '../utils/sampleData'

const Admin = () => {
  const { user, isAdmin } = useAuth()
  const [activeTab, setActiveTab] = useState('reviews')
  const [pendingReviews, setPendingReviews] = useState(sampleReviews.filter(r => !r.approved))

  if (!user || !isAdmin) {
    return (
      <div className="container-narrow mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-700 mb-4">Access Denied</h1>
        <p className="text-slate-600">Admin access required</p>
      </div>
    )
  }

  const handleApproveReview = (reviewId) => {
    setPendingReviews(prev => prev.filter(r => r.id !== reviewId))
    // In real app, this would call API to approve the review
  }

  const handleRejectReview = (reviewId) => {
    setPendingReviews(prev => prev.filter(r => r.id !== reviewId))
    // In real app, this would call API to reject the review
  }

  return (
    <div className="container-narrow mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
        <p className="text-slate-600">Manage restaurants, reviews, and user content</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 mb-6">
        <nav className="flex space-x-8">
          {['reviews', 'restaurants', 'users', 'analytics'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                activeTab === tab
                  ? 'border-trail-500 text-trail-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'reviews' && (
        <div className="card p-6">
          <div className="flex-between mb-6">
            <h2 className="text-xl font-bold">Pending Reviews</h2>
            <span className="badge bg-trail-100 text-trail-700">
              {pendingReviews.length} pending
            </span>
          </div>

          {pendingReviews.length > 0 ? (
            <div className="space-y-4">
              {pendingReviews.map(review => {
                const restaurant = sampleRestaurants.find(r => r.id === review.restaurant_id)
                return (
                  <div key={review.id} className="border border-slate-200 rounded-lg p-4">
                    <div className="flex-between mb-3">
                      <div>
                        <div className="font-semibold text-slate-800">
                          Review for {restaurant?.name}
                        </div>
                        <div className="text-sm text-slate-500">
                          By {review.user_email} • {new Date(review.review_date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="text-lg font-bold text-ganga-500">
                        {review.rating_value}/5
                      </div>
                    </div>
                    
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      {review.review_text}
                    </p>
                    
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleApproveReview(review.id)}
                        className="btn-primary text-sm"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleRejectReview(review.id)}
                        className="btn-outline text-sm border-red-200 text-red-600 hover:bg-red-50"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              No pending reviews. All caught up!
            </div>
          )}
        </div>
      )}

      {activeTab === 'restaurants' && (
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-6">Restaurant Management</h2>
          <div className="text-center py-8 text-slate-500">
            Restaurant management features coming soon...
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-6">User Management</h2>
          <div className="text-center py-8 text-slate-500">
            User management features coming soon...
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-6">Analytics Dashboard</h2>
          <div className="text-center py-8 text-slate-500">
            Analytics dashboard coming soon...
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin