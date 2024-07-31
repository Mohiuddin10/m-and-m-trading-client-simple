import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            {/* footer  */}
        </div>
    );
};

export default Root;