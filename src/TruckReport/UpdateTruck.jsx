import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const UpdateTruck = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [truckData, setTruckData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/truck/${params.id}`)
            .then(res => res.json())
            .then(data => setTruckData(data.data))
    }, [])
    
    const handleUpdateTruck = async (e) => {
        e.preventDefault()
        const form = e.target;
        const clientName = form.clientName.value;
        const date = form.date.value;
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


        // track ClientID 
        const updatedTruckRecpt = {
            clientName: clientName,
            date: date,
            clientID: truckData.clientID,
            truckNumber: truckNumber,
            driverName: driverName,
            driverPhone: driverPhone,
            itemName: itemName,
            weight: weight,
            bags: bags,
            sil: silNumber,
            fare: fare,
            advance: advance,
            comments: comment
        }
        await fetch(`http://localhost:3001/truck/${params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTruckRecpt)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            navigate(`/truckReport`);
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Truck Data Entry</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdateTruck} className="card-body">
                            {/* Client Details  */}
                            <div className="form-control">
                                <select name="clientName" className="select w-full max-w-xs">
                                    <option disabled selected>{truckData.clientName}</option>
                                </select>
                            </div>

                            {/* Date manual  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" defaultValue={truckData.date} required />
                            </div>


                            {/* Truck Number  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Truck No:</span>
                                </label>
                                <input type="text" name="truck_number" placeholder="Dm ta **-****" className="input input-bordered" defaultValue={truckData.truckNumber} required />
                            </div>

                            {/* Driver Details  */}
                            <div className="form-control">
                                {/* Driver Name  */}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Driver Name</span>
                                    </label>
                                    <input type="text" placeholder="Driver Name" name="driverName" className="input input-bordered" defaultValue={truckData.driverName} />
                                </div>

                                {/* Driver Phone  */}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Driver Phone</span>
                                    </label>
                                    <input type="tel" placeholder="Driver Phone" name="driverPhone" className="input input-bordered" required defaultValue={truckData.driverPhone} />
                                </div>

                            </div>

                            {/* Item Description  */}
                            <div className="form-control">
                                {/* Item Name  */}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Product Description</span>
                                    </label>
                                    <input type="text" placeholder="Product Name" name="itemName" className="input input-bordered" defaultValue={truckData.itemName}/>
                                    <input type="number" placeholder="Product Weight" name="weight" className="input input-bordered" defaultValue={truckData.weight}/>
                                    <input type="number" placeholder="Bags" name="bags" className="input input-bordered" defaultValue={truckData.bags}/>
                                    <input type="text" placeholder="Sil Number" name="silNumber" className="input input-bordered" defaultValue={truckData.sil}/>
                                </div>

                                {/* Fare Details  */}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Truck Fare</span>
                                    </label>
                                    <input type="number" placeholder="Truck fare" name="fare" className="input input-bordered" required defaultValue={truckData.fare}/>
                                    <input type="number" placeholder="Advance" name="advance" className="input input-bordered" defaultValue={truckData.advance}/>
                                </div>
                                {/* Comments & notes*/}
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Comments & Notes</span>
                                    </label>
                                    <textarea
                                        placeholder="Write here..."
                                        className="textarea textarea-bordered textarea-lg w-full max-w-xs" name="comment" defaultValue={truckData.comments}></textarea>
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

export default UpdateTruck;