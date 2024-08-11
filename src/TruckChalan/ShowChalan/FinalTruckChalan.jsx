import { useParams } from "react-router-dom";
import Description from "./Description";
import Party from "./Party";
import TruckDetails from "./TruckDetails";
import { useEffect, useState } from "react";


const FinalTruckChalan = () => {
    const params = useParams();
    console.log(params.id);
    const [truckData, setTruckData] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3001/truck/${params.id}`)
            .then(res => res.json())
            .then(data => setTruckData(data.data))
    }, [])
    console.log(truckData);
    const {clientName, itemName, truckNumber, driverPhone, driverName, weight, fare, netFare, bags, advance} = truckData;
    const truckDriverData = {truckNumber, driverName, driverPhone};
    const product = {itemName, weight, fare, netFare, bags, advance};

    const [client, setClient] = useState({});
    console.log(clientName);
    useEffect(() => {
        fetch(`http://localhost:3001/client/${clientName}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            {/* header  */}
            <div className="text-center">
                <h1 className="text-6xl text-green-700">M/s. M & M Trading</h1>
                <h1 className="text-2xl text-green-900">172, Khatungonj. Ananda Market, Chattogram</h1>
                <h1 className="text-xl text-green-900">Phone: 01711-264423</h1>
            </div>

            {/* Delivery party  */}
            <Party truckData={truckData}></Party>
            {/* Truck details  */}
            <TruckDetails truckDriverData={truckDriverData} />

            {/* Description of products and Fare  */}
            <Description product={product} />
        </div>
    );
};

export default FinalTruckChalan;