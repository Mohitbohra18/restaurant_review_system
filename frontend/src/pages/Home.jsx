import React from 'react'
import { Link } from 'react-router-dom'
import RestaurantCard from '../components/common/RestaurantCard'
import { sampleRestaurants, sampleCategories } from '../utils/sampleData'

const Home = () => {
  const featuredRestaurants = sampleRestaurants.slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <section className="hero hero-gradient">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Top-Rated Spots
          </h1>
          <p className="text-xl mb-8 opacity-90">
            One Trail. One Bite. One Score.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/search" className="btn bg-white text-trail-500 hover:bg-slate-100">
              Explore Restaurants
            </Link>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-trail-500">
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 px-4">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Restaurants</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover the most loved dining experiences in Dehradun, Mussoorie, Rishikesh, and Haridwar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/search" className="btn-primary">
              View All Restaurants
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white px-4">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Categories</h2>
            <p className="text-slate-600">Find your favorite cuisine</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {sampleCategories.map(category => (
              <div
                key={category.id}
                className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-card transition-shadow cursor-pointer group"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-trail-100 rounded-full flex-center group-hover:bg-trail-200 transition-colors">
                  <span className="text-xl">🍽️</span>
                </div>
                <h3 className="font-semibold text-slate-800 group-hover:text-trail-500 transition-colors">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home