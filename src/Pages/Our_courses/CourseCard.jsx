import React, { useContext } from 'react';
import { AiOutlineStar, AiOutlineUser } from 'react-icons/ai';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseCart from '../../Hooks/UseCart';

const CourseCard = ({course}) => {
  const {_id,title,image,price,
    category} =course

  const [,refetch] =UseCart()

  const {user} =useContext(AuthContext)
  const navigate =useNavigate()
  const location =useLocation()
  const handleCourseCard =(course) =>{
    console.log(course)
    if(user && user.email){

      const OrderCartItem ={courseMenuID:_id,title,image,price,email:user.email}


      fetch('https://education-server-ten.vercel.app/carts',
      {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(OrderCartItem)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
         refetch()
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Food has added to cart",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }
    else{
      Swal.fire({
        title: "Please login to Order",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!"
      }).then((result) => {
        if (result.isConfirmed) {
    navigate('/login',{state:{ from: location }})
        }
      });
    }
  }
    return (
       
          
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={course.image} alt="Shoes" className='h-60'/></figure>
        <div className="card-body">
          <h4>{category}</h4>
          <h2 className="card-title">{course.title
}</h2>
<div className="flex  items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-Solitude p-1 rounded-full">
            <AiOutlineUser className="text-Teal" />
          </div>
          <div className="text-sm font-bold">{course.participants}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-Solitude p-1 rounded-full">
            <AiOutlineStar className="text-yellow" />
          </div>
          <div className="text-sm font-bold">{course.rating}</div>
        </div>
        <div className="text-sm font-bold">${course.price}</div>
      </div>
          <div className="card-actions justify-between items-center my-2">
          <Link to={`/courses/${course._id}`} className='underline cursor-pointer text-blue-600 font-medium font-monospace font-extralight'>More Details</Link>
            <button onClick={()=>handleCourseCard(course)} className="bg-teal-600 py-3 px-2 text-white font-medium rounded-md">Book Now</button>
          </div>
        </div>
      </div>
            

      
        
    );
};

export default CourseCard;