import './App.css'
import EmployeeCard from './components/EmployeeCard'
import EmployeeData from "./data/EmployeeData.json"
import Employees from './components/Employees'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'
import dayjs from "dayjs";
import { useState, useEffect } from 'react'
import Deliveries from './components/Deliveries'

function App() {

  const [today, setToday] = useState(null)

  useEffect(() => {
    const getDay = dayjs().day()

    const formatDay = dayjs().day(getDay).format(`dddd`)
    setToday(current => formatDay)
  }, [])

  return (
    <>


      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/'
            element={<LoginForm />}
          />

          <Route path='manager'
            element={<>
              <Employees day={today} />
              <Deliveries day={today} />
            </>}
          />


        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App
