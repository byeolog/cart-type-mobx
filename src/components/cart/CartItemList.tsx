// import * as React from "react";
import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { inject, observer } from "mobx-react";

import { Divider } from "antd";

interface cartListJSON {
  cartProduct: { id: string; name: string; price: number };
  quantity: number;
  total: number;
}

export interface CartItemListProps {
  items?: cartListJSON[];
  total?: number;
  getCart?: () => void;
  deleteCart?: (id: string) => void;
  putCart?: (id: string, quantity: number) => void;
}

const CartItemList = (props: CartItemListProps) => {
  useEffect(() => {
    if (props.getCart) props.getCart();
  }, []);

  const itemList = props.items!.map(item => (
    <CartItem
      id={item.cartProduct.id}
      name={item.cartProduct.name}
      price={item.cartProduct.price}
      count={item.quantity}
      total={item.total}
      key={item.cartProduct.id}
      deleteCart={props.deleteCart}
      putCart={props.putCart}
    />
  ));

  return (
    <div>
      <div className="cartItem">
        <div className="name header">제품명</div>
        <div className="price header">가격</div>
        <div className="count header">수량</div>
        <div className="count header" />
        <div className="total header">소계</div>
        <div className="return header" />
      </div>
      <Divider />
      {itemList}
      <Divider>총합</Divider>
      <p>{props.total} 원</p>
    </div>
  );
};

export default inject(({ marketStore }) => ({
  items: marketStore.cartItems,
  total: marketStore.total,
  getCart: marketStore.getCart,
  deleteCart: marketStore.deleteCart,
  putCart: marketStore.putCart
}))(observer(CartItemList));
