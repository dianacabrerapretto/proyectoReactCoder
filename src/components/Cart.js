import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { Button } from "react-bootstrap";
import { BoxCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './Styles';

import styled from "styled-components";

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopText = styled.span`
  margin: 0px 10px;
  color: gray;
`;

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <BoxCart>
            <TitleCart>CARRITO</TitleCart>
            <Top>
                <Link to='/'><Button variant="outline-secondary" size="sm">CONTINUAR COMPRANDO</Button></Link>
                {
                    (test.cartList.length > 0)
                    ? <Button variant="outline-secondary" size="sm" type="filled" onClick={test.removeList}>ELIMINAR TODOS LOS PRODUCTOS</Button>
                    : <TopText>Carrito Vacío</TopText>
                }
            </Top>
            <ContentCart>
                    {
                        test.cartList.length > 0 ? 
                        test.cartList.map(item => 
                        <Product key={item.idItem}>
                        <ProductDetail>
                            <ImageCart src={item.imgItem} />
                            <Details>
                            <span>
                                <b>Producto:</b> {item.nameItem}
                            </span>
                            <Button variant="outline-secondary" size="sm" type="filled" onClick={() => test.deleteItem(item.idItem)}>ELIMINAR</Button>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                            <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>$ {item.costItem} por Unidad</ProductPrice>
                        </PriceDetail>
                        </Product>
                        )
                        : <TitleCart></TitleCart>
                    }
            </ContentCart>
        </BoxCart>
    );
}

export default Cart;