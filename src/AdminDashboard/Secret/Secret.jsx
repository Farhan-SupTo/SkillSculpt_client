import React from 'react';
import { FaBook } from 'react-icons/fa';
import { MdManageAccounts } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { Link } from 'react-router-dom';
import MyCart from '../../Pages/Dashboard/MyCart/MyCart';

const Secret = () => {

    // todo

    const isAdmin =true
    return (
        <div className='container  mx-auto pt-28'>
            <div className="divider divider-accent uppercase sm:text-[2.5rem] text-[1.825rem] pb-3">Admin Dashboard</div>
          {
            isAdmin ? <>
              <div role="tablist" className="tabs tabs-boxed  uppercase font-semibold bg-blue-100">
  <Link to='/dashboard/addcourse' role="tab" className="tab hover:tab-active"> <FaBook className='pr-1'></FaBook> Add Courses</Link>
  <Link to='/dashboard/updatecourse' role="tab" className="tab hover:tab-active"> <TbBrandBooking className='pr-1 text-xl'></TbBrandBooking> Update Courses</Link>
  <Link to='/dashboard/allusers' role="tab" className="tab hover:tab-active"> <MdManageAccounts className='pr-1 text-xl'></MdManageAccounts> Manage Users</Link>
</div></> : <><MyCart></MyCart></>
          }
        </div>
    );
};

export default Secret;