import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const CartWidget = () => {
    return (
        <Badge badgeContent={5} color="primary">
            <ShoppingCartOutlined style={{ color: "#997564" }} />
        </Badge>
    );
}

export default CartWidget;