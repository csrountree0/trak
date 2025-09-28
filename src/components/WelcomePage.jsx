import React from 'react'

const WelcomePage = ({ onStartTracking }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Trak</h1>
        <button
          onClick={onStartTracking}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default WelcomePage
