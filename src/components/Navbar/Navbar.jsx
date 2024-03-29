import React, { useContext, useEffect, useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { FaShoppingBag } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import UseCart from "../../Hooks/UseCart";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders"; 
import logo from '../../../public/logo.svg';


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [cart] =UseCart()
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };


  const navOption = (
    <ul className="md:flex md:space-x-9 font-medium text-lg items-center">
      <li>
        <Link className="hover:text-teal-700" to="/">Home</Link>
      </li>
      <li>
        <Link className="hover:text-teal-700" to="/blog">Blog</Link>
      </li>
      <li>
        <Link className="hover:text-teal-700" to="/courses">Our Courses</Link>
      </li>
      <li>
        <Link className="hover:text-teal-700" to="/contactus">Contact</Link>
      </li>
      <li>
        <Link className="hover:text-teal-700" to="/dashboard/admin">Secret</Link>
      </li>

      <li>
        <Link to='/dashboard/mycart'>
        <button className="btn">
        <FaShoppingBag className="h-10 text-teal-600 text-lg"></FaShoppingBag>
  <div className="badge badge-secondary">+{cart?.length || 0}</div>
</button>
        
        </Link>
      </li>
      {user ? 
        <>
          <li>
            {/* <span>{user?.displayName}</span> */}
            <div className="avatar pt-2">
  <div className="w-8 rounded-full ring  ring-teal-600 ring-offset-2">
    <img src={user?.photoURL} />
  </div>
</div>
          </li>
          <li>
          <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray hover:bg-teal-700 hover:text-white hover:border-none">
          <Link onClick={handleLogOut}>
              LogOut
            </Link>
          </button>
           
          </li>
        </>
       : 
        <>
          <li>
         <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray hover:bg-teal-700 hover:text-white hover:border-none">
       
            <Link to="/login">Sign in</Link>
          
          </button>
          </li>
         
        </>
      }
    </ul>
  );


  
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);
  return (
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container  mx-auto flex items-center justify-between px-2`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
           <div className="flex items-center gap-1">
           <img src={logo} alt="" />
           <div className="text-xl text-Teal uppercase tracking-wide font-bold">
           SkillSculpt
          
            </div>
           
           </div>
          </div>
          <div className="sm:flex items-center hidden">
           {navOption}
          </div>
        
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-80 w-2/3 top-0 left-0 z-20 bg-teal-700 text-white flex   px-10 py-2 flex-col shadow-lg"
            >
         {navOption}
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
