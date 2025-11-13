export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="card text-center py-12">
      <div className="text-6xl mb-4">⚠️</div>
      <h3 className="text-2xl font-bold mb-2">Oops! Something went wrong</h3>
      <p className="opacity-70 mb-6">{message || 'An error occurred. Please try again.'}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn btn-primary">
          🔄 Try Again
        </button>
      )}
    </div>
  );
}