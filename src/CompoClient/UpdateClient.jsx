import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";

const UpdateClient = () => {
    const location = useLocation();
    const { state } = location;
    const id = state?.data;
    console.log(id);

    let currentClient;
    useEffect(() => {
        fetch(`http://localhost:3001/client/${id}`)
        .then( res => res.json())
        .then(data => currentClient(data))
    },[])

    const {address, name, phone} = currentClient.data;
    console.log(address, phone, name);

    const notify = (message) => {
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
                                src="../../public/icons8-success.gif"
                                alt=""
                            />
                        </div>
                        <div className="ml-3 my-auto flex-1">
                            <p className="text-sm font-medium text-gray-900">
                                {message}
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
                            src="../../public/icons8-close (new).gif"
                            alt=""
                        />
                    </button>
                </div>
            </div>
        ))

    };
    const falseNotify = (message) => {
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
                                src="../../public/icons8-high-priority.gif"
                                alt=""
                            />
                        </div>
                        <div className="ml-3 my-auto flex-1">
                            <p className="text-sm font-medium text-gray-900">
                                {message}
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
                            src="../../public/icons8-close (new).gif"
                            alt=""
                        />
                    </button>
                </div>
            </div>
        ))

    };

    const handleClient = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const address = form.address.value;
        const phone = form.phone.value;
        if (phone.length > 10) {
            alert("invalid Phone number")
        }
        else {
            const newClient = {
                name: name,
                address: address,
                phone: phone
            };
            fetch("http://localhost:3001/client", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newClient)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    data.success ? notify(data.message) : falseNotify(data.message)
                })
        }

    }
    return (
        <div className="hero px-0 md:p-5 md:min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-xl md:text-5xl font-bold">Update client</h1>
                </div>
                <div className="card md:shrink-0 md:w-full md:max-w-sm md:shadow-2xl bg-base-100">
                    <form onSubmit={handleClient} className="">
                        {/* Client Name */}
                        <div className="form-control">
                            <label className="input input-bordered md:flex md:items-center md:gap-2">
                                Client Name:
                                <input type="text" name="name" className="grow" placeholder="M & M Trading" />
                            </label>
                        </div>

                        {/* Client Address */}
                        <div className="form-control">
                            <label className="input input-bordered md:flex md:items-center md:gap-2">
                                Address:
                                <input type="text" name="address" className="grow" placeholder="172, Khatungonj. Chattogram" />
                            </label>
                        </div>

                        {/* Client Phone */}
                        <div className="form-control">
                            <label className="input input-bordered md:flex md:items-center md:gap-2">
                                Phone: +880
                                <input type="tel" name="phone" className="grow" placeholder="1711******" />
                            </label>
                        </div>

                        {/* submit  */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Record Client</button>
                        </div>

                    </form>
                </div>
            </div>

            {/* toast for success  */}

            {
                <div>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </div>
            }






        </div>
    );
};

export default UpdateClient;