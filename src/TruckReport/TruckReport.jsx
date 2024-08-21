import { useEffect, useState } from "react";
import AllReport from "./AllReport";

const TruckReport = () => {
    const [clients, setClients] = useState([])
    const [selectedClient, setSelectedClient] = useState([])
    const [selectedDate, setSelectedDate] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3001/client")
            .then(res => res.json())
            .then(data => setClients(data.data))
    }, [])

    const handleClientSearch = (e) => {
        e.preventDefault();
        const clientName = e.target.clientName.value;
        const selectedClient = clients.find(client => client.name == clientName);
        setSelectedClient(selectedClient)

        const date = e.target.date.value;
        const d = new Date(date);
        const formattedDate = d.toDateString();
        setSelectedDate(formattedDate);
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
                <input type="date" name="date" id="date" />
                <button type="submit" className="btn btn-wide">Done</button>
            </form>
            <div className="">
                <AllReport selectedClient={selectedClient} date={selectedDate}></AllReport>
            </div>
        </div>
    );
};

export default TruckReport;