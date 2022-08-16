import React from 'react'
import './SignUp.css'
import { Container, Row, Col } from 'react-bootstrap'

const SignUp = () => {
    return (
        <div>
            <section>

                <Container>
                    <div className="add_product">
                        <h2>Informacje Podstawowe</h2>
                        <form method="post" encType="text/plain" action="mailto:lwaszak@samba.com.pl">
                            <Row>
                                <Col lg={3}>
                                    <h6>Adres e-mail</h6>
                                    <input name="email_rejestracja" id="email_signup" defaultValue="" className="form-control" type="text" placeholder="Wpisz e-mail" />
                                </Col>
                                <Col lg={3}>
                                    <h6>Hasło</h6>
                                    <input name="haslo_rejestracja" id="password_signup" defaultValue="" className="form-control" type="text" placeholder="Wpisz hasło" />
                                </Col>
                                <Col lg={3}>
                                    <h6>Potwierdź hasło</h6>
                                    <input name="powtorzhaslo_rejestracja" id="repeatPassword_signup" defaultValue="" className="form-control" type="text" placeholder="Powtórz hasło" />
                                </Col>
                                <Col lg={3}>
                                    <h6>Nazwa firmy</h6>
                                    <input name="nazwafirmy_rejestracja" id="companyName_signup" defaultValue="" className="form-control" type="text" placeholder="Wpisz nazwę firmy" />
                                </Col>

                                <Col lg={12} className="set_localization">
                                    <h2>Adres ogólny</h2>
                                    <h6>Ulica </h6>
                                    <input name="ulica_rejestracja" id="street_signup" defaultValue="" className="form-control" type="text" placeholder="Wpisz ulicę i nr domu" />
                                    <h6>Nr Domu</h6>
                                    <input name="nrdom_rejestracja" id="nrdom_signup" defaultValue="" className="form-control" type="text" placeholder="Wpisz ulicę i nr domu" />
                                    <h6>Kod pocztowy</h6>
                                    <input name="kodpocztowy_rejestracja" id="postcode_signup" defaultValue="" className="form-control" type="text" placeholder="Wpisz kod pocztowy" pattern="[0-9]{2}[-][0-9]{3}" />
                                    <h6>Miejscowość </h6>
                                    <input name="miejscowosc_rejestracja" id="city_signup" defaultValue="" className="form-control" type="text" placeholder="Wpisz miejscowość" />

                                </Col>
                            </Row>
                            <Row>

                                <Col lg={12} className="set_information">
                                    <h2>Dane do faktury</h2>
                                    <Row>

                                        <Col lg={6}>
                                            <h6>Nazwa firmy</h6>
                                            <input name="nazwafirmy_rejestracja2" id="comapanyName_signup2" defaultValue="" className="form-control" type="text" placeholder="Wpisz nazwę firmy" />
                                        </Col>
                                        <Col lg={6}>
                                            <h6>NIP</h6>
                                            <input name="nip_rejestracja" id="nip_signup" defaultValue="" className="form-control" type="text" placeholder="Wpisz numer NIP" />
                                        </Col>
                                        <Col lg={6}>
                                            <h6>REGON</h6>
                                            <input name="regon_rejestracja" id="regon_signup" defaultValue="" className="form-control" type="text" placeholder="Wpisz REGON" />
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Ulica i numer domu</h6>
                                            <input name="ulica_rejestracja2" id="street_signup2" defaultValue="" className="form-control" type="text" placeholder="Wpisz ulicę i numer domu" />
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Numer domu</h6>
                                            <input name="nrdom_rejestracja2" id="nrdom_signup2" defaultValue="" className="form-control" type="text" placeholder="Wpisz ulicę i numer domu" />
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Kod pocztowy</h6>
                                            <input name="kodpocztowy_rejestracja2" id="postcode_signup2" defaultValue="" className="form-control" type="text" placeholder="Wpisz kod pocztowy" />
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Miejscowość</h6>
                                            <input name="miejscowosc_rejestracja2" id="city_signup2" defaultValue="" className="form-control" type="text" placeholder="Wpisz miejscowość" />
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>

                            <Row>

                                <Col lg={12} className="set_contact mb-5">
                                    <h2>Dane Kontaktowe</h2>
                                    <Row>
                                        <Col lg={4}>
                                            <h6>Imię i Nazwisko</h6>
                                            <input name="imienazwisko_rejestracja" id="name-surname_signup" defaultValue="" className="form-control" type="text" placeholder="Wpisz Imię i Nazwisko" />
                                        </Col>
                                        <Col lg={4}>
                                            <h6>Telefon</h6>
                                            <input name="tel_rejestracja" id="tel_signup" defaultValue="" className="form-control" type="tel" placeholder="Wpisz numer telefonu" />
                                        </Col>
                                        <Col lg={4}>
                                            <h6>E-mail</h6>
                                            <input name="email_rejestracja2" id="email_signup2" defaultValue="" className="form-control" type="email" placeholder="Wpisz e-mail" />
                                        </Col>
                                        <h6>Dodatkowe uwagi dla obsługi serwisu Podnosniki.me</h6>
                                        <div className="textarea"><textarea name="uwagi_signup" id="remarks_signup" defaultValue="" className="description form-control" cols="30" rows="10"></textarea></div>
                                    </Row>
                                </Col>
                            </Row>
                            <div className="agreement">
                                <h2 className="pb-3 mt-5">Regulamin i powiadomienia</h2>
                                <p className="accept_regulations">Klikając przycisk Zarejestruj się, akceptuję Regulamin.</p>
                                <p>Przyjmuję do wiadomości, że Podnosniki.me wykorzystuje moje dane osobowe zgodnie z Polityką prywatności oraz Polityką dotyczącą plików cookie i podobnych technologii. Podnosniki.me wykorzystuje zautomatyzowane systemy i partnerów do analizowania, w jaki sposób korzystam z usług w celu zapewnienia odpowiedniej funkcjonalności produktu, treści, dostosowanych i opartych na zainteresowaniach reklam, jak również ochrony przed spamem, złośliwym oprogramowaniem i nieuprawnionym korzystaniem z naszych usług.</p>
                                <input type="checkbox" name="zgoda_ogloszenie" id="agree_advertisement" defaultValue="" className="accept_check" defaultChecked /> Wyrażam zgodę na używanie przez Podnosniki.me środków komunikacji elektronicznej oraz telekomunikacyjnych urządzeń końcowych w celu przesyłania mi informacji handlowych oraz prowadzenia marketingu (np. newsletter, wiadomości SMS) przez Podnosniki.me podmioty powiązane i partnerów biznesowych.
                                <p>Pamiętaj że akceptacja Ogólnych Warunków Świadczenia Usług jest równoznaczna z zawarciem umowy.

                                </p>
                            </div>

                            <div className="add_button">
                                <button type="submit" className="btn btn__map">Zarejestruj się</button>
                            </div>
                        </form>
                    </div>
                </Container >
            </section >

        </div >
    )
}

export default SignUp