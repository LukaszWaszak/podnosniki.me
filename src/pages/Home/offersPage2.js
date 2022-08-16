import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../../components/Search/Search';
import Offers from '../../components/Offers/Offers';
import Footer from '../../components/Footer/Footer';
function offersPage1() {
    return (
        <div>
            <Navbar />
            <Search />
            <Offers />
            <Footer />
        </div>
    )
}

export default offersPage1