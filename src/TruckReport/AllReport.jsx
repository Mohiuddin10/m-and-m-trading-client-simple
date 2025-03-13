import { useEffect, useState } from "react";
import SingleTruck from "./SingleTruck";

const AllReport = (props) => {
    console.log(props.selectedClient);
    const { _id } = props.selectedClient;
    const date = props.date;
    console.log(date);
    const [truckData, setTruckData] = useState([])

    useEffect(() => {
        fetch(`https://m-and-m-trading-server.onrender.com/report/${_id}`)
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
        fetch(`https://m-and-m-trading-server.onrender.com/truck/${id}`, {
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
    let totalWeight = 0;
    truckData.map(sData => totalWeight = totalWeight + sData.weight)
    console.log(totalWeight);
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
                            sl={truckData.indexOf(singleTruck) + 1}
                            singleTruck={singleTruck}
                            handleDelete={handleDelete}></SingleTruck>)
                    }
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className="text-xl font-bold">Total</th>
                            <th></th>
                            <th className="text-xl font-bold">{totalWeight}</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>

        </div>
    );
};

export default AllReport;