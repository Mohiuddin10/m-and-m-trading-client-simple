import { useEffect, useState } from "react";
import SingleTruck from "./SingleTruck";

const AllReport = (props) => {
    console.log(props.selectedClient);
    const { _id } = props.selectedClient;
    const date = props.date;
    console.log(date);
    const [truckData, setTruckData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/report/${_id}`)
            .then(res => res.json())
            .then(data => {
                // setTruckData(data)
                const newSort = data.filter(singleData => {
                    const date1 = new Date(singleData.date);
                    const date2 = new Date(date)
                    return (date1.toDateString() == date2.toDateString())
                });
                setTruckData(newSort)
            })
    }, [_id]);

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:3001/truck/${id}`, {
            method: "Delete"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const updateTruckData = truckData.filter(data => data._id !== id)
                setTruckData(updateTruckData)
            })
    }
   
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
                            truckData.map(singleTruck => <SingleTruck key={_id}
                                sl={truckData.indexOf(singleTruck)+1} 
                                singleTruck={singleTruck}
                                handleDelete={handleDelete}></SingleTruck>)
                        }
                </table>
            </div>

        </div>
    );
};

export default AllReport;