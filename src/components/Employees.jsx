import { Fragment, useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeData from "../data/EmployeeData.json"

const Employees = ({ day }) => {


    return (
        <section>

            <h1 className="text-4xl text-center font-semibold bg-white text-slate-600 w-fit mx-auto px-8 py-2">
                {day}
            </h1>

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