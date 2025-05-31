import { useNavigation } from "react-router-dom";
import Loader from "../components/Loader";

const ClientDataTable = ({ client, position, handleUpdate, handleDelete }) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loader />;

  return (
    <tr className="h-36 lg:h-16 border-gray-500">
      <th className="sm:hidden md:block m-auto">{position}</th>
      <td>{client.name}</td>
      <td>{client.address}</td>
      <td>0{client.phone}</td>
      <td className="p-0 sm:h-full sm:w-1/4">
        <button
          onClick={() => handleUpdate(client._id)}
          className="btn my-2 mx-2 btn-primary"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(client._id)}
          className="btn my-2 mx-2 btn-warning"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ClientDataTable;
