import { useState } from 'react'
import LandingPage from './pages/LandingPage'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  return (
    <div>
      {currentPage === 'landing' && (
        <LandingPage onStart={() => navigateTo('planner')} />
      )}
      {currentPage === 'planner' && (
        <div>
          <h1>Planner Page - Coming Soon</h1>
        </div>
      )}
    </div>
  )
}

export default App