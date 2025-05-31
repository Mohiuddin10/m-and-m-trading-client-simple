import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../components/Loader";
import ClientDataTable from "./ClientDataTable";

const ShowClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setClients(result.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);
  const navigate = useNavigate();

  const navigation = useNavigation();
  if (loading) return <Loader />;
  console.log(navigation.state);

  const notify = (data) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
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
    ));
  };

  const falseNotify = (data) => {
    console.log(data);
    toast.error(`${data.message}`);
  };

  const EmptyClientNotify = () => toast("No client found!");

  const handleUpdate = (id) => {
    console.log(id);
    navigate(`/UpdateClient/${id}`, { state: { data: id } });
  };

  const handleDelete = (id) => {
    fetch(`https://m-and-m-trading-server.onrender.com/client/${id}`, {
      method: "Delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.success ? notify(data) : falseNotify(data);
        const updateClients = clients.filter((client) => client._id != id);
        setClients(updateClients);
      });
  };

  return (
    <div>
      <h3 className="text-center font-bold text-4xl">Active Clients</h3>
      {<Toaster position="top-center" reverseOrder={false} />}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="">
              <th className="sm:hidden md:block">SL no.</th>
              <th>Name</th>
              <th>Address</th>
              <th className="text-center">Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <ClientDataTable
                key={client._id}
                client={client}
                position={clients.indexOf(client) + 1}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              ></ClientDataTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowClients;
