import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount
} from "./CartIconStyles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer className="shopping-icon" />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapToDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapToDispatchToProps
)(CartIcon);
