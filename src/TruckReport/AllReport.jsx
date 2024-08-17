import { useEffect, useState } from "react";

const AllReport = (props) => {
    const {clientID} = props.selectedClient;
    const [truckData, setTruckData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/report/${clientID}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AllReport;