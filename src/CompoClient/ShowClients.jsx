import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const ShowClients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/client")
            .then(res => res.json())
            .then(data => setClients(data.data))
    }, [])
    console.log(clients);

    const notify = (data) => {
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="../../public/icons8-bin.gif"
                                alt=""
                            />
                        </div>
                        <div className="ml-3 my-auto flex-1">
                            <p className="text-sm font-medium text-gray-900">
                                {data.message}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <img
                                className="h-10 w-10 rounded-full"
                                src="../../public/icons8-close.gif"
                                alt=""
                            />
                    </button>
                </div>
            </div>
        ))
    }

    const falseNotify = (data) => {
        console.log(data);
        toast.error(`${data.message}`)

    };

    const handleUpdate = (id) => {
        console.log(id);
    }

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
        <div>
            <h3>Hello from show all clients</h3>
            {
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            }
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL no.</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>
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
        </div>
    );
};

export default ShowClients;