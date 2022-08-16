import React from 'react'
import './Advertisement.css'
import Navbar from '../navbar/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import plusIcon from '../../images/plus.png'

const Advertisement = () => {
    return (
        <>
            <Navbar />

            <section>
                <Container>
                    <div className="add_product">
                        <h2>Informacje Podstawowe</h2>

                        <form>
                            <Row>

                                <Col lg={12} className="set_title">
                                    <h6>Tytuł Ogłoszenia</h6>
                                    <input className="form-control" type="text" placeholder="Wpisz tytuł ogłoszenia" />
                                </Col>

                                <Col lg={4}>
                                    <h6>Cena</h6>
                                    <input className="form-control" type="text" placeholder="Wpisz cenę" />
                                </Col>
                                <Col lg={4}>
                                    <h6>Marka</h6>
                                    <input className="form-control" type="text" placeholder="Wpisz markę" />
                                </Col>
                                <Col lg={4}>
                                    <h6>Model</h6>
                                    <input className="form-control" type="text" placeholder="Wpisz model" />
                                </Col>
                                <Col lg={4}>
                                    <h6>Wysokość Robocza</h6>
                                    <input className="form-control" type="text" placeholder="Wpisz wysokość roboczą" />
                                </Col>
                                <Col lg={4}>                                    <h6>Maksymalne obciążenie</h6>
                                    <input className="form-control" type="text" placeholder="Wpisz maksymalne obciążenie" />
                                </Col>
                                <Col lg={4}>                                    <h6>Waga</h6>
                                    <input className="form-control" type="text" placeholder="Wpisz wagę" />
                                </Col>
                                <h2>Dodaj zdjęcia</h2>
                                <p >Dodaj przynajmniej jedno zdjęcie, gdyż w przeciwnym razie Twoje ogłoszenie będzie wyświetlane pod koniec listy ogłoszeń..

                                </p>
                                <Col lg={5} className="add_img">
                                    <button className="addImg"><img src={plusIcon} className="icon_plus" alt="" /></button>
                                    <button className="addImg"><img src={plusIcon} className="icon_plus" alt="" /></button>
                                    <button className="addImg"><img src={plusIcon} className="icon_plus" alt="" /></button>
                                    <button className="addImg"><img src={plusIcon} className="icon_plus" alt="" /></button>
                                    <button className="addImg"><img src={plusIcon} className="icon_plus" alt="" /></button>
                                    <button className="addImg"><img src={plusIcon} className="icon_plus" alt="" /></button>
                                    <button className="addImg"><img src={plusIcon} className="icon_plus" alt="" /></button>
                                    <button className="addImg"><img src={plusIcon} className="icon_plus" alt="" /></button>
                                    <button className="addImg"><img src={plusIcon} className="icon_plus" alt="" /></button>
                                    <button className="addImg"><img src={plusIcon} className="icon_plus" alt="" /></button>
                                    <button className="addImg"><img src={plusIcon} className="icon_plus" alt="" /></button>
                                    <button className="addImg"><img src={plusIcon} className="icon_plus" alt="" /></button>

                                </Col>
                                <Col lg={7} className="about_img">
                                    <p>Możesz dodać do 20 zdjęć o wymiarach minimum 800x600 pikseli i wadze pliku nie większej niż 5MB, w formacie JPG, JPEG lub PNG
                                        Aby dodać wiele zdjęć na raz, zaznaczaj je trzymając klawisz Ctrl na klawiaturze.
                                        Pierwsza fotografia będzie wyświetlana jako główne zdjęcie nieruchomości.
                                        Możesz zmienić kolejność zdjęć, przesuwając miniaturki z wciśniętym przyciskiem myszki.
                                        Idealne wymiary zdjęć wynoszą 830x500 pixeli.</p>
                                </Col>

                                <Col lg={12} className="set_localization">
                                    <h2>Lokalizacja</h2>
                                    <h6>Miejscowość</h6>
                                    <input className="form-control" type="text" placeholder="Wpisz miejscowość" />
                                    <h6>Dzielnica</h6>
                                    <input className="form-control" type="text" placeholder="Wpisz dzielnicę" />
                                    <h6>Ulica</h6>
                                    <input className="form-control" type="text" placeholder="Wpisz ulicę" />
                                </Col>
                                <Col lg={12} className="set_information mb-5">
                                    <h2>Szczegółowe Informacje</h2>
                                    <h6>Opis</h6>
                                    <textarea name="description" id="" className="description form-control" cols="30" rows="10"></textarea>
                                    <div className="row">
                                        <Col lg={6}>
                                            <h6>Szerokość</h6>
                                            <input className="form-control" type="text" placeholder="Wpisz szerokość" />
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Wysokość</h6>
                                            <input className="form-control" type="text" placeholder="Wpisz wysokość" />
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Długość</h6>
                                            <input className="form-control" type="text" placeholder="Wpisz długość" />
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Rodzaj napędu</h6>
                                            <input className="form-control" type="text" placeholder="Wpisz rodzaj napędu" />
                                        </Col>
                                    </div>
                                </Col>
                            </Row>

                            <Row>

                                <h2>Dane Kontaktowe</h2>
                                <Col lg={4}>
                                    <h6>Imię i Nazwisko</h6>
                                    <input className="form-control" type="text" placeholder="Wpisz imię i nazwisko" />
                                </Col>
                                <Col lg={4}>
                                    <h6>Telefon</h6>
                                    <input className="form-control" type="tel" placeholder="Wpisz numer telefonu" />
                                </Col>
                                <Col lg={4}>
                                    <h6>E-mail</h6>
                                    <input className="form-control" type="email" placeholder="Wpisz e-mail" />
                                </Col>
                            </Row>
                            <div className="agreement">
                                <p className="accept_regulations">Dodając ogłoszenie ackeptuję Regulamin serwisu Podnosniki.me Przyjmuję do wiadomości, że Podnosniki.me wykorzystuje moje dane osobowe zgodnie z Polityką prywatności oraz Polityką dotyczącą plików cookie i podobnych technologii. Podnosniki.me wykorzystuje zautomatyzowane systemy i partnerów do analizowania, w jaki sposób korzystam z usług w celu zapewnienia odpowiedniej funkcjonalności produktu, treści, dostosowanych i opartych na zainteresowaniach reklam, jak również ochrony przed spamem, złośliwym oprogramowaniem i nieuprawnionym korzystaniem z naszych usług.</p>
                                <input type="checkbox" name="" id="" className="accept_check" defaultChecked /> Wyrażam zgodę na używanie przez Podnosniki.me środków komunikacji elektronicznej oraz telekomunikacyjnych urządzeń końcowych w celu przesyłania mi informacji handlowych oraz prowadzenia marketingu (np. newsletter, wiadomości SMS) przez Podnosniki.me podmioty powiązane i partnerów biznesowych.
                            </div>
                        </form>

                        <div className="add_button"><a href="" className="btn btn__map">Wstaw Ogłoszenie</a></div>

                    </div>
                </Container>
            </section>


        </>
    )
}

export default Advertisement