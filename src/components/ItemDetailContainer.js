import { useEffect, useState } from "react";
import { getProducts } from "../utils/products";
import ItemList from "./ItemList";

const ItemDetailContainer = () => {
    const [datos, setProductos] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            let data = await getProducts();
            setProductos(data);
            }
        fetchData();
        }, []);

        return (               
            <ItemList items={datos} />           
        );          
}

export default ItemDetailContainer;