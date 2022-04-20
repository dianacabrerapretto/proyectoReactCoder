import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { Add, Remove } from '@material-ui/icons';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    }, []);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Button variant="outline-secondary" size="sm" onClick={decrement}><Add/></Button>
                    <span className="mx-3">{count}</span>
                    <Button variant="outline-secondary" size="sm" onClick={increment}><Remove/></Button>
                    {
                        stock
                            ? <Button className="mx-1" variant="outline-secondary" size="sm" onClick={() => onAdd(count)}>Agregar al Carrito</Button>
                            : <Button variant="outline-secondary"  size="sm" disabled>Agregar al carrito</Button>
                    }
                </Card.Body>
            </Card>

        </div>
    );
}

export default ItemCount;