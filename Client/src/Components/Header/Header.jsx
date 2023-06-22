import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const { user, logOut, setUserRoll } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleToLogOut = () => {
        console.log("it is clicked")
        logOut()
            .then((res) => {
                console.log('logout')
                setUserRoll('Buyer')
                navigate(from, { replace: true })
                localStorage.removeItem("accessToken");


                // console.log(user)
            })
            .catch(() => { })
    }

    const menu = <>
        <li className='my-2 mx-2 '><Link to='/dashboard'>Dashboard</Link></li>
        <li className='my-2 mx-2 '><Link to='/allclass'>All Class</Link></li>

        {
            (user && user?.uid) ?
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-12 rounded-xl">
                            <img src={user.photoURL} />
                        </div>
                    </div>

                    < li className='my-2 mx-2 '><button className='btn btn-accent  rounded-lg  btn-outline' onClick={handleToLogOut} >Log Out</button></li> </div> :
                <>

                    <li className='my-2 mx-2 '><Link to='/login'>Login</Link></li>
                    <li className='my-2 mx-2'><Link to='/signup'>Sign Up</Link></li>
                </>
        }

    </>
    return (
        <div className=' '>
            <div className=" navbar container mx-auto">
                <div className="navbar-start " >
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' className=" my-2 flex items-center font-bold  text-xl">SterioMusic</Link>
                </div>
                <div className="navbar-end hidden  lg:flex">
                    <ul className="menu menu-horizontal  p-0">
                        {menu}
                    </ul>
                </div>
                {/* <div className="">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </div>
    );
};

export default Header;