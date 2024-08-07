import { useParams } from "react-router-dom";
import Description from "./Description";
import Party from "./Party";
import TruckDetails from "./TruckDetails";


const FinalTruckChalan = () => {
    const params = useParams();
    console.log(params.id);
    return (
        <div>
            {/* header  */}
            <div className="text-center">
                <h1 className="text-6xl text-green-700">M & M Trading</h1>
                <h1 className="text-2xl text-green-900">172, Khatungonj. Ananda Market, Chattogram</h1>
                <h1 className="text-xl text-green-900">Phone: 01711-264423</h1>
            </div>

            {/* Delivery party  */}
            <Party></Party>
            {/* Truck details  */}
            <TruckDetails />

            {/* Description of products and Fare  */}
            <Description />
        </div>
    );
};

export default FinalTruckChalan;