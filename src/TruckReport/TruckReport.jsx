import { useEffect, useState } from "react";

const TruckReport = () => {
    const [clients, setClients] = useState([])
    const [selectedClientId, setSelectedClientId] = useState([]);
    const [truckData, setTruckData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/client")
        .then(res => res.json())
        .then(data => setClients(data.data))
    },[])

    useEffect(() => {
        fetch(`http://localhost:3001/report/${selectedClientId}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    const handleClientSearch = (e) => {
        e.preventDefault();
        const clientName = e.target.value;
        const selectedClient = clients.find(client => client.name == clientName);
        setSelectedClientId(selectedClient._id);
        
    }
    return (
        <div>
            <select className="select select-bordered w-full max-w-xs" name="clientName" onChange={handleClientSearch}>
            <option disabled selected>Who shot first?</option> 
                {
                    clients.map(client => <option key={client._id}>{client?.name}</option>)
                }
            </select>
            <input type="date" name="date" id="date" />
        </div>
    );
};

export default TruckReport;