export const APP_CONFIG = {
  name: 'TasteTrail BiteScore',
  tagline: 'One Trail. One Bite. One Score.',
  cities: ['Dehradun', 'Mussoorie', 'Rishikesh', 'Haridwar'],
  version: '1.0.0'
}

export const RATING_CONFIG = {
  min: 1,
  max: 5,
  step: 0.5
}

export const SEARCH_CONFIG = {
  debounce: 300, // ms
  minQueryLength: 2
}

export const PAGINATION_CONFIG = {
  pageSize: 12,
  maxVisiblePages: 5
}

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'theme',
  LANGUAGE: 'language'
}

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'Please log in to continue.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.'
}

export const SUCCESS_MESSAGES = {
  REVIEW_SUBMITTED: 'Review submitted successfully!',
  RATING_SUBMITTED: 'Rating submitted successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  REVIEW_APPROVED: 'Review approved successfully!',
  REVIEW_REJECTED: 'Review rejected successfully!'
}