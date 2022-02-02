import { useForm } from "react-hook-form";
import { Form, Col, Row, Button } from "react-bootstrap";

import './SearchForm.scss'

const SearchForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="py-0">
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col md="5" className="p-0">
                <Form.Control placeholder="Recherche ...." {...register("exampleRequired", { required: true })}  className="py-3 w-100"/>
                </Col>
                <Col md="5" className="p-0">
                <Form.Control placeholder="Ville ..." {...register("example")}  className="py-3 w-100 city"/>
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