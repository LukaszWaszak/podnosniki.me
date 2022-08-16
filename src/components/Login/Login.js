import React from 'react'
import './Login.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <section className="login" id="login">
                <Container>
                    <Row>
                        <Col lg={8} className="login_center">
                            <h2 className="text-center mt-5">Zaloguj się</h2>
                            <form method="post" encType="text/plain" action="mailto:lwaszak@samba.com.pl">
                                <input name="nazwa_uzytkownika" defaultValue="" className="form-control" type="text" placeholder="Nazwa użytkownika" />
                                <input name="email" defaultValue="" className="form-control" type="email" placeholder="Email" />
                                <input name="password" defaultValue="" className="form-control" type="password" placeholder="Wpisz hasło" />
                                <a href="" className="forget_password">Nie pamiętam hasła</a>
                                <button type="submit" href="" className="btn btn__login mb-5">Zaloguj się </button>
                            </form>

                        </Col>
                        <Col lg={4} className="login_center">
                            <div className="p_signup ">
                                <p>Nie masz konta w Podnosniki.me?</p>
                                <Link to="/userSignup" className="btn btn__login mb-5">Załóż konto! </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Login