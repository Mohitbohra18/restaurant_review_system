import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'

const RestaurantCard = ({ restaurant }) => {
  const getRestaurantImage = (restaurantId) => {
    // Using placeholder images - in real app, these would come from Zomato API
    const images = [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=250&fit=crop'
    ]
    return images[restaurantId % images.length]
  }

  return (
    <div className="card-restaurant group">
      <div className="relative overflow-hidden">
        <img
          src={getRestaurantImage(restaurant.id)}
          alt={restaurant.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <div className="bg-white rounded-full px-3 py-1 shadow-md">
            <StarRating rating={restaurant.avg_rating} size="sm" />
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex-between mb-2">
          <h3 className="card-title font-semibold text-slate-900 group-hover:text-trail-500 transition-colors">
            {restaurant.name}
          </h3>
          <div className="bitescore-sm">
            {restaurant.avg_rating.toFixed(1)}
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
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

        <div className="text-sm text-slate-600 mb-3">
          <div className="flex items-center space-x-1 mb-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="truncate">{restaurant.address}</span>
          </div>
          {restaurant.phone_number && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{restaurant.phone_number}</span>
            </div>
          )}
        </div>

        <div className="flex-between">
          <Link
            to={`/restaurant/${restaurant.id}`}
            className="btn-outline text-sm py-2"
          >
            View Details
          </Link>
          <button className="text-slate-400 hover:text-trail-500 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard