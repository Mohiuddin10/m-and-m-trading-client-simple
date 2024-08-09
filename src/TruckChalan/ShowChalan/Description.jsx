

const Description = (props) => {
    const {itemName, weight, fare, netFare, bags, advance} = props.product;
    return (
        <div className="">
            <div className="mx-5 mt-5 p-6 border-2 rounded-lg grid grid-cols-4 justify-center">
                <div className="border-2 col-span-2 p-4 text-center">
                    <h4 className="border-b-2">Product Description:</h4>
                    <h3 className="text-start">{itemName}</h3>
                </div>
                <div className="border-2 col-span-1 p-4 text-center">
                    <h4 className="border-b-2">Quantity</h4>
                    <h3>{weight} KG</h3>
                    {
                        bags ? <h3>{bags} Bags</h3> : <></>
                    }
                    
                </div>

                <div className="border-2 col-span-1 p-4 text-center">
                    <h4 className="border-b-2">Truck Fare</h4>
                    <h3 className="text-end">{fare}</h3>
                    <div className="grid grid-cols-3 mb-2 border-2">
                        <h2 className="col-span-2" >Advance:</h2>
                        <h2 className="col-span-1 text-end">{advance? advance : 0}</h2>
                    </div>
                    <div className="border-2 grid grid-cols-3">
                        <h2 className="col-span-2" >Net Fare:</h2>
                        <h2 className="col-span-1 text-end">{fare - advance}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;