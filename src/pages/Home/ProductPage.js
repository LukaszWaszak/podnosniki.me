import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';

const ProductPage = () => {
    return (
        <div>
            <Navbar />
            <Product />
            <Footer />
        </div>
    )
}

export default ProductPage