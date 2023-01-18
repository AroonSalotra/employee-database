import { BiDotsHorizontalRounded } from "react-icons/bi"
import { useState, useEffect } from "react";
import EmployeeData from "../data/EmployeeData.json"


const EmployeeCard = ({ id, name, start, finish }) => {

    const [dropdownActive, setDropdownActive] = useState(false)
    const [officeProgress, setOfficeProgress] = useState(false)
    const [serviceProgress, setServiceProgress] = useState(false)
    const [deliveryProgress, setDeliveryProgress] = useState(false)

    const handleProgressStatus = (task) => {

        switch (task) {

            case "office":
                setOfficeProgress(!officeProgress)
                break;
            case "service":
                setServiceProgress(!serviceProgress)
                break;
            case "delivery":
                setDeliveryProgress(!deliveryProgress)
                break;
            default:
                return console.log("no match")
        }

    }


    // useEffect(() => {

    //     const getElem = (event) => {

    //         if (event.target.tagName === "BUTTON") return;

    //         setDropdownActive(false)

    //     }

    //     window.addEventListener("click", getElem)

    //     return () => window.removeEventListener("click", getElem)

    // }, [])


    return (
        <div className="w-52 h-72 mx-auto">

            <h2 className="text-3xl bg-white p-2">

                {name ? name : "No Match"}

            </h2>

            <div className="flex justify-between bg-white">

                <ul className="text-lg flex gap-4 pl-2">

                    <li>
                        {start ? start + ":00" : null}
                    </li>

                    <li>
                        {finish ? finish + ":00" : null}
                    </li>

                </ul>

                <button onClick={() => setDropdownActive(!dropdownActive)} type="button">

                    <BiDotsHorizontalRounded
                        className="text-3xl select-none pointer-events-none rounded-lg" />

                </button>

            </div>

            <div className={`${dropdownActive ? "" : "hide"} flex flex-col pt-4 gap-4 py-8 items-end`}>

                <button onClick={() => handleProgressStatus("office")}
                    className="p-2 w-40 cursor-pointer bg-slate-200 overflow-hidden text-left"
                    type="button">

                    Call to office

                    {officeProgress ? <div className={`status animate-slide`} />
                        : null}

                </button>

                <button onClick={() => handleProgressStatus("service")}
                    className="p-2 w-40 cursor-pointer bg-slate-200 overflow-hidden text-left"
                    type="button">

                    Call to services

                    {serviceProgress ? <div className={`status animate-slide`} />
                        : null}

                </button>

                <button onClick={() => handleProgressStatus("delivery")}
                    className="p-2 w-40 cursor-pointer bg-slate-200 overflow-hidden text-left"
                    type="button">

                    Unload delivery

                    {deliveryProgress ? <div className={`status animate-slide`} />
                        : null}

                </button>

            </div>

        </div>

    );

}

export default EmployeeCard;