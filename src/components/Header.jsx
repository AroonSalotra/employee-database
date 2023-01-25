import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Header = ({ day }) => {

    const [time, setTime] = useState(null)
    const [date, setDate] = useState(null)

    useEffect(() => {
        const initDayjs = dayjs().day()
        const getTime = dayjs().day(initDayjs).format(`H:mm`)
        const getDay = dayjs().day(initDayjs).format(`DD-M-YYYY`)
        setTime(t => getTime)
        setDate(d => getDay)
        console.log(date)
    }, [])


    return (
        <>
            <header className="border-l-2 pl-4">
                <ul>
                    <li className="font-semibold">{day}</li>
                    <li>{time}</li>
                    <li>{date}</li>
                </ul>
            </header>
        </>
    );
}

export default Header;