import React from "react";
import {connect} from 'react-redux';

import './checkout-item.styles.scss';
import {clearItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem, clearItem}) => {
    const {name, quantity, price, imageUrl} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt='item' src={imageUrl}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow">&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</span>
        </div>)
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
