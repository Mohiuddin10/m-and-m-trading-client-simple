import { useLoaderData } from "react-router-dom";

const ShowClients = () => {
    const users = useLoaderData().data;

    return (
        <div>
            <h3>Hello from show all clients {users.length}</h3>
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
                            users.map((user) =>
                                <tr key={user._id}>
                                    <th>{users.indexOf(user) + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.address}</td>
                                    <td>0{user.phone}</td>
                                    <td className="">
                                    <button className="me-4 btn btn-primary">Update</button>
                                    <button className="btn btn-warning">Delete</button>
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