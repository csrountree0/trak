import React from 'react'

const WelcomePage = ({ onStartTracking }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header / Navbar */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="cursor-default text-2xl font-bold text-blue-600">Trak</h1>
            </div>
            
            {/* Nav Links */}
            <nav className="hidden md:flex space-x-8 items-center">
              <button 
                onClick={() => scrollToSection('features')}
                className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="cursor-pointer text-gray-600 hover:text-blue-600 transition duration-200"
              >
                How It Works
              </button>
              <button
                onClick={onStartTracking}
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
              >
                Login / Sign Up
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                One calendar for your life: track nutrition, goals, and thoughts.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Stay consistent with your health, habits, and journaling — all in one simple place.
              </p>
              <button
                onClick={() => {
                  onStartTracking()
                }}
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition duration-200 shadow-lg hover:shadow-xl"
              >
                Start Tracking Free
              </button>
            </div>
            
            {/* Calendar + Dashboard Mockup */}
            <div className="cursor-default bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                {/* Calendar View */}
                <div className="bg-white rounded-lg p-4">
                  <h3 className="text-sm font-semibold mb-3 text-gray-800">June 2025</h3>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                      <div key={day} className="p-1 font-medium text-gray-500">{day}</div>
                    ))}
                    {Array.from({length: 30}, (_, i) => (
                      <div key={i} className={`p-1 text-xs rounded ${
                        i === 14 ? 'bg-blue-100 text-blue-600 font-semibold' : 
                        i < 14 ? 'bg-green-50 text-green-600' : 'text-gray-400'
                      }`}>
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Daily Dashboard */}
                <div className="bg-white rounded-lg p-4">
                  <h3 className="text-sm font-semibold mb-3 text-gray-800">Today</h3>
                  <div className="space-y-3">
                    <div className="text-xs text-gray-600">
                      <div className="flex justify-between mb-1">
                        <span>Nutrition</span>
                        <span className="text-green-600">✓</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div className="bg-green-500 h-1 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">
                      <div className="flex justify-between mb-1">
                        <span>Exercise</span>
                        <span className="text-blue-600">✓</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div className="bg-blue-500 h-1 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600">
                      <div className="flex justify-between mb-1">
                        <span>Journal</span>
                        <span className="text-purple-600">✓</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div className="bg-purple-500 h-1 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="cursor-default py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600">Everything you need to track your life in one place</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Calendar Overview</h3>
              <p className="text-gray-600 text-lg">See your days at a glance: meals, goals, journal entries.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔥</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Daily Goals</h3>
              <p className="text-gray-600 text-lg">Build habits that matter — fitness, productivity, or personal growth.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl ml-2">📝</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Journal Entries</h3>
              <p className="text-gray-600 text-lg">Reflect daily, log moods, or write quick notes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="cursor-default py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in three simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Set your targets</h3>
              <p className="text-gray-600 text-lg">Add nutrition goals, habits, and personal milestones.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Log your days</h3>
              <p className="text-gray-600 text-lg">Meals, checklists, and journal notes in one place.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">See your progress</h3>
              <p className="text-gray-600 text-lg">Watch streaks, trends, and reflections build over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Repeat */}
      <section className="cursor-default py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get Started Today</h2>
          <p className="text-xl text-blue-100 mb-8">No clutter. Just a clean, simple tracker to keep you on track.</p>
          <button
            onClick={() => {
              onStartTracking()
            }}
            className="cursor-pointer bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-blue-400">Trak</h3>
              <p className="text-gray-400">One calendar for your life</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WelcomePage
