import React, { createElement, useState } from 'react'
import './Offers.css'
import Search from '../Search/Search'
import imgpodnosnik from '../../images/img_offer1.jpg'
import imgpodnosnik0807e from '../../images/img_0807e.jpg'
import imgpodnosnikA38E from '../../images/img_snorkelA38E.jpg'
import imgpodnosnik2 from '../../images/img_offer2.jpg'
import imgpodnosnik3 from '../../images/img_offer3.jpg'
import imgpodnosnik4 from '../../images/img_offer4.jpg'
import imgpodnosnik5 from '../../images/img_offer5.jpg'
import imgpodnosnik6 from '../../images/img_offer6.jpg'
import imgpodnosnik7 from '../../images/img_offer7.jpg'
import imgpodnosnik8 from '../../images/img_offer8.jpg'
import offerList from './offerList.json';
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

            {offerList.map(offer => {
                return (



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
                                            <a className="btn btn__filtres">Najni??sza cena</a>
                                            <a className="btn btn__more_sorting_filtres">...</a>
                                        </div></div>
                                    <div className="promotion">

                                        <h5 className="promotion_h5">Promowane Og??oszenia</h5>
                                        <a onClick={offersShow} className="promotion_p">Zobacz wszystkie</a>
                                    </div>
                                    <div className="offers_list">
                                        <div className="promotion_offers border-bottom pb-4">
                                            <Link to="/productpage" className="link_to_product" key={offer.id}>

                                                <div className="offer">
                                                    <img src={imgpodnosnik0807e} alt="" className="offer_img img-fluid" />


                                                    <ul className="specification">
                                                        <li><h4>{offer.title}</h4></li>
                                                        <li className="height"><img src={heightIcon} className="offer_icon" alt="" />{offer.height}
                                                            <img src={loadIcon} className="offer_icon" alt="" />{offer.load}
                                                            <img src={weightIcon} className="offer_icon" alt="" />{offer.weight}</li>
                                                        <li className="price"><img src={priceIcon} className="offer_icon" alt="" />{offer.price}</li>
                                                        <li><img src={localizationIcon} className="offer_icon" alt="" />{offer.city}</li>
                                                        <li><img src={companyIcon} className="offer_icon" alt="" />{offer.company}</li>
                                                    </ul>

                                                </div>
                                            </Link>
                                            <Link to="/productpage" className="link_to_product">

                                                <div className="offer">
                                                    <img src={imgpodnosnikA38E} alt="" className="offer_img img-fluid" />


                                                    <ul className="specification">
                                                        <li><h4>Wynajem Podno??nika Snorkel A38E</h4></li>
                                                        <li className="height"><img src={heightIcon} className="offer_icon" alt="" />13,5  m
                                                            <img src="/img/load.png" className="offer_icon" alt="" />215 kg
                                                            <img src="/img/weight.png" className="offer_icon" alt="" />3850  kg</li>
                                                        <li className="price"><img src={priceIcon} className="offer_icon" alt="" />450 z??</li>
                                                        <li><img src={localizationIcon} className="offer_icon" alt="" />Krak??w</li>
                                                        <li><img src={companyIcon} className="offer_icon" alt="" />RentLifts</li>
                                                    </ul>

                                                </div>
                                            </Link>
                                            <Link to="/productpage" className={showOffers ? "link_to_product" : "link_to_product d-none"}>

                                                <div className="offer">
                                                    <img src={imgpodnosnik4} alt="" className="offer_img img-fluid" />


                                                    <ul className="specification">
                                                        <li><h4>Wynajem zwy??ek W??oc??awek</h4></li>
                                                        <li className="height"><img src={heightIcon} className="offer_icon" alt="" />13,5  m
                                                            <img src="/img/load.png" className="offer_icon" alt="" />215 kg
                                                            <img src="/img/weight.png" className="offer_icon" alt="" />3850  kg</li>
                                                        <li className="price"><img src={priceIcon} className="offer_icon" alt="" />450 z??</li>
                                                        <li><img src={localizationIcon} className="offer_icon" alt="" />Krak??w</li>
                                                        <li><img src={companyIcon} className="offer_icon" alt="" />RentLifts</li>
                                                    </ul>

                                                </div>
                                            </Link>
                                            <Link to="/productpage" className={showOffers ? "link_to_product" : "link_to_product d-none"}>

                                                <div className="offer">
                                                    <img src={imgpodnosnik6} alt="" className="offer_img img-fluid" />


                                                    <ul className="specification">
                                                        <li><h4>Wynajem Podno??nik??w No??ycowych</h4></li>
                                                        <li className="height"><img src={heightIcon} className="offer_icon" alt="" />13,5  m
                                                            <img src="/img/load.png" className="offer_icon" alt="" />215 kg
                                                            <img src="/img/weight.png" className="offer_icon" alt="" />3850  kg</li>
                                                        <li className="price"><img src={priceIcon} className="offer_icon" alt="" />450 z??</li>
                                                        <li><img src={localizationIcon} className="offer_icon" alt="" />Krak??w</li>
                                                        <li><img src={companyIcon} className="offer_icon" alt="" />RentLifts</li>
                                                    </ul>

                                                </div>
                                            </Link>
                                        </div>
                                        <h5>Wszystkie Og??oszenia</h5>

                                        <Link to="/productpage" className="link_to_product" key={offerList.id}>

                                            <div className="offer">
                                                <img src={imgpodnosnik4} alt="" className="offer_img img-fluid" />


                                                <ul className="specification">
                                                    <li><h4>{offerList.title}</h4></li>
                                                    <li className="height"><img src={heightIcon} className="offer_icon" alt="" />{offerList.height}
                                                        <img src="/img/load.png" className="offer_icon" alt="" />{offerList.load}
                                                        <img src="/img/weight.png" className="offer_icon" alt="" />{offerList.weight}</li>
                                                    <li className="price"><img src={priceIcon} className="offer_icon" alt="" />{offerList.price} z??</li>
                                                    <li><img src={localizationIcon} className="offer_icon" alt="" />{offerList.city}</li>
                                                    <li><img src={companyIcon} className="offer_icon" alt="" />{offerList.company}</li>
                                                </ul>

                                            </div>
                                        </Link>


                                        <Link to="/productpage" className="link_to_product">

                                            <div className="offer">
                                                <img src={imgpodnosnik2} alt="" className="offer_img img-fluid" />


                                                <ul className="specification">
                                                    <li><h4>Wynajem Podno??nika SnorkelA38E</h4></li>
                                                    <li className="height"><img src={heightIcon} className="offer_icon" alt="" />9,93 m
                                                        <img src="/img/load.png" className="offer_icon" alt="" />226 kg
                                                        <img src="/img/weight.png" className="offer_icon" alt="" />2232 kg</li>
                                                    <li className="price"><img src={priceIcon} className="offer_icon" alt="" />250 z??</li>
                                                    <li><img src={localizationIcon} className="offer_icon" alt="" />W??oc??awek</li>
                                                    <li><img src={companyIcon} className="offer_icon" alt="" />Samba-AnaCom</li>
                                                </ul>

                                            </div>
                                        </Link>
                                        <Link to="/productpage" className="link_to_product">

                                            <div className="offer">
                                                <img src={imgpodnosnik3} alt="" className="offer_img img-fluid" />


                                                <ul className="specification">
                                                    <li><h4>Wynajem Podno??nik??w No??ycowych</h4></li>
                                                    <li className="height"><img src={heightIcon} className="offer_icon" alt="" />9,93 m
                                                        <img src="/img/load.png" className="offer_icon" alt="" />226 kg
                                                        <img src="/img/weight.png" className="offer_icon" alt="" />2232 kg</li>
                                                    <li className="price"><img src={priceIcon} className="offer_icon" alt="" />250 z??</li>
                                                    <li><img src={localizationIcon} className="offer_icon" alt="" />W??oc??awek</li>
                                                    <li><img src={companyIcon} className="offer_icon" alt="" />Samba-AnaCom</li>
                                                </ul>

                                            </div>
                                        </Link>
                                        <Link to="/productpage" className="link_to_product">

                                            <div className="offer">
                                                <img src={imgpodnosnik4} alt="" className="offer_img img-fluid" />


                                                <ul className="specification">
                                                    <li><h4>Wynajm?? Zwy??k?? Genie GS-3246</h4></li>
                                                    <li className="height"><img src={heightIcon} className="offer_icon" alt="" />9,93 m
                                                        <img src="/img/load.png" className="offer_icon" alt="" />226 kg
                                                        <img src="/img/weight.png" className="offer_icon" alt="" />2232 kg</li>
                                                    <li className="price"><img src={priceIcon} className="offer_icon" alt="" />250 z??</li>
                                                    <li><img src={localizationIcon} className="offer_icon" alt="" />W??oc??awek</li>
                                                    <li><img src={companyIcon} className="offer_icon" alt="" />Samba-AnaCom</li>
                                                </ul>

                                            </div>
                                        </Link>
                                        <Link to="/productpage" className="link_to_product">

                                            <div className="offer">
                                                <img src={imgpodnosnik} alt="" className="offer_img img-fluid" />


                                                <ul className="specification">
                                                    <li><h4>Wynajem Podno??nika Magni ES1212E</h4></li>
                                                    <li className="height"><img src={heightIcon} className="offer_icon" alt="" />9,93 m
                                                        <img src="/img/load.png" className="offer_icon" alt="" />226 kg
                                                        <img src="/img/weight.png" className="offer_icon" alt="" />2232 kg</li>
                                                    <li className="price"><img src={priceIcon} className="offer_icon" alt="" />250 z??</li>
                                                    <li><img src={localizationIcon} className="offer_icon" alt="" />W??oc??awek</li>
                                                    <li><img src={companyIcon} className="offer_icon" alt="" />Samba-AnaCom</li>
                                                </ul>

                                            </div>
                                        </Link>
                                        <Link to="/productpage" className="link_to_product">

                                            <div className="offer">
                                                <img src={imgpodnosnik6} alt="" className="offer_img img-fluid" />


                                                <ul className="specification">
                                                    <li><h4>Wynajem Podno??nik??w No??ycowych i przegubowych</h4></li>
                                                    <li className="height"><img src={heightIcon} className="offer_icon" alt="" />9,93 m
                                                        <img src="/img/load.png" className="offer_icon" alt="" />226 kg
                                                        <img src="/img/weight.png" className="offer_icon" alt="" />2232 kg</li>
                                                    <li className="price"><img src={priceIcon} className="offer_icon" alt="" />250 z??</li>
                                                    <li><img src={localizationIcon} className="offer_icon" alt="" />W??oc??awek</li>
                                                    <li><img src={companyIcon} className="offer_icon" alt="" />Samba-AnaCom</li>
                                                </ul>

                                            </div>
                                        </Link>
                                        <Link to="/productpage" className="link_to_product">

                                            <div className="offer">
                                                <img src={imgpodnosnik7} alt="" className="offer_img img-fluid" />


                                                <ul className="specification">
                                                    <li><h4>Wynajm?? Podno??niki</h4></li>
                                                    <li className="height"><img src={heightIcon} className="offer_icon" alt="" />9,93 m
                                                        <img src="/img/load.png" className="offer_icon" alt="" />226 kg
                                                        <img src="/img/weight.png" className="offer_icon" alt="" />2232 kg</li>
                                                    <li className="price"><img src={priceIcon} className="offer_icon" alt="" />250 z??</li>
                                                    <li><img src={localizationIcon} className="offer_icon" alt="" />W??oc??awek</li>
                                                    <li><img src={companyIcon} className="offer_icon" alt="" />Samba-AnaCom</li>
                                                </ul>

                                            </div>
                                        </Link>
                                        <Link to="/productpage" className="link_to_product">

                                            <div className="offer">
                                                <img src={imgpodnosnik8} alt="" className="offer_img img-fluid" />


                                                <ul className="specification">
                                                    <li><h4>Wynajem Podno??nik??w No??ycowych</h4></li>
                                                    <li className="height"><img src={heightIcon} className="offer_icon" alt="" />9,93 m
                                                        <img src="/img/load.png" className="offer_icon" alt="" />226 kg
                                                        <img src="/img/weight.png" className="offer_icon" alt="" />2232 kg</li>
                                                    <li className="price"><img src={priceIcon} className="offer_icon" alt="" />250 z??</li>
                                                    <li><img src={localizationIcon} className="offer_icon" alt="" />W??oc??awek</li>
                                                    <li><img src={companyIcon} className="offer_icon" alt="" />Samba-AnaCom</li>
                                                </ul>

                                            </div>
                                        </Link>
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
                                            <select name="number" id="number" aria-placeholder="No??ycowe">
                                                <option defaultValue="nozycowe">18</option>
                                                <option defaultValue="nozycowe">36</option>
                                                <option defaultValue="nozycowe">64</option>

                                            </select>
                                        </div>
                                    </div>

                                </Col >
                                <Col lg={3}>
                                    <h4 className="mt-4">Najnowsze Og??oszenia</h4>

                                    <div className="latest_offers">
                                        <Link to="/productpage" className="link_to_product">

                                            <div className="latest_offer">
                                                <img src={imgpodnosnik7} alt="" className="latest_img img-fluid" />
                                                <ul className="latest_specification">
                                                    <li><h4>Wynajm?? Podno??nik GS-1932</h4></li>
                                                    <li><img src={localizationIcon} className="latest_icon" alt="" /> W??oc??awek</li>
                                                    <li><img src={companyIcon} className="latest_icon" alt="" /> Samba-AnaCom</li>
                                                    <li className="price"><img src={priceIcon} className="latest_icon" alt="" /> 250 z??</li>

                                                </ul>
                                            </div>
                                        </Link>
                                        <Link to="/productpage" className="link_to_product">

                                            <div className="latest_offer">
                                                <img src={imgpodnosnik} alt="" className="latest_img img-fluid" />
                                                <ul className="latest_specification">
                                                    <li><h4>Wynajem podno??nik??w No??ycowych</h4></li>
                                                    <li><img src={localizationIcon} className="latest_icon" alt="" /> W??oc??awek</li>
                                                    <li><img src={companyIcon} className="latest_icon" alt="" /> Samba-AnaCom</li>
                                                    <li className="price"><img src={priceIcon} className="latest_icon" alt="" /> 250 z??</li>

                                                </ul>
                                            </div>
                                        </Link>
                                        <Link to="/productpage" className="link_to_product">

                                            <div className="latest_offer">
                                                <img src={imgpodnosnik8} alt="" className="latest_img img-fluid" />
                                                <ul className="latest_specification">
                                                    <li><h4>Wynajme No??yc??wki do 15m</h4></li>
                                                    <li><img src={localizationIcon} className="latest_icon" alt="" /> W??oc??awek</li>
                                                    <li><img src={companyIcon} className="latest_icon" alt="" /> Samba-AnaCom</li>
                                                    <li className="price"><img src={priceIcon} className="latest_icon" alt="" /> 250 z??</li>

                                                </ul>
                                            </div>
                                        </Link>


                                    </div>
                                </Col>
                            </Row>

                            <div className="city_links">
                                <ul className="city_ul">
                                    <li className="city_li">Podno??niki na wynajem mazowieckie (3277)</li>
                                    <li className="city_li">Podno??niki na wynajem dolno??l??skie (1223)</li>
                                    <li className="city_li">Podno??niki na wynajem kujawsko-pomorskie (271)</li>
                                    <li className="city_li">Podno??niki na wynajem podkarpackie (213)</li>
                                    <li className="city_li">Podno??niki na wynajem ??wi??tokrzyskie (151)</li>
                                    <li className="city_li">Podno??niki na wynajem ??l??skie (1572)</li>
                                    <li className="city_li">Podno??niki na wynajem wielkopolskie (985)</li>
                                    <li className="city_li">Podno??niki na wynajem ????dzkie (563)</li>
                                    <li className="city_li">Podno??niki na wynajem lubelskie (255)</li>
                                    <li className="city_li">Podno??niki na wynajem lubuskie (117)</li>
                                    <li className="city_li">Podno??niki na wynajem ma??opolskie (1369)</li>
                                    <li className="city_li">Podno??niki na wynajem pomorskie (917)</li>
                                    <li className="city_li">Podno??niki na wynajem zachodniopomorskie (549)</li>
                                    <li className="city_li">Podno??niki na wynajem podlaskie (162)</li>
                                    <li className="city_li">Podno??niki na wynajem warmi??sko-mazurskie (111)</li>
                                </ul>
                            </div>
                        </Container>

                    </section>
                )
            })}






        </>
    )
}




export default Offers