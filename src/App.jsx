import './App.css'
import EmployeeCard from './components/EmployeeCard'
import EmployeeData from "./data/EmployeeData.json"
import Employees from './components/Employees'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path='/' />
          <Route path='employees' element={<Employees />} />


        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App
