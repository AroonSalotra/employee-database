import './App.css'
import Employees from './components/Employees'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'
import dayjs from "dayjs";
import { useState, useEffect } from 'react'
import Deliveries from './components/Deliveries'
import Header from './components/Header'
import Home from './components/Home'
import Holidays from './components/Holidays'

function App() {

  const [today, setToday] = useState(null)
  const [todayData, setTodayData] = useState(null)

  useEffect(() => {
    const getDay = dayjs().day()

    const formatDay = dayjs().day(getDay).format(`dddd`)
    setToday(current => formatDay)

    setTodayData({
      dayId: getDay,
      dayName: formatDay
    })

  }, [])



  return (
    <>
      <BrowserRouter>

        <Navbar />
        {/* <Header day={today} /> */}

        <Routes>

          <Route path='/'
            element={<Home />}
          />

          <Route path='manager'
            element={<>
              <Deliveries day={today} dayId={todayData?.dayId} />
              <Employees day={today} />
            </>}
          />

          <Route path='holidays'
            element={<Holidays />}
          />

        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App
