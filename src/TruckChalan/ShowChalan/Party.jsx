import { useEffect } from "react";


const Party = (params) => {
    console.log(params.id);
    
   
 
    return (
        <div className="m-5 p-6 border rounded-lg">
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr className="">
                        <td className="border border-slate-700 px-4 py-2">Consign:    </td>
                        <td className="border border-slate-700 px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700  px-4 py-2">Address:</td>
                        <td className="border border-slate-700  px-4 py-2"></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700  px-4 py-2">Phone:</td>
                        <td className="border border-slate-700  px-4 py-2">0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Party;