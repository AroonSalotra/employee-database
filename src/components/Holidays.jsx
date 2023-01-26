import { useEffect } from "react";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Holidays = () => {

    const [holiday, setHoliday] = useState(null)
    const [remainder, setRemainder] = useState(null)

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * (80 - 20) + 20)
        setHoliday(h => randomNumber)
        setRemainder(r => randomNumber)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center">
            {/* <div> */}
            <h2>Remaining Holiday
                {/* <span>{holiday}</span> */}
            </h2>
            {/* </div> */}

            <div className="w-40 h-40">
                <CircularProgressbar value={holiday + 20} text={holiday} />
            </div>

        </div>
    );
}

export default Holidays;