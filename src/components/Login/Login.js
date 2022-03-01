import React from "react";
import { Container, Row, Col, Form , Button} from "react-bootstrap";
import LoginCarousel from "./Carousel";
import { useForm, Controller } from "react-hook-form";
import "./Login.scss"


export default function Login(){
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const [token, setToken] = React.useState('');
const axios = require('axios');
const onSubmit = data => {
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
axios.post('http://localhost:8081/login', {
email: data.email,
password: data.password
})
.then(function (response) {
localStorage.setItem('token', response.data.token);
setToken(response.data.token);
document.location.href="/";
})
.catch(function (error) {
console.log(error);
});
};
return (
<>
    <Container fluid>
        <Row>
            <Col md={6}  className="form-login">
                <div className="text-center pb-4 mt-5">
                    <h2 className="text-center text-light">Webrew!</h2>
                    <a href="/login" className="login-item">Connexion</a>
                    <a href="/register" className="register-item ms-3">Inscription</a>
                </div>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}  className="login-form">
                    <Form onSubmit={handleSubmit(onSubmit)} className="pt-2">
                        <h5 className="text-center py-3">connectez-vous</h5>
                        <Form.Group className="mb-3">
                            <Container>
                                <Form.Control {...register("email", { required: true })} type="email"
                                    placeholder="Entrez votre adresse email" className="py-4" />
                                {errors.exampleRequired && <span>This field is required</span>}

                                <Form.Control {...register("password")} type="password"
                                    placeholder="Entrez votre mot de passe" className="py-4 mb-3" />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </Container>

                            <Row className="ps-1">
                                <Col>
                                <Form.Group className="mb-3 ps-3" controlId="formBasicCheckbox">
                                    <Form.Check {...register("check", { required: false })} type="checkbox"
                                        label="se souvenir de moi" />
                                </Form.Group>
                                </Col>
                                <Col>
                                <a href="/passwordReset" className="ps-5">mot de passe oublié ?</a>
                                </Col>
                            </Row>
                            <Container>
                                <div className="d-grid gap-2 py-3">
                                    <Button variant="primary" type="submit" size="lg">
                                        Connexion
                                    </Button>
                                </div>
                                <hr />
                                <div className="d-grid gap-2 py-3">
                                    <Button variant="light" size="lg">
                                        <a href="register" className="register">première fois ici : créer un compte</a>
                                    </Button>
                                </div>
                            </Container>
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
            </Col>

            <Col  md={6} className="p-0">
                <Row>
                    <Col>
                        <LoginCarousel></LoginCarousel>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
</>
)
}