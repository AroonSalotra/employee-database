import { useEffect, Fragment } from "react";
import DeliveryItem from "./DeliveryItem";

const Deliveries = ({ today }) => {

    const deliveryData = [
        "Frozen", "Fresh", "Biscuits"
    ]

    return (
        <div>
            <h2 className="text-center">Today's Deliveries</h2>
            <ul className="w-60 mx-auto">

                {deliveryData.map((item) => {
                    return <Fragment key={item}>
                        <DeliveryItem deliveryFrom={item} />
                    </Fragment>
                })}

            </ul>

        </div>
    );

}

export default Deliveries;