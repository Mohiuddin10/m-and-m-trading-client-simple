
const SingleTruck = (props) => {
    console.log(props.sl);
    const { driverPhone, createdAt, itemName, truckNumber, weight, comments, fare, advance, bags} = props.singleTruck;
    const dateObject = new Date(createdAt);
    const formattedDate = dateObject.toDateString();
    return (
            <tbody>
            <tr>
                <th>{props.sl}</th>
                <td>{formattedDate}</td>
                <td>{truckNumber}</td>
                <td>{driverPhone}</td>
                <td>{itemName}</td>
                <td>{bags ? bags : ""}</td>
                <td>{weight}</td>
                <td>{fare}</td>
                <td>{advance}</td>
                <td>{fare - advance}</td>
                <td>{comments}</td>
            </tr>
            </tbody>
    );
};

export default SingleTruck;