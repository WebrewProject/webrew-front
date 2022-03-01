
import React, { useState } from "react";
import { Container, Row, Col, Form , Button} from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import "./Register.scss"

let firstStep = 0;

const AcountType = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(
            data
        )
    }

    return (
    <>
       <Container className="mt-5">
       <h5 className="text-center">Quelle est votre situation ?</h5>
        <Container>
        <Form onSubmit={handleSubmit(onSubmit)} className="pt-2">
            <Row>
                <Col>
                    <div className="entreprise text-center">
                        <img src="#" alt="logo recruteur" />
                        <h6>je souhaite recruter</h6>
                        <Form.Check  type="radio" aria-label="accountType" name="accountType"  id="entreprise" {...register("accountType")}/>
                        <Form.Check  type="radio" aria-label="accountType" name="accountType"  id="entreprise1" {...register("accountType")}/>
                    </div>
                </Col>
                <Col>
                    <div className="particulier text-center">
                        <img src="#" alt="logo recruteur" />
                        <h6>je souhaite recruter</h6>
                        <Form.Check  type="radio" aria-label="accountType"  name="accountType" id="particulier"  {...register("accounType")} defaultChecked/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 6, offset:4}}>
                    <Button variant="primary" type="submit" size="lg">
                        Poursuivre
                    </Button>
                </Col>
            </Row>
            </Form>
        </Container>
       </Container>
    </>
    )
}


const RegisterForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {accountType, setAccountType} = useState({});
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
                           {
                               useState.accountType == "particulier" ? 
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
                           :
                            <Row>
                                <Col>
                                <Col>
                                    <Form.Control {...register("denomination", { required: true })} type="text" placeholder="Entrez votre dénomination" className="py-4" />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    </Col>
                                </Col>
                            </Row>
                           }
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


export default function Register(){
    
    return (
        <>
        <Container fluid className="g-0">
            <Row>
                <Col md={{ span: 3, offset: 6 }}>
                    <h2>Webrew!</h2>
                </Col>
            </Row>
            <div className="choiceBar">
                <Row>
                
                        <Col md={{ span: 3, offset: 3 }}  className="mt-2">
                            <a href="/login" className="login-item">Connexion</a>
                        </Col>
                        <Col md={{ span: 3, offset: 3 }} className="mt-2">
                            <a href="/register" className="register-item">Inscription</a>
                        </Col>
                
                </Row>
            </div>
            
        { firstStep != 1 ?
            <AcountType></AcountType>  
            :  
            <RegisterForm></RegisterForm>
        }
        </Container>
        </>
    )
}