import React, {Component} from "react";
import ItemCount from "./ItemCount";

const onAdd = (qty) => {
    alert("You have selected " + qty + " items.");
}

class ItemListContainer extends React.Component{
    render(){
        return (
            <div className="table-responsive">
                {this.props.greeting}
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>
        );        
    };  
}

export default ItemListContainer;