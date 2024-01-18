import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const CoursePage = () => {
    const [courses,setCourses] =useState([])
    useEffect(()=>{
        fetch('https://education-server-ten.vercel.app/courses')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setCourses(data)
        })
    },[])
    return (

        <section>
            <h2 className='text-5xl  font-bold text-black text-center my-5'>Our Courses</h2>
            <div className='grid pl-10 md:pl-0 sm:grid-cols-1 md:grid-cols-3 my-7 gap-6'>
            
            {
                courses.map(course=> <CourseCard key={course._id}  course={course}></CourseCard>)
            }
            
        </div>
        </section>
        
     
    );
};

export default CoursePage;