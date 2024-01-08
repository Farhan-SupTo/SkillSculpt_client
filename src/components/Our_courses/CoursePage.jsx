import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const CoursePage = () => {
    const [courses,setCourses] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setCourses(data)
        })
    },[])
    return (
        <div className=''>
            <CourseCard courses={courses} headline='Our Courses'></CourseCard>
        </div>
    );
};

export default CoursePage;