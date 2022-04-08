import ItemCount from "./ItemCount";
import { Col, Container, Card, CardImg, Row } from "react-bootstrap";
import React from "react";
import { CardContent } from "@material-ui/core";

const ItemDetail = ({ item }) => {
    const onAdd = (items) => {
        alert(`${items} items added to cart`);
    }

    return (

        <Container className="mt-3">
            <Row>
                <Col sm={4}>
                    <CardImg src={item.image} alt="" />
                </Col>
                <Col>
                    <Card style={{ width: 'auto' }}>
                        <Card.Header className="text-center" style={{ color: '#997564' }}>{item.category}</Card.Header>
                        <Card.Body>
                            <Card.Text> {item.description}</Card.Text>
                            <Card.Text className="fs-3 fw-bold" style={{ color: 'red' }}>ARS {item.price}</Card.Text>
                            <CardContent className="align-items-right">
                                <Row>
                                    <Col>
                                        <Card.Text className="text-center">Stock disponible {item.stock}</Card.Text>
                                    </Col>
                                    <Col><ItemCount stock={item.stock} initial={1} onAdd={onAdd} /></Col>
                                </Row>
                            </CardContent>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;