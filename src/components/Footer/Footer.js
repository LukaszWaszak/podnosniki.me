import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>

            <section className="footer">
                <div className="container">
                    <a className="brand mb-5" href="#">Podnosniki<span>.me</span></a>

                    <footer className="">
                        <div className="row">
                            <div className="col-md-2">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">About</a></li>
                                </ul>
                            </div>

                            <div className="col-md-2">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">About</a></li>
                                </ul>
                            </div>

                            <div className="col-md-2 mb-4">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0">About</a></li>
                                </ul>
                            </div>

                            <div className="col-md-6 buttons_footer">
                                <div className="buttons">
                                    <Link to="/UserLogin" className="btn btn_login_footer"><img src="/img/user_footer.png" className="footer_icon" alt="" />Zaloguj się</Link>
                                    <Link to="/UserSignUp" className="btn btn_login_footer mt-3"><img src="/img/user_footer.png" className="footer_icon" alt="" />Zarejestruj się</Link>
                                </div>
                            </div>
                            <div className="col-12 buttons_footer">
                                <div className="download_section">
                                    <Link to="/" className=""><img src="/img/download_appstore.png" className="footer_download" alt="" /></Link>
                                    <Link to="/" className="mt-3"><img src="/img/download_google.png" className="footer_download" alt="" /></Link>
                                </div>
                            </div>
                        </div>

                        <p className="text-center mt-5">Korzystanie z serwisu oznacza akceptację regulaminu</p>
                    </footer>
                </div>
            </section>

        </>
    )
}

export default Footer