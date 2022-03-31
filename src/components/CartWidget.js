import React, {Component} from "react";
import {Badge} from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

class CartWidget extends React.Component{
    render(){
        return (
            <Badge badgeContent={5} color="primary">
                <ShoppingCartOutlined style={{color : "#997564"}}/>
            </Badge>
        );
    }
}

export default CartWidget;