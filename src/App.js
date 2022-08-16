import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import AddAdvertisement from './components/Advertisement/Advertisement';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './pages/Home/UserLogin';
import UserSignUp from './pages/Home/UserSignUp'
import ProductPage from './pages/Home/ProductPage';
import OffersPage1 from './pages/Home/offersPage1';
import OffersPage2 from './pages/Home/offersPage2';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/addAdvertisement' element={<AddAdvertisement />} />
          <Route path='/userLogin' element={<UserLogin />} />
          <Route path='/UserSignUp' element={<UserSignUp />} />
          <Route path='/productpage' element={<ProductPage />} />
          <Route path='/offers1' element={<OffersPage1 />} />
          <Route path='/offers2' element={<OffersPage2 />} />
        </Routes>
      </div>
    </Router >

  );
}

export default App;
