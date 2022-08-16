import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import CarouselImg1 from '../../images/img_offer1.jpg';
import CarouselImg2 from '../../images/img_offer2.jpg';
import CarouselImg3 from '../../images/img_offer3.jpg';
import { Link } from 'react-router-dom';
const Product = () => {


    const CarouselImg = {
        img1: CarouselImg1,
        img2: CarouselImg2,
        img3: CarouselImg3,

    }


    return (
        <div>

            <section className="description_product" id="">

                <Container>

                    <div className="product_navigation">

                        <Link to="/" className="btn btn_back"><img src="/img/arrow-left.png" className="img-fluid icon_back" alt="" />Wróć</Link>


                    </div>
                    <Row className='row2'>
                        <Col lg={8}>
                            <div className="description_product">
                                <Carousel className='carousel'>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={CarouselImg.img1}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={CarouselImg.img2}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={CarouselImg.img3}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>

                                <div className="info_product">
                                    <h2>Wynajem Podnośników Nożycowych</h2>
                                    <h2>250 zł</h2>
                                </div>
                                <p>Włocławek polna 101</p>



                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="contact_user_section">
                                <div className="user_contact">
                                    <img src="/img/user_product.png" className="icon_product_contact" alt="" />
                                    <h4>Łukasz</h4>
                                    <h4>696473240</h4>
                                </div>
                                <form method="post" encType="text/plain" action="mailto:lukasz.waszak@onet.eu" className='contactform'>
                                    <input className="form-control input" name="imie" defaultValue='' type="text" placeholder="Imię" />
                                    <input className="form-control input" name="email" defaultValue='' type="email" placeholder="Email" />
                                    <input className="form-control input" name="tel" defaultValue='' type="tel" placeholder="Numer telefonu" />
                                    <textarea className="form-control" name="text" defaultValue='' cols="50" rows="5" id="overflow" placeholder="Wpisz treść wiadomości"></textarea>
                                    <p>Administratorem Twoich danych osobowych jest firma Samba-AnaCom <a href="">Czytaj więcej</a></p>
                                    <button className="btn__map" type="submit">Wyślij wiadomość</button>
                                </form>
                            </div>

                        </Col>
                    </Row >
                    <Row>
                        <Col lg={8}>
                            <div className="details_product">
                                <h3>Szczegóły ogłoszenia</h3>
                            </div>
                            <Row className='productspecification'>
                                <Col xs={6}>
                                    <h5>Marka</h5>
                                </Col>
                                <Col xs={6}>
                                    <h5>Genie</h5>
                                </Col>
                            </Row>
                            <Row className='productspecification'>
                                <Col xs={6}>
                                    <h5>Model</h5>
                                </Col>
                                <Col xs={6}>
                                    <h5>GS-2632</h5>
                                </Col>
                            </Row>
                            <Row className='productspecification'>
                                <Col xs={6}>
                                    <h5>Wysokość robocza</h5>
                                </Col>
                                <Col xs={6}>
                                    <h5>9,80 m</h5>
                                </Col>
                            </Row>
                            <Row className='productspecification'>
                                <Col xs={6}>
                                    <h5>Wysokość platformy </h5>
                                </Col>
                                <Col xs={6}>
                                    <h5>6,80 m </h5>
                                </Col>
                            </Row>

                            <Row className='productspecification' >
                                <Col xs={6}>
                                    <h5>Udźwig</h5>
                                </Col>
                                <Col xs={6}>
                                    <h5>227 kg</h5>
                                </Col>
                            </Row>
                            <Row className='productspecification'>
                                <Col xs={6}>
                                    <h5>Długość</h5>
                                </Col>
                                <Col xs={6}>
                                    <h5>2,44 m </h5>
                                </Col>
                            </Row>

                            <Row className='productspecification'>
                                <Col xs={6}>
                                    <h5>Szerokość </h5>
                                </Col>
                                <Col xs={6}>
                                    <h5>0,81 m</h5>
                                </Col>
                            </Row>
                            <Row className='productspecification'>

                                <Col xs={6}>
                                    <h5>Wysokość</h5>
                                </Col>
                                <Col xs={6}>
                                    <h5>2,26 m </h5>
                                </Col>
                            </Row >

                            <Row className='productspecification'>
                                <Col xs={6}>
                                    <h5>Waga </h5>
                                </Col>
                                <Col xs={6}>
                                    <h5>1956 kg</h5>
                                </Col>
                            </Row>

                            <Row className='productspecification'>
                                <Col xs={6}>
                                    <h5>Rodzaj napędu </h5>
                                </Col>
                                <Col xs={6}>
                                    <h5>Elektryczne</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div className="description">
                        <h3>Opis</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id architecto ullam repellat, animi rerum quae at suscipit possimus! Quidem porro rerum consequatur voluptatum quisquam repellendus nobis? Dolore placeat explicabo quasi ipsa dolor eum laborum voluptate dolores voluptates, ullam nobis eveniet?</p>
                    </div>
                </Container>



            </section >
        </div >



    )
}

export default Product