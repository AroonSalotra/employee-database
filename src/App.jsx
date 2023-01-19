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

  const [todayData, setTodayData] = useState(null)

  useEffect(() => {
    const getDay = dayjs().day()
    // console.log(getDay)

    const formatDay = dayjs().day(getDay).format(`dddd`)
    setToday(current => formatDay)

    setTodayData({
      dayId: getDay,
      dayName: formatDay
    })

  }, [])

  useEffect(() => {
    // console.log(todayData)
  }, [todayData])

  // console.log(dayjs().day(0).format("dddd"))

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
              <Deliveries day={today} dayId={todayData?.dayId} />
            </>}
          />

        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App
