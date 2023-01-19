import './App.css'
import EmployeeCard from './components/EmployeeCard'
import EmployeeData from "./data/EmployeeData.json"
import Employees from './components/Employees'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'

function App() {

  return (
    <>


      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/'
            element={<LoginForm />}
          />

          <Route path='employees'
            element={<Employees />}
          />


        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App
