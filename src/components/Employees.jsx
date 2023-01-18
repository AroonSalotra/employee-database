import EmployeeCard from "./EmployeeCard";
import EmployeeData from "../data/EmployeeData.json"
import { Fragment } from "react";

const Employees = () => {
    return (

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
    );
}

export default Employees;