import { Fragment, useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import { getDocs, collection } from "firebase/firestore"
import { db } from "../firebase-config";

const Employees = ({ day }) => {

    const [employeeData, setEmployeeData] = useState([])

    useEffect(() => {

        if (employeeData.length > 0) return

        const colEmployees = collection(db, "employees")

        getDocs(colEmployees)
            .then((items) => {
                items.forEach((doc) => {
                    // console.log({ ...doc.data(), id: doc.id })
                    setEmployeeData(d => [...d, { ...doc.data(), id: doc.id }])
                })
            })
            .catch(error => console.log("error"))
    }, [])

    useEffect(() => {
        // console.log(employeeData)
    }, [employeeData])

    // console.log(EmployeeData)


    return (
        <section className="pt-20">

            <h1 className="title">
                {/* {day} */}
                Today's Employees
            </h1>

            <div className="gap-4 pt-20 sm:grid grid-cols-3">

                {employeeData.map(({ employeeId, name, start, end }, index) => {
                    return <Fragment key={index}>

                        <EmployeeCard
                            id={employeeId}
                            name={name}
                            start={start}
                            end={end}
                        />

                    </Fragment>
                })}

            </div>
        </section>
    );
}

export default Employees;