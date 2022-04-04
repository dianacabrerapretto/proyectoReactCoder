import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Add, Remove } from '@material-ui/icons'

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[initial]);

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
            <div className="d-grid gap-2">
                <div className="mx-4 text-center">
                <Button variant="outline-primary"  onClick={decrement}>-</Button>
                    <span className="mx-5">{initial}</span>
                <Button variant="outline-primary" onClick={increment}>+</Button>
                </div>                        
                <div className="d-grid gap-2">
                    {
                        stock
                        ?<Button variant="outline-primary" size="lg" onClick={() => onAdd(count)}>Agregar al carrito</Button>
                        : <Button variant="outline-primary" disabled>Sin Stock</Button>
                    }                         
                </div>
            </div>
        );    
}

export default ItemCount;