// Example in index.css or index.js
import 'tailwindcss/tailwind.css';
import { Link ,NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import swal from 'sweetalert';
const links=<>
<NavLink to="/"  className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#b8553a] font-bold underline" : ""
                            }>Home</NavLink>
<NavLink to="/addproduct" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#b8553a] font-bold underline" : ""
                            }>Add Product</NavLink>
<NavLink to="/mycart" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ?
                                    "text-[#b8553a] font-bold underline" : ""
                            }>My Cart</NavLink>

</>

const Navbar = () => {
    const {user,logOut} =useContext(AuthContext);
    const handleSignOut = () =>{
        logOut()
        .then(result =>{
            console.log(result.user);
            swal("Are you sure you want to do this?", {
                buttons: ["Oh noez!", true],
              });

        })
        .catch()
    }
    return (
        <div>
          <div className="navbar bg-base-100 rounded-xl p-4 mt-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4">
        {links}
      </ul>
    </div>
   
    <a className="btn btn-ghost normal-case invisible md:visible text-rose-500  text-4xl font-bold">
    <img className='w-[40px] h-[40px] ' src="https://i.ibb.co/FHKFfWd/lotus-2982182.png" alt="icon1" border="0"/>LushBeauty</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-4 px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-0 lg:gap-5">
    <p>{user?.displayName}</p>
    <div>{user?
        <img className='rounded-full w-12 h-12' src={user?.photoURL} alt="" />
        :
        <FaUserCircle className='text-4xl'></FaUserCircle>
    }
       
    </div>
    {
        user? 
        <button onClick={handleSignOut} className='btn btn-primary text-white bg-rose-500 border-rose-500 normal-case'>Sign Out</button>
        :
        <button className='btn btn-primary text-white bg-rose-500 border-rose-500 normal-case'> 
        <Link to='/login'>Login</Link>
        </button>
    }
   
  </div>
</div>
        </div>
    );
};

export default Navbar;