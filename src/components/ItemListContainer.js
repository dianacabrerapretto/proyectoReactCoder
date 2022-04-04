import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getProducts } from "../utils/products";

//Componente que contiene a los artículos
const ItemListContainer = () => {
    const [datos, setProductos] = useState([]);

    //Mostramos una alerta al agregar los items
    const onAdd = (items) => {
        alert(`${items} items added to cart`);
    }
    
    useEffect(() => {
        //Obtenemos los productos con una promesa
        async function fetchData() {
            let data = await getProducts();
            setProductos(data);
            }
        fetchData();
        }, []);

        return (               
            <ItemList items={datos} initial={1} onAdd={onAdd}/>           
        );          
}

//Exportamos el componente
export default ItemListContainer;