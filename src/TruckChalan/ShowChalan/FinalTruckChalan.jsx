import { useLoaderData, useParams } from "react-router-dom";
import Description from "./Description";
import Party from "./Party";
import TruckDetails from "./TruckDetails";
import { useEffect, useState } from "react";



const FinalTruckChalan = () => {
    const truckID = useParams().id;
    const truckData = useLoaderData().data;
    console.log(truckData);
    


    const { clientID, itemName, truckNumber, driverPhone, driverName, weight, fare, netFare, bags, advance } = truckData;
    const truckDriverData = { truckNumber, driverName, driverPhone };
    const product = { itemName, weight, fare, netFare, bags, advance };
    console.log(clientID);
    return (
        <div>
            {/* header  */}
            <div className="text-center">
                <h1 className="text-6xl text-green-700">M/s. M & M Trading</h1>
                <h1 className="text-2xl text-green-900">172, Khatungonj. Ananda Market, Chattogram</h1>
                <h1 className="text-xl text-green-900">Phone: 01711-264423</h1>
            </div>
            {/* Delivery party  */}
            <Party clientID={clientID}></Party>
            {/* Truck details  */}
            <TruckDetails truckDriverData={truckDriverData} />

            {/* Description of products and Fare  */}
            <Description product={product} />
        </div>
    );
};

export default FinalTruckChalan;