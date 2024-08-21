import { useEffect, useState } from "react";
import SingleTruck from "./SingleTruck";

const AllReport = (props) => {
    console.log(props.selectedClient);
    const { _id } = props.selectedClient;
    const [truckData, setTruckData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/report/${_id}`)
            .then(res => res.json())
            .then(data => setTruckData(data))
    }, [_id])
    console.log(truckData);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
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
                            truckData.map(singleTruck => <SingleTruck key={_id} sl={truckData.indexOf(singleTruck)+1} singleTruck={singleTruck}></SingleTruck>)
                        }
                </table>
            </div>

        </div>
    );
};

export default AllReport;