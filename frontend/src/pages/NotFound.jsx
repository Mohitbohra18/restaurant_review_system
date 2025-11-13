import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl mb-6">🍽️</div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl opacity-70 mb-8 max-w-md">
          Oops! Looks like this page took a wrong turn. Let's get you back on track to find great restaurants!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            🏠 Go Home
          </Link>
          <Link to="/discover" className="btn btn-secondary">
            🔍 Discover Restaurants
          </Link>
        </div>
      </div>
    </div>
  );
}