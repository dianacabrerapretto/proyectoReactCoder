import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';
import React from "react";
import { CardContent } from "@material-ui/core";


const ItemDetail = ({ item }) => {
    const onAdd = (item) => {
        alert(`${item} items agregados al carrito`);
    }


    return (
        <CardGroup>
            <Card>
                <Card.Img src={item.image} alt="" />
            </Card>
            <Card className="text-center" style={{ width: 'auto' }}>
                <Card.Text className="fw-bold" style={{ color: '#997564' }}>{item.category}</Card.Text>
                <Card.Text > {item.description}</Card.Text>
                <Card.Text className="fw-bold" style={{ color: 'gray' }}>ARS {item.price}</Card.Text>
                <Card.Text >Stock disponible: {item.stock}</Card.Text>
                <CardContent>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </CardContent>
            </Card>
        </CardGroup>

    );
}


export default ItemDetail;