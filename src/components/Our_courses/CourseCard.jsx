import React from 'react';
import { AiOutlineStar, AiOutlineUser } from 'react-icons/ai';

const CourseCard = ({courses,headline}) => {
    return (
        <div>
            <h2 className='text-5xl font-bold text-black text-center my-5'>{headline}</h2>
<div className='grid sm:grid-cols-1 md:grid-cols-3 my-7 gap-6'>
{
                courses.map(course=>
                    <div key={course._id} className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={course.image} alt="Shoes" className='h-60'/></figure>
        <div className="card-body">
          <h2 className="card-title">{course.title
}</h2>
<div className="flex items-center justify-between">
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
          <div className="card-actions justify-end my-2">
            <button className="bg-teal-600 py-3 px-2 text-white font-medium rounded-md">Buy Now</button>
          </div>
        </div>
      </div>)
            }
</div>
        </div>
        
    );
};

export default CourseCard;