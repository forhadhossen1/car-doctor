import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { getAuth } from "firebase/auth";
import app from "../../../firebase.config";
const auth = getAuth(app);


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut(auth)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/bookings'>Bookings</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-secondary">Appointment</button>
            </div>
            {
                user ? <button onClick={handleLogOut} className="btn px-6 py-0 bg-orange-700 border-none">Log Out</button>
                    :
                    <Link to='/login' className="btn px-6 py-0 bg-orange-700 border-none">Login</Link>
            }
        </div>
    );
};

export default Header;