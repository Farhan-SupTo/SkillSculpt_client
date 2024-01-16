import React, { useEffect, useRef, useState } from 'react';
import { FaBlogger } from 'react-icons/fa';
import "./blog.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"


const Blog = () => {
    

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
        <div className=' items-center container mx-auto p-4 pt-20'>
         
            <div className='sm:text-[2.5rem] text-[1.825rem] flex items-center'>
            <FaBlogger />
            <h1 >Blog Section Coming</h1>
            </div>

            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          {
            courses.map(item=><SwiperSlide><img className='h-64 rounded-lg object-cover mb-2' src={item.image} alt='' /></SwiperSlide>)
        }
      </Swiper>


            <section className='blog'>
        <div className='grid md:pl-0 sm:grid-cols-1 md:grid-cols-3 my-7 gap-6'>
          {courses.map((item) => (
            <div className='box boxItems' key={item.id}>
              <div>
                <img className='h-64 rounded-lg object-cover mb-2' src={item.image} alt='' />
              </div>
              <div className='details space-y-3'>
                <div className='tag flex items-center'>
                  <AiOutlineTags className='icon' />
                  <a className=' pl-2' href='/'>#{item.category}</a>
                </div>
                
                  <h3>{item.title}</h3>
               
                <p>Skill development in your education or your career refers to learning new skills that can help you grow personally and professionally. It requires you to understand the gaps in your knowledge and work on them by picking up something new or honing your existing skills.  </p>
                <div className='flex items-center gap-2'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>April 03,2023</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
          
            
           
        </div>
    );
};

export default Blog;