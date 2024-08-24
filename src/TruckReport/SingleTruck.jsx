import toast, { Toaster } from "react-hot-toast";

const SingleTruck = (props) => {
    console.log(props.sl);
    const { driverPhone, createdAt, itemName, truckNumber, weight, comments, fare, advance, bags, _id} = props.singleTruck;
    const dateObject = new Date(createdAt);
    const formattedDate = dateObject.toDateString();


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



    const handleDelete = (id) => {
        fetch(`http://localhost:3001/truck/${id}`, {
            method: "Delete"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                data.success ? notify(data) : falseNotify(data)
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
                <td><button onClick={() => handleDelete(_id)} className="mx-auto btn btn-warning">Delete</button></td>
            </tr>
            </tbody>
    );
};

export default SingleTruck;