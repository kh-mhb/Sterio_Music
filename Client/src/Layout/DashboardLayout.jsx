import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { AuthContext } from '../context/AuthProvider';
import useSeller from '../hooks/useSeller/useSeller';
import useAdmin from '../hooks/useAdmin/useAdmin';
import NavHeaderDashboard from '../Components/Header/NavHeaderDashboard';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <NavHeaderDashboard></NavHeaderDashboard>
                    <Outlet></Outlet>

                    <div className=''>
                        <label tabIndex={0} className="btn fixed bg-slate-800    top-1/2 left-0 w-16  lg:hidden" htmlFor="dashboardDrawer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>


                </div>

                <div className="">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-64  md:w-80     ">
                        <li>  <Link to='/' className=" my-2 flex items-center font-bold   text-3xl">Sterio Music</Link></li>

                        {
                            isSeller &&
                            <>

                                <li className='hover-li font-serif font-medium'><Link to='/dashboard/myclass'>My Class</Link></li>
                                <li className='hover-li font-serif font-medium'><Link to='/dashboard/addclass'>Add A Class</Link></li>

                            </>

                        }
                        {
                            isAdmin && <>
                                <li className='hover-li font-serif font-medium'><Link to='/dashboard/managesclasses'>Manages Classes  </Link></li>
                                <li className='hover-li font-serif font-medium'><Link to='/dashboard/managesusers'>Manages Users </Link></li>

                            </>


                        }
                        {
                            (!isAdmin && !isSeller) &&
                            <>
                                <li className='hover-li font-serif font-medium'><Link to='/dashboard/myselected'>My Selected Classes </Link></li>
                                <li className='hover-li font-serif font-medium'><Link to='/dashboard/myenrolled'>My Enrolled Classes </Link></li>
                            </>

                        }
                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashboardLayout;