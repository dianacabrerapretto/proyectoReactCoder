import ItemCount from './ItemCount';
import CheckOut from "./CartCheckout";
import { MainContainer, BoxDetail, ImageBox, ImageDetail, DetailContainer, Title, Desc, Price } from './Styles';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert(qty + " items agregados al carrito");
    }

    return (
        <>
            {
                item && item.image
                    ?
                    <MainContainer>
                        <BoxDetail>
                            <ImageBox>
                                <ImageDetail src={item.image[0]} />
                            </ImageBox>
                            <DetailContainer>
                                <Title>{item.name}</Title>
                                <Desc>{item.description}</Desc>
                                <Price>$ {item.cost}</Price>
                                <Desc>{item.stock} unidades en stock</Desc>
                            </DetailContainer>
                            {   ItemCount === 0
                                        ?<ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
                                        :<CheckOut />
                                    }
                        </BoxDetail>
                    </MainContainer>
                    : <p>Cargando...</p>
            }
        </>
    );
}

export default ItemDetail;