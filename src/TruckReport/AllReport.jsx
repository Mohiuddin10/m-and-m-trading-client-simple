import { useEffect, useState } from "react";
import SingleTruck from "./SingleTruck";

const AllReport = (props) => {
    console.log(props.selectedClient);
    const { _id } = props?.selectedClient;
    const [truckData, setTruckData] = useState([])
    useEffect((clientID) => {
        fetch(`http://localhost:3001/report/${_id}`)
            .then(res => res.json())
            .then(data => setTruckData(data))
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Truck Number</th>
                            <th>Phone</th>
                            <th>Item</th>
                            <th>Bags</th>
                            <th>Weight</th>
                            <th>Fare</th>
                            <th>Advance</th>
                            <th>Net Pay</th>
                            <th>Comments</th>
                        </tr>
                    </thead>

                        {
                            truckData.map(singleTruck => <SingleTruck key={_id} singleTruck={singleTruck}></SingleTruck>)
                        }
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>company</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    );
};

export default AllReport;