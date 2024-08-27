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
        <div className="">
            <form className="text-center sm:flex-col md:flex-row align-middle justify-center items-center my-4" action="" onSubmit={handleClientSearch}>
                <select className="select m-2 select-bordered w-full max-w-xs" name="clientName" >
                    <option disabled selected>Client name</option>
                    {
                        clients.map(client => <option key={client._id}>{client?.name}</option>)
                    }
                </select>
                <input className="rounded-lg p-2 m-2" type="date" name="date" id="date" />
                <button type="submit" className="btn btn-wide m-2">Done</button>
            </form>
            <div className="">
                <AllReport selectedClient={selectedClient} date={selectedDate}></AllReport>
            </div>
            <h2 className="text-center m-8">This is auto generated report and doesn't require any signature</h2>
        </div>
    );
};

export default TruckReport;