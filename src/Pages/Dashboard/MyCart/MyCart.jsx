import React, { useContext } from 'react';
import UseCart from '../../../Hooks/UseCart';
import { FaTrashAlt } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProviders/AuthProviders';

const MyCart = () => {
  const {user} =useContext(AuthContext)
    const [cart,refetch] =UseCart()
    console.log(cart);
    const Total = cart.reduce((sum, item) => item.price + sum, 0);


    const navigate =useNavigate()

 

    const handleDelete = item =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
          fetch(`https://education-server-ten.vercel.app/carts/${item._id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.deletedCount>0){
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  
            }
          })
            }
          });
       }



 const payment = ()=>{
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Congrats Payment Successful",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
      
 }   
 
    return (
        <div className='sm:text-[2.5rem] text-[1.825rem] items-center container mx-auto pt-20'>
           
            <div className="divider divider-accent uppercase"> My Cart</div>
    
      <div className="overflow-x-auto pt-3 font-medium">
        <table className="table">
          {/* head */}
          <thead className='bg-teal-600 text-slate-200  uppercase'>
            <tr>
              <th>
             #
              </th>
              <th>Course Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item,index)=>
                <tr
                key={item._id}>
                <td>
                  <label>
                    {index + 1}.
                  </label>
                </td>
                <td>
                 
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                 
                </td>
                <td>
                 {item.title}
                </td>
                <td >{item.price}</td>
                <td>
                  <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-sm bg-red-500 text-white hover:bg-red-800"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>)
            }

          </tbody>

        </table>
      </div>
      <div className="divider"></div> 
      
              <div className="uppercase flex xs:flex-col md:flex-row xs:pt-16 xs:items-start  font-semibold h-[60px] items-center justify-evenly">
             <Link to='/courses'> <button className='bg-teal-600 uppercase text-lg mb-5 text-white py-2 rounded px-6 '>Add More Item</button></Link>
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${Total}</h3>
        <Link onClick={payment}><button  className="bg-teal-600 hover:bg-slate-500 text-base mb-5 text-white rounded py-2 px-6 tracking-wider">PAY</button></Link>
      </div>
     
        </div>
    );
};

export default MyCart;