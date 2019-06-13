import * as React from "react";
import MarketTemplate from "./MarketTemplate";
import ShopItemList from "../shop/ShopItemList";
import CartItemList from "../cart/CartItemList";

export default class Shop extends React.Component<{}, {}> {
  public render() {
    return (
      <MarketTemplate items={<ShopItemList />} basket={<CartItemList />} />
    );
  }
}
