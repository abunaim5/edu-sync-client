import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import userIcon from '../../../assets/user.png'

const NavBar = () => {
    const { user, logoutUser } = useAuth();
    // console.log(user)

    const navLinks = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/tutors'>TUTORS</NavLink></li>
        <li><NavLink to='/students'>STUDENTS</NavLink></li>
        <li><NavLink to='/blogs'>BLOGS</NavLink></li>
    </>

    const handleLogout = async () => {
        try {
            const result = await logoutUser()
            !result && Swal.fire({
                title: "Success",
                text: "Your are logged out.",
                icon: "success"
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="bg-[#214559]">
            <div className="navbar max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 tracking-widest">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/'><button className="text-3xl text-white font-croissant ">TutorSage</button></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white font-bold text-xs tracking-widest">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <div className="flex gap-2 items-center">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="rounded-sm input input-bordered w-24 md:w-auto bg-[#E5E5E5]" />
                        </div>
                    </div>
                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt={user?.displayName} src={user?.photoURL ? user?.photoURL : userIcon} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-sm w-52">
                                <li><a>Profile</a></li>
                                <li><a>Dashboard</a></li>
                                <li><a>Settings</a></li>
                                <li onClick={handleLogout}><a>Logout</a></li>
                            </ul>
                        </div> : <div className="space-x-3">
                            <Link to='/login'><button className="btn w-auto h-auto min-h-max px-4 py-3 rounded-sm bg-[#FFA500] text-white border-none font-bold">LOGIN</button></Link>
                            <Link to='/register'><button className="btn w-auto h-auto min-h-max px-4 py-3 rounded-sm bg-[#FFA500] text-white border-none font-bold">SIGN UP</button></Link>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;