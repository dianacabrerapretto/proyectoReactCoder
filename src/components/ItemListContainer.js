import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getProducts } from "../utils/products";


const ItemListContainer = () => {
    const [datos, setProductos] = useState([]);

    const onAdd = (items) => {
        alert(`${items} items added to cart`);
    }

    useEffect(() => {
        async function fetchData() {
            let data = await getProducts();
            setProductos(data);
        }
        fetchData();
    }, []);

    return (
        <ItemList items={datos} initial={1} onAdd={onAdd} />
    );
}

export default ItemListContainer;