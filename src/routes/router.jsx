import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Blog from '../components/Blog/Blog';
import Home from '../components/container/Home';
import Our_courses from '../Pages/Our_courses/Our_courses';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import Secret from '../AdminDashboard/Secret/Secret';
import Dashboard from '../Layout/Dashboard';
import MyCart from '../Pages/Dashboard/MyCart/MyCart';
import CardDetails from '../components/CardDetails/CardDetails';
import CourseCard from '../Pages/Our_courses/CourseCard';
import CourseCardDetails from '../Pages/CourseCardDetails/CourseCardDetails';
import AllUser from '../AdminDashboard/AllUser/AllUser';
import AddCourse from '../AdminDashboard/AddCourse/AddCourse';
import UpdateCourse from '../AdminDashboard/UpdateCourse/UpdateCourse';
import ContactUs from '../Pages/ContactUs/ContactUs';

export const router =createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/courses',
                element: <Our_courses></Our_courses>,
                
            },
            {
                path:'/courses/:id',
                element: <CourseCardDetails></CourseCardDetails>,
                loader: ({params}) => fetch(`https://education-server-ten.vercel.app/courses/${params.id}`)
                
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'signup',
                element: <SignUp></SignUp>
            },
            {
                path:'contactus',
                element: <ContactUs></ContactUs>
            },
        
        ]
        
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
              path: 'mycart',
              element: <MyCart></MyCart>
            },
            {
              path: 'admin',
              element: <PrivateRoute> <Secret></Secret> </PrivateRoute>
            },
            {
              path: 'allusers',
              element: <AllUser></AllUser>
            },
            {
              path: 'addcourse',
              element: <AddCourse></AddCourse>
            },
            {
              path: 'updatecourse',
              element: <UpdateCourse></UpdateCourse>
            }
        ]
    }

])