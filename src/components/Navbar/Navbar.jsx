"use client"

// Example in index.css or index.js
import "tailwindcss/tailwind.css"
import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import { useEffect, useState } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { FaUserCircle } from "react-icons/fa"
import swal from "sweetalert"

const links = (
  <>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
            ? "text-rose-600 font-bold bg-rose-50 px-4 py-2 rounded-full border border-rose-200"
            : "hover:text-rose-600 hover:bg-rose-50 px-4 py-2 rounded-full transition-all duration-300"
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/addproduct"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
            ? "text-rose-600 font-bold bg-rose-50 px-4 py-2 rounded-full border border-rose-200"
            : "hover:text-rose-600 hover:bg-rose-50 px-4 py-2 rounded-full transition-all duration-300"
      }
    >
      Add Product
    </NavLink>
    <NavLink
      to="/mycart"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
            ? "text-rose-600 font-bold bg-rose-50 px-4 py-2 rounded-full border border-rose-200"
            : "hover:text-rose-600 hover:bg-rose-50 px-4 py-2 rounded-full transition-all duration-300"
      }
    >
      My Cart
    </NavLink>
  </>
)

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user)
        swal("Are you sure you want to do this?", {
          buttons: ["Oh noez!", true],
        })
      })
      .catch()
  }

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }
  useEffect(() => {
    localStorage.setItem("theme", theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme])

  return (
    <div>
      <div className="navbar bg-white/80 backdrop-blur-lg border border-rose-100 rounded-2xl p-4 mt-4 shadow-lg shadow-rose-500/10 relative overflow-hidden">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-50/50 to-pink-50/50 opacity-60"></div>

        <div className="navbar-start relative z-10">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden hover:bg-rose-50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-rose-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-white/95 backdrop-blur-lg rounded-2xl w-64 gap-2 border border-rose-100"
            >
              {links}
            </ul>
          </div>

          <a className="btn btn-ghost normal-case invisible md:visible text-rose-600 text-4xl font-bold hover:bg-transparent group">
            <div className="relative">
              <img
                className="w-[40px] h-[40px] group-hover:scale-110 transition-transform duration-300"
                src="https://i.ibb.co/FHKFfWd/lotus-2982182.png"
                alt="icon1"
                border="0"
              />
              <div className="absolute inset-0 bg-rose-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">LushBeauty</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex relative z-10">
          <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-3 lg:gap-5 relative z-10">
          <label className="swap swap-rotate group">
            <input type="checkbox" onChange={handleToggle} />
            <svg
              className="swap-on fill-current w-8 h-8 text-rose-500 group-hover:text-rose-600 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-8 h-8 text-rose-500 group-hover:text-rose-600 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <p className="text-rose-700 font-medium hidden sm:block">{user?.displayName}</p>

          <div className="relative group">
            {user ? (
              <div className="relative">
                <img
                  className="rounded-full w-12 h-12 border-2 border-rose-200 group-hover:border-rose-400 transition-colors"
                  src={user?.photoURL || "/placeholder.svg"}
                  alt=""
                />
                <div className="absolute inset-0 bg-rose-400 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
            ) : (
              <FaUserCircle className="text-4xl text-rose-500 hover:text-rose-600 transition-colors"></FaUserCircle>
            )}
          </div>

          {user ? (
            <button
              onClick={handleSignOut}
              className="btn bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold px-6 py-2 rounded-full border-none shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300 transform hover:scale-105"
            >
              Sign Out
            </button>
          ) : (
            <button className="btn bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold px-6 py-2 rounded-full border-none shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300 transform hover:scale-105">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>

        {/* Decorative floating elements */}
        <div className="absolute top-2 right-20 w-2 h-2 bg-rose-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-3 left-32 w-1 h-1 bg-pink-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
      </div>
    </div>
  )
}

export default Navbar
