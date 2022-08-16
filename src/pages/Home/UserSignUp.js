import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/Footer/Footer';
import SignUp from '../../components/SignUp/SignUp';

const UserLogin = () => {
    return (
        <div>
            <Navbar />
            <SignUp />
            <Footer />
        </div>
    )
}

export default UserLogin