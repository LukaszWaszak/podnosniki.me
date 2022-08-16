import React, { createElement, useState } from 'react'
import './Offers.css'
import Search from '../Search/Search'
import imgpodnosnik from '../../images/img_offer1.jpg'
import imgpodnosnik0 from '../../images/img_0807e.jpg'
import imgpodnosnik1 from '../../images/img_snorkelA38E.jpg'
import imgpodnosnik2 from '../../images/img_offer2.jpg'
import imgpodnosnik3 from '../../images/img_offer3.jpg'
import imgpodnosnik4 from '../../images/img_offer4.jpg'
import imgpodnosnik5 from '../../images/img_offer5.jpg'
import imgpodnosnik6 from '../../images/img_offer6.jpg'
import imgpodnosnik7 from '../../images/img_offer7.jpg'
import imgpodnosnik8 from '../../images/img_offer8.jpg'
import imgpodnosnik11 from '../../images/img_offer12.jpg'
import offerList from './offerList.json';
import promotionOffers from './promotionOffers.json'
import newsOfferList from './newsofferList.json';
import heightIcon from '../../images/height.png'
import weightIcon from '../../images/weight.png'
import loadIcon from '../../images/load.png'
import priceIcon from '../../images/money.png'
import localizationIcon from '../../images/localization.png'
import companyIcon from '../../images/company.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Offers() {


    const [showOffers, setshowOffers] = useState(false);

    const offersShow = () => {
        showOffers ? setshowOffers(false) : setshowOffers(true);
    }




    return (
        <>





            <section id="offers" className="offers">
                <Container>

                    <Row>

                        <Col lg={9}>
                            <a className="btn btn__map d-block d-lg-none">Zobacz na mapie</a>

                            <div className="offers_menu mt-4 border-bottom">
                                <a className="btn btn__map d-none d-lg-block">Zobacz na mapie</a>

                                <div className="buttons_filtres">
                                    <h6>Sortuj:</h6>
                                    <a className="btn btn__filtres">Najnowsze</a>
                                    <a className="btn btn__filtres">Najniższa cena</a>
                                    <a className="btn btn__more_sorting_filtres">...</a>
                                </div></div>
                            <div className="promotion">

                                <h5 className="promotion_h5">Promowane Ogłoszenia</h5>
                                <a onClick={offersShow} className="promotion_p">Zobacz wszystkie</a>
                            </div>
                            <div className="offers_list">
                                <div className="promotion_offers border-bottom pb-4">

                                    <Link to="/productpage" className="link_to_product">

                                        <div className="offer">
                                            <img src={imgpodnosnik2} alt="" className="offer_img img-fluid" />


                                            <ul className="specification">
                                                <li><h4>Wynajem Podnośnika Snorkel A38E</h4></li>
                                                <li className="height"><img src={heightIcon} className="offer_icon" alt="" />13,5  m
                                                    <img src="/img/load.png" className="offer_icon" alt="" />215 kg
                                                    <img src="/img/weight.png" className="offer_icon" alt="" />3850  kg</li>
                                                <li className="price"><img src={priceIcon} className="offer_icon" alt="" />450 zł</li>
                                                <li><img src={localizationIcon} className="offer_icon" alt="" />Kraków</li>
                                                <li><img src={companyIcon} className="offer_icon" alt="" />RentLifts</li>
                                            </ul>

                                        </div>
                                    </Link>

                                    {promotionOffers.map(offer => {
                                        return (

                                            <Link to="/productpage" className={showOffers ? "link_to_product" : "link_to_product d-none"} key={offer.id}>

                                                <div className="offer">
                                                    <img src={offer.src} alt="" className="offer_img img-fluid" />


                                                    <ul className="specification">
                                                        <li><h4>{offer.title}</h4></li>
                                                        <li className="height"><img src={heightIcon} className="offer_icon" alt="" />{offer.height}
                                                            <img src="/img/load.png" className="offer_icon" alt="" />{offer.load}
                                                            <img src="/img/weight.png" className="offer_icon" alt="" />{offer.weight}</li>
                                                        <li className="price"><img src={priceIcon} className="offer_icon" alt="" />{offer.price}</li>
                                                        <li><img src={localizationIcon} className="offer_icon" alt="" />{offer.city}</li>
                                                        <li><img src={companyIcon} className="offer_icon" alt="" />{offer.company}</li>
                                                    </ul>

                                                </div>
                                            </Link>
                                        )
                                    })}

                                </div>
                                <h5>Wszystkie Ogłoszenia</h5>
                                {offerList.map(key => {
                                    return (
                                        <Link to="/productpage" className="link_to_product" key={key.id}>

                                            <div className="offer" >
                                                <img src={key.src} alt="" className="offer_img img-fluid" />


                                                <ul className="specification" >
                                                    <li><h4>{key.title}</h4></li>
                                                    <li className="height">
                                                        <img src={heightIcon} className="offer_icon" alt="" />{key.height}
                                                        <img src={loadIcon} className="offer_icon" alt="" />{key.load}
                                                        <img src={weightIcon} className="offer_icon" alt="" />{key.weight}</li>
                                                    <li className="price"><img src={priceIcon} className="offer_icon" alt="" />{key.price} </li>
                                                    <li><img src={localizationIcon} className="offer_icon" alt="" />{key.city}</li>
                                                    <li><img src={companyIcon} className="offer_icon" alt="" />{key.company}</li>
                                                </ul>

                                            </div>
                                        </Link>

                                    )
                                }
                                )}
                            </div>
                            <div className="pagination_offers border-bottom">
                                <div className="col-lg-6">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                            </li>
                                            <li className="page-item"><Link to="/" className="page-link">1</Link></li>
                                            <li className="page-item"><Link to="/offers1" className="page-link">2</Link></li>
                                            <li className="page-item"><Link to="/offers2" className="page-link">3</Link></li>

                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                                <div className="col-lg-6 onwebsite">
                                    <p className="onwebsite_numbers">Na Stronie:</p>
                                    <select name="number" id="number" aria-placeholder="Nożycowe">
                                        <option defaultValue="nozycowe">18</option>
                                        <option defaultValue="nozycowe">36</option>
                                        <option defaultValue="nozycowe">64</option>

                                    </select>
                                </div>
                            </div>

                        </Col >
                        <Col lg={3}>
                            <h4 className="mt-4">Najnowsze Ogłoszenia</h4>

                            <div className="latest_offers">
                                {newsOfferList.map(offer => {
                                    return (
                                        <Link to="/productpage" className="link_to_product" key={offer.id}>

                                            <div className="latest_offer">
                                                <img src={offer.src} alt="" className="latest_img img-fluid" />
                                                <ul className="latest_specification">
                                                    <li><h4>{offer.title}</h4></li>
                                                    <li><img src={localizationIcon} className="latest_icon" alt="" /> {offer.city}</li>
                                                    <li><img src={companyIcon} className="latest_icon" alt="" /> {offer.company}</li>
                                                    <li className="price"><img src={priceIcon} className="latest_icon" alt="" />{offer.price} </li>

                                                </ul>
                                            </div>
                                        </Link>
                                    )
                                })}



                            </div>
                        </Col>
                    </Row>

                    <div className="city_links">
                        <ul className="city_ul">
                            <li className="city_li">Podnośniki na wynajem mazowieckie (3277)</li>
                            <li className="city_li">Podnośniki na wynajem dolnośląskie (1223)</li>
                            <li className="city_li">Podnośniki na wynajem kujawsko-pomorskie (271)</li>
                            <li className="city_li">Podnośniki na wynajem podkarpackie (213)</li>
                            <li className="city_li">Podnośniki na wynajem świętokrzyskie (151)</li>
                            <li className="city_li">Podnośniki na wynajem śląskie (1572)</li>
                            <li className="city_li">Podnośniki na wynajem wielkopolskie (985)</li>
                            <li className="city_li">Podnośniki na wynajem łódzkie (563)</li>
                            <li className="city_li">Podnośniki na wynajem lubelskie (255)</li>
                            <li className="city_li">Podnośniki na wynajem lubuskie (117)</li>
                            <li className="city_li">Podnośniki na wynajem małopolskie (1369)</li>
                            <li className="city_li">Podnośniki na wynajem pomorskie (917)</li>
                            <li className="city_li">Podnośniki na wynajem zachodniopomorskie (549)</li>
                            <li className="city_li">Podnośniki na wynajem podlaskie (162)</li>
                            <li className="city_li">Podnośniki na wynajem warmińsko-mazurskie (111)</li>
                        </ul>
                    </div>
                </Container>

            </section>







        </>
    )
}




export default Offers