
import React from "react";
import { Container, Row, Col, Form , Button} from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import "./Register.scss"

export default function Register(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const axios = require('axios');
    const onSubmit = data => {
        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        axios.post('http://localhost:8081/register', {
            firstname: data.firstname,
            lastname: data.lastname,
            phone: data.phone,
            birthday: data.birthday,
            email: data.email,
            password: data.password,
            passwordConfirme: data.passwordConfirme
          })
          .then(function (response) {
            document.location.href="/login"; 
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    return (
        <>
            <Container className="mt-5">
                
                <Row>
                <Col md={{ span: 6, offset: 3 }} className="login-form">
                <Form onSubmit={handleSubmit(onSubmit)} className="pt-2">
                <h2 className="text-center">Webrew!</h2>
                <h5 className="text-center py-3">PAGE D'INSCRIPTION</h5>

                <Form.Group className="mb-3">
                   <Container>
                       <Row>
                           <Col>
                                <Form.Control {...register("firstname", { required: true })} type="text" placeholder="Entrez votre prénom" className="py-4" />
                                {errors.exampleRequired && <span>This field is required</span>}
                           </Col>
                           <Col>
                                <Form.Control {...register("lastname", { required: true })} type="text" placeholder="Entrez votre nom" className="py-4" />
                                {errors.exampleRequired && <span>This field is required</span>}
                           </Col>
                       </Row>
                       <Row>
                            <Col>
                                <Form.Control {...register("phone", { required: true })} type="text" placeholder="Entrez votre numéro de téléphone" className="py-4" />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </Col>
                            <Col>
                                <Form.Control {...register("birthday", { required: true })} type="date" className="py-4" />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </Col>
                       </Row>
                      
                   <Row>
                       <Col>
                            <Form.Control {...register("email", { required: true })} type="email" placeholder="Entrez votre adresse email" className="py-4" />
                            {errors.exampleRequired && <span>This field is required</span>}
                       </Col>
                   </Row>
                    <Row>
                        <Col>
                            <Form.Control {...register("password")} type="password" placeholder="Entrez un mot de passe" className="py-4 mb-3"/>
                            {errors.exampleRequired && <span>This field is required</span>}
                        </Col>
                        <Col>
                            <Form.Control {...register("passwordConfirm")} type="password" placeholder="Confirmez votre mot de passe" className="py-4 mb-3"/>
                            {errors.exampleRequired && <span>This field is required</span>}
                        </Col>
                    </Row>
                   </Container>
                    <Container>
                    <div className="d-grid gap-2 py-3">
                        <Button variant="primary" type="submit" size="lg">
                        Inscription
                        </Button>
                    </div>
                    <hr />
                    <div className="d-grid gap-2 py-3">
                        <Button variant="light"  size="lg">
                        <a href="login" className="register">Dèja un compte ? Connexion</a>
                        </Button>
                    </div>
                    </Container>
                    </Form.Group>
                </Form>
                </Col>
                </Row>
            </Container>
        </>
    )
}