export const sampleCategories = [
  { id: 1, name: 'Indian' },
  { id: 2, name: 'Chinese' },
  { id: 3, name: 'Italian' },
  { id: 4, name: 'Cafe' },
  { id: 5, name: 'Street Food' },
  { id: 6, name: 'Bakery' },
  { id: 7, name: 'North Indian' },
  { id: 8, name: 'South Indian' },
  { id: 9, name: 'Continental' },
  { id: 10, name: 'Desserts' }
]

export const sampleRestaurants = [
  {
    id: 1,
    name: "Spice Hut",
    address: "123 Main Road, Dehradun",
    phone_number: "+91 9876543210",
    website_url: "https://spicehut.com",
    avg_rating: 4.2,
    categories: [sampleCategories[0], sampleCategories[6]]
  },
  {
    id: 2,
    name: "Dragon Palace",
    address: "45 Rajpur Road, Dehradun",
    phone_number: "+91 9876543211",
    website_url: "https://dragonpalace.com",
    avg_rating: 4.5,
    categories: [sampleCategories[1]]
  },
  {
    id: 3,
    name: "Mussorie Heights Cafe",
    address: "Mall Road, Mussorie",
    phone_number: "+91 9876543212",
    website_url: null,
    avg_rating: 4.0,
    categories: [sampleCategories[3], sampleCategories[9]]
  },
  {
    id: 4,
    name: "Ganga View Restaurant",
    address: "Triveni Ghat, Rishikesh",
    phone_number: "+91 9876543213",
    website_url: "https://gangaview.com",
    avg_rating: 4.3,
    categories: [sampleCategories[0], sampleCategories[6]]
  },
  {
    id: 5,
    name: "Haridwar Dhaba",
    address: "Har ki Pauri, Haridwar",
    phone_number: null,
    website_url: null,
    avg_rating: 3.8,
    categories: [sampleCategories[4], sampleCategories[6]]
  },
  {
    id: 6,
    name: "Italian Delight",
    address: "78 Clock Tower, Dehradun",
    phone_number: "+91 9876543214",
    website_url: "https://italiandelight.com",
    avg_rating: 4.6,
    categories: [sampleCategories[2], sampleCategories[8]]
  }
]

export const sampleReviews = [
  {
    id: 1,
    user_id: 1,
    restaurant_id: 1,
    user_email: "user1@example.com",
    review_text: "Amazing food and great service! The butter chicken was exceptional.",
    review_date: "2024-01-15",
    rating_value: 4.5,
    approved: true
  },
  {
    id: 2,
    user_id: 2,
    restaurant_id: 1,
    user_email: "user2@example.com",
    review_text: "Good food but service was slow during peak hours.",
    review_date: "2024-01-20",
    rating_value: 3.5,
    approved: true
  },
  {
    id: 3,
    user_id: 3,
    restaurant_id: 2,
    user_email: "user3@example.com",
    review_text: "Best Chinese food in town! The dim sums are a must-try.",
    review_date: "2024-02-01",
    rating_value: 5.0,
    approved: true
  },
  {
    id: 4,
    user_id: 4,
    restaurant_id: 3,
    user_email: "user4@example.com",
    review_text: "Great view and good coffee. Perfect for a relaxing evening.",
    review_date: "2024-02-05",
    rating_value: 4.0,
    approved: false
  },
  {
    id: 5,
    user_id: 5,
    restaurant_id: 4,
    user_email: "user5@example.com",
    review_text: "Authentic Indian food with a beautiful Ganga view.",
    review_date: "2024-02-10",
    rating_value: 4.5,
    approved: true
  }
]