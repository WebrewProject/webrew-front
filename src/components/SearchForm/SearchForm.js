import { useForm } from "react-hook-form";
import { Form, Col, Row, Button } from "react-bootstrap";

const SearchForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="py-0">
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col className="p-0">
                <Form.Control placeholder="Recherche" {...register("exampleRequired", { required: true })}  className="py-3 w-100"/>
                </Col>
                <Col className="p-0">
                <Form.Control placeholder="Ville" {...register("example")}  className="py-3 w-100"/>
                </Col>
                <Col className="p-0">
                <Button variant="primary" type="submit" className="py-3 w-75">
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