import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ShoppingCartOutlined } from "@material-ui/icons";

const CheckOut = () => {
    return (
        <Link to='/cart' style={{textDecoration: "none"}}><Button variant="primary" size="lg">CheckOut <ShoppingCartOutlined style={{color : "white"}}/></Button></Link>
  );
}

export default CheckOut;