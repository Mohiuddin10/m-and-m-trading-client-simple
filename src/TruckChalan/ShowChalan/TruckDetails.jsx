
const TruckDetails = () => {
    return (
        <div className="mx-5 mt-5 p-6 border-2 border-gray-500 rounded-lg">
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr className="">
                        <td className="border border-slate-700 px-4 py-2">Truck No:</td>
                        <td className="border border-slate-700 px-4 py-2">Dm Ta 11-1111</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700  px-4 py-2">Driver Name:</td>
                        <td className="border border-slate-700  px-4 py-2">Mr. X</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700  px-4 py-2">Phone:</td>
                        <td className="border border-slate-700  px-4 py-2">01760000611</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TruckDetails;