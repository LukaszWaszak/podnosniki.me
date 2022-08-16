import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/Footer/Footer';
import Login from '../../components/Login/Login';

const UserLogin = () => {
    return (
        <div>
            <Navbar />
            <Login />
            <Footer />
        </div>
    )
}

export default UserLogin