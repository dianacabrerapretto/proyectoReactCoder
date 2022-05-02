import ItemCount from './ItemCount';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { Button } from "react-bootstrap";
import { MainContainer, BoxDetail, ImageBox, ImageDetail, DetailContainer, Title, Desc, Price } from './Styles';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert(qty + " items agregados al carrito");
        setItemCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
            {item && item.image
                    ?
                    <MainContainer>
                        <BoxDetail>
                            <ImageBox>
                                <ImageDetail src={item.image} />
                            </ImageBox>
                            <DetailContainer>
                                <Title>{item.name}</Title>
                                <Desc>{item.description}</Desc>
                                <Price>$ {item.cost}</Price>
                                <Desc>{item.stock} unidades en stock</Desc>
                            </DetailContainer>
                            {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="outline-success">CheckOut</Button></Link>
                    }
                        </BoxDetail>
                    </MainContainer>
                    : <p>Cargando...</p>
            }
        </>
    );
}

export default ItemDetail;