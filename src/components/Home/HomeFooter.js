import { Container, Col, Row } from "react-bootstrap";
import SearchForm from "../SearchForm/SearchForm";

const HomeFooter = () => {
    return (
        <>
         <Container fluid className="mt-5 pb-5" style={{backgroundColor: "#DCEFFD"}}>
            <Row>
            <Col md={{ span: 6, offset: 3 }}>
            <h3 className="text-center mt-5 mb-5">Trouve ton contrat et postule <br />rapidement avec Webrew</h3>
            <SearchForm></SearchForm>
         </Col>
            </Row>
        </Container>
        </>
    )
}

export default HomeFooter;