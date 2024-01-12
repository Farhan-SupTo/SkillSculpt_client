import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Blog from '../components/Blog/Blog';
import Home from '../components/container/Home';
import Our_courses from '../Pages/Our_courses/Our_courses';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import Secret from '../components/Secret/Secret';
import Dashboard from '../Layout/Dashboard';
import MyCart from '../Pages/Dashboard/MyCart/MyCart';
import CardDetails from '../components/CardDetails/CardDetails';

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
                path:'login',
                element: <Login></Login>
            },
            {
                path:'signup',
                element: <SignUp></SignUp>
            },
            {
                path:'secret',
                element: <PrivateRoute> <Secret></Secret> </PrivateRoute>
            }
        ]
        
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
path: 'mycart',
element: <MyCart></MyCart>
            }
        ]
    }

])