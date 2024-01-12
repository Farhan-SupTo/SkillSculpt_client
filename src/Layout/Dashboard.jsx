import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/container/Footer';

const Dashboard = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className="min-h-screen mb-36 px-4">
<Outlet></Outlet>
</div>
           <Footer></Footer>
        </div>
    );
};

export default Dashboard;