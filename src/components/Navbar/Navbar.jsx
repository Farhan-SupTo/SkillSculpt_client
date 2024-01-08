import React, { useEffect, useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
// import MobileNavLinks from "./MobileNavLinks";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {


  const navOption = (
    <ul className="md:flex md:space-x-9 font-medium">
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
        <Link className="hover:text-teal-700" to="/admin/dashboard">Teacher</Link>
      </li>
      <li>
        <Link className="hover:text-teal-700" to="/order/salad">Contact</Link>
      </li>
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
            <div className="text-xl text-Teal uppercase tracking-wide font-bold">
           SkillSculpt
            </div>
          </div>
          <div className="sm:flex items-center hidden">
           {navOption}
          </div>
          <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray hover:bg-teal-700 hover:text-white hover:border-none">
            Sign Up
          </button>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-44 w-full top-0 left-0 z-20 bg-Teal text-white flex  px-2 flex-col justify-center items-center shadow-lg"
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
