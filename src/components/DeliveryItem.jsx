import { useState, useEffect } from "react";

const DeliveryItem = ({ deliveryFrom }) => {

    const [time, setTime] = useState(null)

    useEffect(() => {
        const hour = Math.floor(Math.random() * 22)
        const minute = Math.floor(Math.random() * 60)
        setTime(current => `${hour}:${minute}`)
    }, [])

    return (
        <li className="flex justify-between bg-lime-500 p-2 w-52 my-4">
            {deliveryFrom}
            <span className="bg-white px-4 rounded-lg w-32">due by {time}</span>
        </li>
    );
}

export default DeliveryItem;