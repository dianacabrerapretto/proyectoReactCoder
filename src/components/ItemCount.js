import { Button } from "react-bootstrap";
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from "react";

export default function ItemCount ({stock, initial, onAdd}) { 
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        setCount(initial);
    }, []);

    const remove = () => {
        if(count > initial){
            setCount(count - 1);
        }
    }
  
    const add = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }
  
    return (
        <div className="d-grid gap-2">
            <div className="mx-4 text-center">
            <Button variant="outline-primary"  size="sm" onClick={remove}><Remove /></Button>
                <span className="mx-5">{count}</span>
            <Button variant="outline-primary"  size="sm" onClick={add}><Add /></Button>
            </div>                        
            <div className="d-grid gap-2 mt-2">
                {
                    stock
                    ?<Button variant="outline-primary"  onClick={() => onAdd(count)}>Agregar al carrito</Button>
                    :<Button variant="outline-danger" disabled>Sin Stock</Button>
                }                         
            </div>
        </div>
    );    
}