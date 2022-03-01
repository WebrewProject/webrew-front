import { useForm } from "react-hook-form";
import { Form, Col, Row, Button } from "react-bootstrap";

import './SearchForm.scss'
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";

const SearchForm = () => {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [cities, setCities] = useState()
    const cityInput = useRef(null)

    const handleChange = e => {
        axios.get(`https://geo.api.gouv.fr/communes?nom=${e.target.value}&fields=departement&boost=population&limit=5`)
            .then(response => {
                if (response.data.length) {
                    setCities(response.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => { })
    }

    const handleClick = (city) => {
        setValue('city', `${city.nom} - ${city.code}`)
        setCities([])
    }

    return (
        <>
            <div className="py-0">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md="5" className="p-0">
                            <Form.Control placeholder="Recherche ...." {...register("search", { required: true })} className="py-3 w-100" />
                        </Col>
                        <Col md="5" className="p-0 form__city">
                            <Form.Control ref={cityInput} onInput={handleChange} placeholder="Ville ..." {...register("city")} className="py-3 w-100 city" />
                            {
                                cities && 
                                <div className="form__city--cities">
                                {cities.map((c, index) => (
                                        <div key={index} className="item" onClick={() => handleClick(c)}>
                                            {c.nom} - {c.code}
                                        </div>
                                    )
                                )}
                                </div>
                            }
                        </Col>
                        <Col md="2" className="p-0">
                            <Button variant="primary" type="submit" className="py-3">
                                Chercher
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default SearchForm;