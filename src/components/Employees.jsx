import { Fragment, useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeData from "../data/EmployeeData.json"
import dayjs from "dayjs";

const Employees = () => {

    const [today, setToday] = useState(null)

    useEffect(() => {
        const getDay = dayjs().day()
        
        const formatDay = dayjs().day(getDay).format(`dddd`)
        // const formatTime = dayjs().day(getDay).format(`MM`)
        setToday(current => formatDay)
        // console.log(formatTime)
    }, [])


    return (
        <section>

            <h1 className="text-4xl text-center">{today}</h1>

            <div className="gap-4 pt-20 grid grid-cols-3">

                {EmployeeData.map(({ employeeId, name, start, finish }, index) => {
                    return <Fragment key={index}>

                        <EmployeeCard
                            id={employeeId}
                            name={name}
                            start={start}
                            finish={finish}
                        />

                    </Fragment>
                })}

            </div>
        </section>
    );
}

export default Employees;