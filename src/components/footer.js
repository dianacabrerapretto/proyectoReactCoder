
import { Container, Row, Col, Card} from "react-bootstrap";
import logo from "../assets/logo.png";
import './NavBar.css';

const Footer = () => {
    return (
        <Card.Footer className="container-fluid">
        <Container >
  <Row>
    <Col>
    <Card.Title className="mt-3 text-secondary" >CONTACTO</Card.Title>
    <Card.Text className="mt-4 mb-1 text-secondary" >Teléfono: 48925176</Card.Text>
    <Card.Text  className="mb-1 text-secondary">Email: gallacafe@gmail.com</Card.Text>
    <Card.Text  className="mb-4 text-secondary">Dirección: Avellaneda 914 - Córdoba, Córdoba</Card.Text>
    </Col>
    <Col>
    <Card.Title className="mt-3 text-secondary">INFORMACION</Card.Title>
    <Card.Text className="mt-4 mb-1 text-secondary">Sobre Galla Café</Card.Text>
    <Card.Text className="mb-1 text-secondary">Preguntas Frecuentes</Card.Text>
    <Card.Text className="mb-4 text-secondary">Términos y Condiciones</Card.Text></Col>
    <Col>
    <img src={logo} alt="logo" className ="w-80"/>
    </Col>
  </Row>
</Container>
        </Card.Footer>
    );
  }
  
  export default Footer;