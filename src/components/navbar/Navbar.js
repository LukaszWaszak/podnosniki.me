import React, { useState } from 'react'
import './Navbar.css'
import img1 from '../../images/baner.png'
import userIcon from '../../images/user.png'
import { Link } from 'react-router-dom';
import { Nav, Container, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Navbar() {


    const [showMenu, setshowMenu] = useState(false);

    const MenuShow = () => {

        showMenu ? setshowMenu(false) : setshowMenu(true);

    }


    return (
        <>
            <header className="d-flex d-none d-lg-block">
                <img src={img1} className='header__baner'></img>
            </header>


            <Nav className="navbar navbar-expand-lg navbar-dark" aria-label="Eighth navbar example">
                <Container>
                    <Link to="/" className="navbar-brand brand">Podnosniki<span>.me</span></Link>
                    <button className="navbar-toggler" onClick={MenuShow} type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={showMenu ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarsExample07">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <NavItem>
                                <Link to="/" className="nav-link" aria-current="page">Ogłoszenia</Link>
                            </NavItem>
                            <NavItem className="nav-item">
                                <Link to='/' className="nav-link">Rynek Pierwotny</Link>
                            </NavItem>
                            <NavItem className="nav-item">
                                <Link to='/' className="nav-link ">Firmy</Link>
                            </NavItem>
                            <NavItem className="nav-item">
                                <Link to="/userLogin" className="nav-link"> <img src={userIcon} className="icon_user" alt="" /> Moje Konto</Link>
                            </NavItem>
                            <NavItem className="nav-item ">
                                <Link to="/addAdvertisement" className="add_advertisement">Dodaj Ogłoszenie</Link>
                            </NavItem>

                        </ul>

                    </div>
                </Container>
            </Nav>



        </>
    )
}

export default Navbar