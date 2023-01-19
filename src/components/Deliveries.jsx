import { useState, useEffect, Fragment } from "react";
import DeliveryItem from "./DeliveryItem";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs"

const Deliveries = ({ today, dayId }) => {

    const [index, setIndex] = useState(null)
    const weekDays = [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thurs",
        "Fri",
        "Sat"
    ]

    const handleIndexChange = (direction) => {

        if (direction === "prev") {
            index !== 0 ? setIndex(index => index - 1) : setIndex(index => 6)
        }

        if (direction === "next") {
            index < 6 ? setIndex(index => index + 1) : setIndex(index => 0)
        }

    }

    const upcomingDeliveres = [
        ["Pet", "Health", "Frozen"],
        ["Fresh", "Frozen", "Biscuits"],
        ["Alcohol", "Health", "Frozen"],
        ["Fresh", "Health", "Frozen"],
        ["Biscuits", "Health", "Frozen"],
        ["Pet", "Biscuits", "Frozen"],
        ["Pet", "Health", "Alcohol"]
    ]

    useEffect(() => {
        setIndex(dayId)
    }, [dayId])

    return (
        <div>

            <div className="flex justify-center gap-20 py-4 text-3xl">

                <button onClick={() => handleIndexChange("prev")}
                    className="text-slate-400"><BsArrowLeftSquareFill /></button>

                <button onClick={() => setIndex(dayId)}
                    className="w-20" >
                    {weekDays[index]}</button>

                <button onClick={() => handleIndexChange("next")}
                    className="text-slate-400"><BsArrowRightSquareFill /></button>

            </div>

            <div className="w-52 mx-auto overflow-hidden">

                <div className="flex justify-start transition-all"
                    style={{ transform: `translateX(-${index}00%)` }}>

                    {upcomingDeliveres.map((delivery, index) => {
                        return <ul key={index}>

                            {delivery.map((item) => <Fragment key={`${item} ${index}`}>
                                <DeliveryItem deliveryFrom={item} />
                            </Fragment>
                            )}

                        </ul>
                    })}

                </div>

            </div>
        </div>
    );

}

export default Deliveries;