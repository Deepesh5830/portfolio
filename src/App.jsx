import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AllRoutes from './allRoutes/allRoutes'
import { ActiveTabProvider } from './component/Navbar/ActiveTabContext'

function App() {

  return (
    <ActiveTabProvider>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </ActiveTabProvider>
  )
}

export default App
