import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TruckChalan = () => {

    const navigate = useNavigate()

    // Working on load Clients 
    const [client, setClient] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/client")
            .then(res => res.json())
            .then(data => setClient(data.data))
    }, [])
    console.log(client.name);
    // End of Load Clients
    const handletruckEntry = e => {
        e.preventDefault();
        const form = e.target;
        const clientName = form.clientName.value;
        const truckNumber = form.truck_number.value;
        const driverName = form.driverName.value;
        const driverPhone = form.driverPhone.value;
        const itemName = form.itemName.value;
        const weight = form.weight.value;
        const bags = form.bags.value;
        const silNumber = form.silNumber.value;
        const fare = form.fare.value;
        const advance = form.advance.value;
        const comment = form.comment.value;

        const newTruckRecpt = {
            clientName: clientName,
            truckNumber: truckNumber,
            driverName: driverName,
            driverPhone: driverPhone,
            itemName: itemName,
            weight: weight,
            bags: bags,
            silNumber: silNumber,
            fare: fare,
            advance: advance,
            comments: comment
        }
        console.log(newTruckRecpt);
        fetch("http://localhost:3001/truck", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTruckRecpt)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // data.success ? notify(data.message) : falseNotify(data.message)
                navigate(`/finalChalan/${data.data._id}`)
            })
    }
    return (
        <div>


            {/* Truck chalan entry  */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Truck Data Entry</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handletruckEntry} className="card-body">
                            {/* Client Details  */}
                            <div className="form-control">
                                <select name="clientName" className="select w-full max-w-xs">
                                    <option disabled selected>Client Name</option>
                                    {
                                        client.map(singleClient => <option key={singleClient._id}>{singleClient.name}</option>)
                                    }
                                </select>
                            </div>

                            {/* Truck Number  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Truck No:</span>
                                </label>
                                <input type="text" name="truck_number" placeholder="Dm ta **-****" className="input input-bordered" required />
                            </div>
                            {/* Driver Details  */}
                            <div className="form-control">
                                {/* Driver Name  */}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Driver Name</span>
                                    </label>
                                    <input type="text" placeholder="Driver Name" name="driverName" className="input input-bordered" />
                                </div>

                                {/* Driver Phone  */}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Driver Phone</span>
                                    </label>
                                    <input type="tel" placeholder="Driver Phone" name="driverPhone" className="input input-bordered" required />
                                </div>

                            </div>

                            {/* Item Description  */}
                            <div className="form-control">
                                {/* Item Name  */}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Product Description</span>
                                    </label>
                                    <input type="text" placeholder="Product Name" name="itemName" className="input input-bordered" />
                                    <input type="number" placeholder="Product Weight" name="weight" className="input input-bordered" />
                                    <input type="number" placeholder="Bags" name="bags" className="input input-bordered" />
                                    <input type="text" placeholder="Sil Number" name="silNumber" className="input input-bordered" />
                                </div>

                                {/* Fare Details  */}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Truck Fare</span>
                                    </label>
                                    <input type="number" placeholder="Truck fare" name="fare" className="input input-bordered" required />
                                    <input type="number" placeholder="Advance" name="advance" className="input input-bordered" />
                                </div>
                                {/* Comments & notes*/}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Comments & Notes</span>
                                    </label>
                                    <textarea
                                        placeholder="Write here..."
                                        className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="comment" ></textarea>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register Truck</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TruckChalan;