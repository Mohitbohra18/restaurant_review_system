import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    location: 'Dehradun, Uttarakhand',
    bio: 'Food enthusiast exploring the best restaurants in Uttarakhand'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Save profile logic here
    setEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-page py-8 px-4">
      <div className="container-custom max-w-4xl">
        {/* Profile Header */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-400 to-pink-600 flex items-center justify-center text-white font-bold text-5xl">
              {user?.username?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{user?.username}</h1>
              <p className="opacity-70 mb-4">{user?.email}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">23</div>
                  <div className="text-sm opacity-70">Ratings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">12</div>
                  <div className="text-sm opacity-70">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">5</div>
                  <div className="text-sm opacity-70">Favorites</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex gap-4 border-b" style={{ borderColor: 'var(--border)' }}>
            <button
              onClick={() => setActiveTab('profile')}
              className={`pb-4 px-6 font-medium transition-colors ${
                activeTab === 'profile'
                  ? 'border-b-2 border-orange-500 text-orange-500'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              Profile Info
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`pb-4 px-6 font-medium transition-colors ${
                activeTab === 'activity'
                  ? 'border-b-2 border-orange-500 text-orange-500'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              Activity
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`pb-4 px-6 font-medium transition-colors ${
                activeTab === 'preferences'
                  ? 'border-b-2 border-orange-500 text-orange-500'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              Preferences
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'profile' && (
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Profile Information</h2>
              {!editing ? (
                <button onClick={() => setEditing(true)} className="btn btn-outline">
                  ✏️ Edit
                </button>
              ) : (
                <div className="flex gap-2">
                  <button onClick={handleSave} className="btn btn-primary">
                    Save
                  </button>
                  <button onClick={() => setEditing(false)} className="btn btn-outline">
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  disabled={!editing}
                  className="input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!editing}
                  className="input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  disabled={!editing}
                  className="input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  disabled={!editing}
                  className="input min-h-24"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Recent Ratings</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b last:border-b-0" style={{ borderColor: 'var(--border)' }}>
                    <div>
                      <p className="font-medium">Restaurant Name {i}</p>
                      <p className="text-sm opacity-70">2 days ago</p>
                    </div>
                    <div className="text-xl">
                      {'⭐'.repeat(5)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4">Recent Reviews</h3>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="font-medium mb-2">Restaurant Name {i}</p>
                    <p className="text-sm opacity-80 mb-2">
                      Great food and amazing ambiance! Highly recommended for families.
                    </p>
                    <p className="text-xs opacity-60">3 days ago</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Food Preferences</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">Favorite Cuisines</label>
                <div className="flex flex-wrap gap-2">
                  {['North Indian', 'Chinese', 'Italian', 'Mexican', 'Thai'].map((cuisine) => (
                    <button
                      key={cuisine}
                      className="badge badge-primary hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
                    >
                      {cuisine}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Dietary Preferences</label>
                <div className="space-y-2">
                  {['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Gluten-Free'].map((pref) => (
                    <label key={pref} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>{pref}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Price Range Preference</label>
                <select className="input">
                  <option>Budget (₹)</option>
                  <option>Moderate (₹₹)</option>
                  <option>Premium (₹₹₹)</option>
                  <option>Luxury (₹₹₹₹)</option>
                </select>
              </div>

              <button className="btn btn-primary w-full">
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}