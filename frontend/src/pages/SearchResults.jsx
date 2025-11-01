import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import RestaurantCard from '../components/common/RestaurantCard'
import { sampleRestaurants, sampleCategories } from '../utils/sampleData'

const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') || ''
  
  const [filters, setFilters] = useState({
    minRating: 0,
    categories: [],
    sortBy: 'rating'
  })
  
  const [filteredRestaurants, setFilteredRestaurants] = useState(sampleRestaurants)

  useEffect(() => {
    let results = sampleRestaurants

    // Filter by search query
    if (query) {
      results = results.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.categories.some(cat => 
          cat.name.toLowerCase().includes(query.toLowerCase())
        ) ||
        restaurant.address.toLowerCase().includes(query.toLowerCase())
      )
    }

    // Filter by rating
    if (filters.minRating > 0) {
      results = results.filter(restaurant => 
        restaurant.avg_rating >= filters.minRating
      )
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      results = results.filter(restaurant =>
        restaurant.categories.some(cat =>
          filters.categories.includes(cat.id)
        )
      )
    }

    // Sort results
    switch (filters.sortBy) {
      case 'rating':
        results.sort((a, b) => b.avg_rating - a.avg_rating)
        break
      case 'name':
        results.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    setFilteredRestaurants(results)
  }, [query, filters])

  const handleCategoryToggle = (categoryId) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }))
  }

  return (
    <div className="container-narrow mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4">
          <div className="card p-6 sticky top-24">
            <h3 className="font-bold text-lg mb-4">Filters</h3>
            
            {/* Rating Filter */}
           <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={filters.minRating}
                onChange={(e) => setFilters(prev => ({
                    ...prev,
                    minRating: parseFloat(e.target.value)
                }))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                style={{
                    background: `linear-gradient(to right, #FF6B35 0%, #FF6B35 ${(filters.minRating / 5) * 100}%, #dee2e6 ${(filters.minRating / 5) * 100}%, #dee2e6 100%)`
                }}
            />

            {/* Categories Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Categories
              </label>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {sampleCategories.map(category => (
                  <label key={category.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category.id)}
                      onChange={() => handleCategoryToggle(category.id)}
                      className="rounded border-slate-300 text-trail-500 focus:ring-trail-500"
                    />
                    <span className="text-sm text-slate-700">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Sort By
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  sortBy: e.target.value
                }))}
                className="input-field"
              >
                <option value="rating">Highest Rated</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Results */}
        <div className="lg:w-3/4">
          {/* Search Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">
              {query ? `Search results for "${query}"` : 'All Restaurants'}
            </h1>
            <p className="text-slate-600">
              {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Results Grid */}
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredRestaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No matches found</h3>
              <p className="text-slate-500 mb-4">Try adjusting your search or filters</p>
              <button
                onClick={() => setFilters({ minRating: 0, categories: [], sortBy: 'rating' })}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchResults