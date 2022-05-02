import Item from "./Item";
import { ProductsContainer } from './Styles';

const ItemList = ({items}) => {
    console.log(items);

    return (
        <ProductsContainer>
        {""}
        {items.length > 0
                        ?items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.cost} pictureUrl={item.image} stock={item.stock} />)
                        : <div className="text-center mt-3">Cargando...</div>   }{""}
        </ProductsContainer>
    );
};

export default ItemList;