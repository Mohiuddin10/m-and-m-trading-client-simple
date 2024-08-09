
const TruckDetails = (props) => {
    const {truckNumber, driverName, driverPhone} = props.truckDriverData;
    return (
        <div className="mx-5 mt-5 p-6 border-2 border-gray-500 rounded-lg">
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr className="">
                        <td className="border border-slate-700 px-4 py-2">Truck No:</td>
                        <td className="border border-slate-700 px-4 py-2">{truckNumber}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700  px-4 py-2">Driver Name:</td>
                        <td className="border border-slate-700  px-4 py-2">{driverName}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700  px-4 py-2">Phone:</td>
                        <td className="border border-slate-700  px-4 py-2">{driverPhone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TruckDetails;