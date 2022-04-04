import { Container, Row } from "react-bootstrap";
import React from "react";
import Item from "./Item";


const ItemList = ({ items }) => {
    return (
        <Container flex>
            <Row>
                {
                    items.length > 0
                        ? items.map(item => <Item key={item.id} id={item.id} category={item.category} title={item.description} cost={item.price} image={item.image[0]} stock={item.stock} />)
                        : <div className="text-center mt-3">Cargando productos...</div>
                }
            </Row>
        </Container>
    );
}

export default ItemList;