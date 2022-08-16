import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../../components/Footer/Footer';
import Advertisement from '../../components/Advertisement/Advertisement';
function Home() {
    return (
        <div>
            <Navbar />
            <Advertisement />
            <Footer />
        </div>
    )
}

export default Home