import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TruckChalan = () => {
  const navigate = useNavigate();

  // Working on load Clients
  const [client, setClient] = useState([]);
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(
          "https://m-and-m-trading-server.onrender.com/client"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        console.log(result);
        setClient(result.data);
      } catch (err) {
        console.log(err);
      }

      // fetch("https://m-and-m-trading-server.onrender.com/client")
      //     .then(res => res.json())
      //     .then(data => setClients(data.data))
    };
    fetchClients();
    // fetch("https://m-and-m-trading-server.onrender.com/client")
    //     .then(res => res.json())
    //     .then(data => setClient(data.data))
  }, []);
  console.log(client._id);
  // End of Load Clients
  const handletruckEntry = (e) => {
    e.preventDefault();
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
    const clientID = client.find(
      (singleClient) => singleClient.name == clientName
    );
    const newTruckRecpt = {
      clientName: clientName,
      date: date,
      clientID: clientID._id,
      truckNumber: truckNumber,
      driverName: driverName,
      driverPhone: driverPhone,
      itemName: itemName,
      weight: weight,
      bags: bags,
      sil: silNumber,
      fare: fare,
      advance: advance,
      comments: comment,
    };
    console.log(newTruckRecpt);
    fetch("https://m-and-m-trading-server.onrender.com/truck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTruckRecpt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // data.success ? notify(data.message) : falseNotify(data.message)
        navigate(`/finalChalan/${data.data._id}`);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="m-4 p-4 lg:text-left">
          <h1 className="text-5xl text-center font-bold">Truck Data Entry</h1>
          <p className="py-6">Local Time:</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handletruckEntry} className="card-body">
            {/* Client Details  */}
            <div className="form-control flex gap-2">
              <label className="label">
                <span className="label-text">Client Name:</span>
              </label>
              <select name="clientName" className="select w-full max-w-xs">
                <option disabled selected>
                  Client Name
                </option>
                {client.map((singleClient) => (
                  <option key={singleClient._id}>{singleClient.name}</option>
                ))}
              </select>
            </div>

            {/* Date manual  */}
            <div className="form-control flex gap-2">
              <label className="label">
                <span className="label-text">Date:</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>

            {/* Truck Number  */}
            <div className="form-control flex gap-2">
              <label className="label">
                <span className="label-text">Truck No:</span>
              </label>
              <input
                type="text"
                name="truck_number"
                placeholder="Dm ta **-****"
                className="input input-bordered"
                required
              />
            </div>

            {/* Driver Details  */}
            <div className="form-control">
              {/* Driver Name  */}
              <div className="flex gap-2">
                <label className="label">
                  <span className="label-text">Driver Name:</span>
                </label>
                <input
                  type="text"
                  placeholder="Driver Name"
                  name="driverName"
                  className="input input-bordered"
                />
              </div>

              {/* Driver Phone  */}
              <div className="flex gap-2">
                <label className="label">
                  <span className="label-tex">Driver Phone:</span>
                </label>
                <input
                  type="tel"
                  placeholder="Driver Phone"
                  name="driverPhone"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            {/* Item Description  */}
            <div className="form-control border flex flex-col gap-4 p-2 rounded-lg">
              {/* Item Name  */}
              <label className="label w-11/12 rounded-xl mx-auto p-2">
                <span className="label-text mx-auto">Product Description:</span>
              </label>
              <div className="flex gap-2">
                <div className="flex flex-col w-11/12 mx-auto gap-4">
                  <input
                    type="text"
                    placeholder="Product Name"
                    name="itemName"
                    className="input input-bordered"
                  />
                  <input
                    type="number"
                    placeholder="Product Weight"
                    name="weight"
                    className="input input-bordered"
                  />
                  <input
                    type="number"
                    placeholder="Bags"
                    name="bags"
                    className="input input-bordered"
                  />
                  <input
                    type="text"
                    placeholder="Sil Number"
                    name="silNumber"
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>
            {/* Fare Details  */}
            <div className="form-control flex gap-2 border p-4">
              <label className="label">
                <span className="label-text">Truck Fare:</span>
              </label>
              <div className="flex flex-col gap-6">
                <input
                  type="number"
                  placeholder="Truck fare"
                  name="fare"
                  className="input input-bordered"
                  required
                />
                <input
                  type="number"
                  placeholder="Advance"
                  name="advance"
                  className="input input-bordered"
                />
              </div>
            </div>
            {/* Comments & notes*/}
            <div className="form-control flex flex-col md:flex-row gap-2 border p-2 md:border-none">
              <label className="label">
                <span className="label-text ">Comments & Notes</span>
              </label>
              <textarea
                placeholder="Write here..."
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                name="comment"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register Truck</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TruckChalan;
