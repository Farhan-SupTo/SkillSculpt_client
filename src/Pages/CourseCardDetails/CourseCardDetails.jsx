import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseCardDetails = () => {
    const courses =useLoaderData()
    const {_id,title,image,price,
        category,details} =courses
    return (
        <div className='container  mx-auto pt-20'>
            <div className="card  flex flex-col card-side bg-base-100 text-start items-start shadow-xl h-2/3 container mx-auto mb-10">
  <figure><img className='p-10 w-full' src={image} alt="Movie"/></figure>
  <div className="card-body w-full">
    <h2 className="card-title text-3xl text-slate-600">{title}</h2>
    <p className='text-xl text-base'>{details}</p>
    <div className="card-actions justify-end pt-14 pr-10">
      <Link  to='/courses'><button className="btn btn-outline">Back To Courses</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CourseCardDetails;