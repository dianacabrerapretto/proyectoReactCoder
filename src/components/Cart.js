import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { Button } from "react-bootstrap";
import { BoxCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './Styles';

import styled from "styled-components";
import FormatNumber from "../utils/FormatNumber";

import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';

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

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  font-size: 30px;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;


const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
        const itemsForDB = test.cartList.map(item => ({
          id: item.idItem,
          title: item.nameItem,
          price: item.costItem
        }));
    
        test.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.idItem);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem)
          });
        });
    
        let order = {
          buyer: {
            name: "Juan Perez",
            email: "juanperez@gmail.com",
            phone: "3547892467"
          },
          total: test.calcTotal(),
          items: itemsForDB,
          date: serverTimestamp()
        };
      
        console.log(order);

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
          }
        
          createOrderInFirestore()
            .then(result => alert('Hemos recibido tu compra. Por favor conserva el código de orden\n\n\nOrden: ' + result.id + '\n\n'))
            .catch(err => console.log(err));
        
          test.removeList();
        
        }

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
                        test.cartList.length > 0 &&
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
                            /
                            <ProductAmount>$ {item.costItem} por Unidad</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>$ {test.calcTotalPerItem(item.idItem)} </ProductPrice>
                        </PriceDetail>
                        </Product>
                        )
                    }
                    {
                    test.cartList.length > 0 &&
                        <Summary>
                            <SummaryTitle>DETALLE DEL PEDIDO</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Impuestos</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Descuentos</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={-test.calcPromo()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <Button variant="secondary" size="lg" onClick={createOrder}>CONFIRMAR COMPRA</Button>
                        </Summary>
                }
            </ContentCart>
        </BoxCart>
    );
}

export default Cart;