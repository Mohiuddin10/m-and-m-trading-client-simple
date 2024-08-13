import { useEffect, useState } from "react";


const Party = (params) => {
    const [ client, setClient] = useState({});
    useEffect(() => {
        console.log(`${name}`);
        fetch(`http://localhost:3001/client/${params.clientID}`)
        .then(res => res.json())
        .then(data => setClient(data.data))
    },[])
    
   console.log(client);
 
    return (
        <div className="m-5 p-6 border rounded-lg">
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr className="">
                        <td className="border border-slate-700 px-4 py-2">Consign:    </td>
                        <td className="border border-slate-700 px-4 py-2">{client.name}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700  px-4 py-2">Address:</td>
                        <td className="border border-slate-700  px-4 py-2">{client.address}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700  px-4 py-2">Phone:</td>
                        <td className="border border-slate-700  px-4 py-2">0{client.phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Party;