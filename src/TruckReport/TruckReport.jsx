import { useEffect, useState } from "react";
import AllReport from "./AllReport";

const TruckReport = () => {
    const [clients, setClients] = useState([])
    const [selectedClient, setSelectedClient] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/client")
            .then(res => res.json())
            .then(data => setClients(data.data))
    }, [])

    const handleClientSearch = (e) => {
        e.preventDefault();
        const clientName = e.target.value;
        const selectedClient = clients.find(client => client.name == clientName);
        setSelectedClient(selectedClient)

    }
    return (
        <div>
            <form action="" onSubmit={handleClientSearch}>
                <select className="select select-bordered w-full max-w-xs" name="clientName" >
                    <option disabled selected>Who shot first?</option>
                    {
                        clients.map(client => <option key={client._id}>{client?.name}</option>)
                    }
                </select>
                <input type="submit" value="Done" />
            </form>
            <div className="">
                <AllReport selectedClient={selectedClient}></AllReport>
            </div>
        </div>
    );
};

export default TruckReport;