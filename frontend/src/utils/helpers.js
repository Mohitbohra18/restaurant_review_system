// Format date to readable string
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Get rating color based on value
export const getRatingColor = (rating) => {
  if (rating >= 4.5) return 'bg-green-500';
  if (rating >= 4.0) return 'bg-green-400';
  if (rating >= 3.5) return 'bg-yellow-500';
  return 'bg-orange-500';
};

// Get price display based on range
export const getPriceDisplay = (price) => {
  if (!price) return '₹₹';
  if (price < 500) return '₹';
  if (price < 1000) return '₹₹';
  if (price < 2000) return '₹₹₹';
  return '₹₹₹₹';
};

// Truncate text with ellipsis
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Format number with commas
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Validate email
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Get city emoji
export const getCityEmoji = (city) => {
  const emojiMap = {
    'Dehradun': '🏔️',
    'Haridwar': '🕉️',
    'Mussoorie': '🌄',
    'Rishikesh': '🧘'
  };
  return emojiMap[city] || '🏙️';
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};