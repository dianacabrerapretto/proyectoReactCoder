import { Col, Card, CardImg } from "react-bootstrap";
import ItemCount from "./ItemCount";

export default function Item({ id, category, title, stock, cost, image }) {

    return (
        <Col className="mt-3">
            <Card style={{ width: '18rem' }} key={id} >
                <Card.Img variant="top" src={image} alt="Card image cap" />
                <Card.Body>
                    <Card.Title className="text-center font-weight-bolder" style={{ color: '#997564' }}>{category}</Card.Title>
                    <Card.Subtitle className="text-center my-4" style={{ color: 'gray' }}>{title}</Card.Subtitle>
                    <Card.Text className="text-center my-4" style={{ color: 'black' }}>ARS {cost}</Card.Text>
                    <ItemCount />
                </Card.Body>
            </Card>
        </Col>
    );
}