import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Blog from '../components/Blog/Blog';
import Home from '../components/container/Home';
import Our_courses from '../components/Our_courses/Our_courses';

export const router =createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/courses',
                element:<Our_courses></Our_courses>
            }
        ]
        
    },

])