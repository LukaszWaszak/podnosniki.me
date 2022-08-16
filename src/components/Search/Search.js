import React, { useState } from 'react'
import './Search.css'
import { Container, Row, Col } from 'react-bootstrap'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";

function Search() {

    const [openDate, setOpenDate] = useState(false);

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [showSidebar, setshowSidebar] = useState(false);

    const SideBarShow = () => {

        showSidebar ? setshowSidebar(false) : setshowSidebar(true);

    }


    return (
        <>

            <section id="search" className="search mt-3 d-none d-lg-block">
                <div className="container">
                    <form method="post" encType="text/plain" action="mailto:lwaszak@samba.com.pl">
                        <Row>
                            <Col lg={12} className="searching border-bottom py-4">
                                <div>
                                    <select name="type1" id="type1" className=" select form-control ">
                                        <option defaultValue="podnosniki" >Podnośniki </option>
                                    </select>
                                </div>
                                <div>
                                    <select name="type2" id="type2" className="select search_margin form-control " >
                                        <option defaultValue="nozycowe">Nożycowe</option>
                                        <option defaultValue="przegubowe">Przegubowe</option>
                                        <option defaultValue="koszowe">Koszowe</option>
                                    </select>
                                </div>
                                <div>

                                    <select name="localization" id="localization" className="select search_margin form-control ">
                                        <option defaultValue="wloclawek">Włocławek</option>
                                        <option defaultValue="torun">Toruń</option>
                                    </select>
                                </div>
                                <div>
                                    <span id="reportrange" name="Data" className="select search_margin form-control" onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].startDate, "MM/dd/yyyy")} `}</span>
                                    {openDate && <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="data"
                                    />}</div>
                            </Col>
                            <Col lg={12} className="mt-1 searching border-bottom py-4">
                                <input id="price_min" name="price_min" type="value" defaultValue="" className="input2 form-control" placeholder="Cena minimalna" />
                                <input id="price_max" name="price_max" type="value" defaultValue="" className="input2 form-control search_margin" placeholder="Cena maksymalna" />

                                <input id="height_min" name="height_min" type="value" defaultValue="" className="input2 form-control search_margin left" placeholder="Wysokość robocza od" />
                                <input id="height_max" name="height_max" type="value" defaultValue="" className="input2 form-control search_margin" placeholder="Wysokość robocza do" />

                            </Col>
                        </Row>
                        <div className="search_buttons">
                            <button type="submit" className="btn btn__search">Szukaj</button>
                            <a className="btn btn__clear">Wyczyść Kryteria</a>
                            <a className="btn btn__save">Zapisz Wyszukiwanie</a>
                        </div>
                    </form>
                </div>
            </section >

            <div className={showSidebar ? "side-bar_active" : "side-bar"} >
                <div className="close-btn" onClick={SideBarShow}>
                    <i className="fas fa-times"></i>
                </div>
                <div className="menu container-fluid">
                    <h3 className="mt-4">Wyszukaj Podnośnik</h3>
                    <form method="post" encType="text/plain" action="mailto:lwaszak@samba.com.pl">
                        <Row className="test">
                            <Col lg={12} className="col-lg-12 border-bottom py-5">
                                <div className="type_mobile">
                                    <select name="type1" id="type" className="form-control">
                                        <option value="nozycowe">Podnośniki </option>

                                    </select>
                                    <select name="type2" id="type" className="form-control">
                                        <option value="nozycowe">Nożycowe</option>
                                        <option value="przegubowe">Przegubowe</option>
                                        <option value="koszowe">Koszowe</option>
                                    </select>

                                    <div className="localization_mobile">
                                        <select name="localization" id="localization" className="form-control">
                                            <option value="wloclawek">Włocławek</option>
                                            <option value="torun">Toruń</option>

                                        </select>

                                    </div>
                                    <div>
                                        <span id="reportrange" name="Data" className="form-control" onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].startDate, "MM/dd/yyyy")} `}</span>
                                        {openDate && <DateRange
                                            editableDateInputs={true}
                                            onChange={item => setDate([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            className="data"
                                        />}</div>

                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="inputs_mobile">
                                    <input id="price_min" name="price_min" type="value" defautlvaluevalue="" className="form-control input2" placeholder="Cena minimalna" />
                                    <input id="price_max" name="price_max" type="value" defautlvaluevalue="" className="form-control input2" placeholder="Cena maksymalna" />
                                    <input id="height_min" name="height_min" type="value" defautlvaluevalue="" className="form-control input2" placeholder="Wysokość robocza od" />
                                    <input id="height_max" name="height_max" type="value" defautlvalue="" className="form-control input2" placeholder="Wysokość robocza do" />
                                </div>
                            </Col>
                        </Row>


                        <div className="search_buttons">
                            <button className="btn__clear">Wyczyść Kryteria</button>
                            <button className="btn__save">Zapisz Wyszukiwanie</button>
                        </div>


                        <button type="submit" className="btn__search">Wyszukaj</button>

                    </form>




                </div>

            </div>
            <div className="setfilters_button menu-btn">
                <button className="btn btn_setfilters d-block d-lg-none" onClick={SideBarShow}>Filtruj Wyniki</button>

            </div>
        </>
    )
}

export default Search