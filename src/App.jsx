import { useState } from 'react'
import Customer from './Customer.js'
import WelcomePage from './components/WelcomePage.jsx'
import ProfileForm from './components/ProfileForm.jsx'
import Dashboard from './components/Dashboard.jsx'

function App() {
  const [currentView, setCurrentView] = useState('welcome') // 'welcome', 'form', 'dashboard'
  const [customer, setCustomer] = useState(null)

  const handleFormSubmit = (formData) => {
    try {
      const newCustomer = new Customer(
        formData.name,
        parseInt(formData.age),
        formData.gender,
        parseFloat(formData.weight),
        parseFloat(formData.height),
        formData.activityLevel,
        formData.goal
      )
      setCustomer(newCustomer)
      setCurrentView('dashboard')
    } catch (error) {
      alert('Error creating customer: ' + error.message)
    }
  }

  const handleLogout = () => {
    setCurrentView('welcome')
    setCustomer(null)
  }

  const handleStartTracking = () => {
    setCurrentView('form')
  }

  const handleBackToWelcome = () => {
    setCurrentView('welcome')
  }

  if (currentView === 'welcome') {
    return <WelcomePage onStartTracking={handleStartTracking} />
  }

  if (currentView === 'dashboard' && customer) {
    return <Dashboard customer={customer} onLogout={handleLogout} />
  }

  return <ProfileForm onSubmit={handleFormSubmit} onBackToWelcome={handleBackToWelcome} />
}

export default App
