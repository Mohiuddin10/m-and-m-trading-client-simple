import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { IoMdLogOut } from "react-icons/io";

const Nav = () => {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate();

    console.log(user?.displayName);
    const handleSignout = () => {
        logout()
        navigate("/")
    }
    const navItems = <>
        <li><Link to="/"><a>Home</a></Link></li>
        {user && <><li><Link to="/showClients"><a>Show Clients</a></Link></li>
            <li><Link to="/client"><a>Add Client</a></Link></li>
            <li><Link to="/truckChalanEntry"><a>Chalan Entry</a></Link></li>
            <li><Link to="/truckChalan"><a>Truck Chalan</a></Link></li>
            <li><Link to="/truckReport"><a>Client Report</a></Link></li>
            <li>
                <details>
                    <summary>Reports</summary>
                    <ul className="p-2">
                        <li><Link to="/truckReport"><a>Client Report</a></Link></li>
                        <li><a>Date Delivery</a></li>
                    </ul>
                </details>
            </li>
            <li><Link to="/about"><a>About Us</a></Link></li></>}
        <li><Link to="/#"><a>Contact Us</a></Link></li>
        {!user && <li><Link to="/login"><a>Log in</a></Link></li>}
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        {navItems}

                    </ul>
                </div>
                <a className="btn btn-ghost"><Link to="/" ><h1 className='text-3xl'>M & M Trading</h1></Link></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex'>
                        {
                            user?.photoURL ? <div className="w-12 rounded-full ">
                                <img className=''
                                    alt="user image"
                                    src={user?.photoURL} />
                            </div> :
                                <small className='mx-2'>{user?.displayName}</small>
                        }
                        <button onClick={() => handleSignout()} className='btn btn-circle'><IoMdLogOut className='w-full h-full' /></button>
                    </div> : ""
                }
            </div>
        </div>
    );
};

export default Nav;