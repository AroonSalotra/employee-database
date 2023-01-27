import { useEffect } from "react";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Calendar } from "react-calendar";
// import 'react-calendar/dist/Calendar.css'
import "../styles/Calendar.css"

const Holidays = () => {

    const [holiday, setHoliday] = useState(null)
    const [remainder, setRemainder] = useState(null)
    const [date, setDate] = useState(new Date());
    const [enableSelectDate, setEnableSelectDate] = useState(false)

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * (80 - 20) + 20)
        setHoliday(h => randomNumber)
        setRemainder(r => randomNumber)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center">
            {/* <div> */}
            <h2 className="title">Remaining Holiday
                {/* <span>{holiday}</span> */}
            </h2>
            {/* </div> */}

            <div className="w-60 pt-8">

                <CircularProgressbar
                    value={holiday + 20}
                    text={`${holiday} Hours`}
                    styles={buildStyles({

                        textSize: "0.8rem",
                        // pathColor: "white",
                        // trailColor: "black",
                        backgroundColor: "black"

                    })}
                />

            </div>

            <button onClick={() => setEnableSelectDate(!enableSelectDate)}>
                Request Holiday
            </button>

            <Calendar
                onChange={setDate}
                value={date}
                selectRange={enableSelectDate}
            />

            {date.length > 0 ? (
                <p className='text-center'>
                    <span className='bold'>Start:</span>{' '}
                    {date[0].toDateString()}
                    &nbsp;|&nbsp;
                    <span className='bold'>End:</span> {date[1].toDateString()}
                </p>
            ) : (
                <p className='text-center'>
                    <span className='bold'>Default selected date:</span>{' '}
                    {date.toDateString()}
                </p>
            )}

            <small>
                To make a holiday request, first select the desired start date, then click the "Request Holiday" button to select the end date
            </small>

        </div>
    );
}

export default Holidays;