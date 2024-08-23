
const SingleTruck = (props) => {
    console.log(props.sl);
    const { driverPhone, createdAt, itemName, truckNumber, weight, comments, fare, advance, bags} = props.singleTruck;
    const dateObject = new Date(createdAt);
    const formattedDate = dateObject.toDateString();



    const handleDelete = (id) => {
        fetch(`http://localhost:3001/client/${id}`, {
            method: "Delete"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                data.success ? notify(data) : falseNotify(data)
                const updateClients = clients.filter((client) => client._id != id)
                setClients(updateClients);
            })
       

    }
    return (
            <tbody>
            <tr>
                <th>{props.sl}</th>
                <td>{formattedDate}</td>
                <td>{truckNumber}</td>
                <td>{driverPhone}</td>
                <td>{itemName}</td>
                <td>{bags ? bags : ""}</td>
                <td>{weight}</td>
                <td>{fare}</td>
                <td>{advance}</td>
                <td>{fare - advance}</td>
                <td>{comments}</td>
                <td><button className="mx-auto btn btn-primary">Update</button></td>
                <td><button onClick={() => handleDelete()} className="mx-auto btn btn-warning">Delete</button></td>
            </tr>
            </tbody>
    );
};

export default SingleTruck;