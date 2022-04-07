import { Col, Card, CardImg } from "react-bootstrap";
import ItemCount from "./ItemCount";

export default function Item({ id, category, title, stock, cost, image }) {

    const onAdd = (items) => {
        alert(`${items} items agregados al carrito`);
    }

    return (
        <Col className="mt-3">
            <Card style={{ width: '18rem' }} key={id} >
                <Card.Img variant="top" src={image} alt="Card image cap" />
                <Card.Body>
                    <Card.Title className="text-center font-weight-bolder" style={{ color: '#997564' }}>{category}</Card.Title>
                    <Card.Subtitle className="text-center my-4" style={{ color: 'gray' }}>{title}</Card.Subtitle>
                    <Card.Text className="text-center my-4" style={{ color: 'black' }}>ARS {cost}</Card.Text>
                    <ItemCount stock={stock=10} initial={1} onAdd={onAdd}/>
                    <Card.Text className="text-center mt-2">Stock: {stock}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}