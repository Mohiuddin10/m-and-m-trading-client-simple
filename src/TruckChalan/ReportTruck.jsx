
const ReportTruck = () => {
    const [truckData, settruckData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/truck/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL no.</th>
                        <th>Truck Number</th>
                        <th>Driver Phone</th>
                        <th>Weight</th>
                        <th>Fare</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        clients.map((client) =>
                            <tr key={client._id}>
                                <th>{clients.indexOf(client) + 1}</th>
                                <td>{client.name}</td>
                                <td>{client.address}</td>
                                <td>0{client.phone}</td>
                                <td className="">
                                    <button onClick={() => handleUpdate(client._id)} className="me-4 btn btn-primary">Update</button>
                                    <button onClick={() => handleDelete(client._id)} className="btn btn-warning">Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReportTruck;