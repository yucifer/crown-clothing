import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import "./collection-item.styles.scss";

import {addItem} from "../../redux/cart/cart.action";
import {connect} from "react-redux";


function CollectionItem({item, addItem}) {
    const {name,price,imageUrl} = item;
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}> ADD TO CART </CustomButton>
        </div>
    )
}

const mapToDispatchProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}

export default connect(null, mapToDispatchProps)(CollectionItem);
