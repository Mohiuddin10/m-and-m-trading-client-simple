

const Party = (params) => {
    console.log(params);
 
    return (
        <div className="m-5 p-6 border rounded-lg">
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr className="">
                        <td className="border border-slate-700 px-4 py-2">Consign:    </td>
                        <td className="border border-slate-700 px-4 py-2">{clientData?.name}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700  px-4 py-2">Address:</td>
                        <td className="border border-slate-700  px-4 py-2">{clientData?.address}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700  px-4 py-2">Phone:</td>
                        <td className="border border-slate-700  px-4 py-2">0{clientData?.phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Party;