import * as React from "react";
import ShopItem from "./ShopItem";
import { inject, observer } from "mobx-react";

import MOCK_DATA from "../../MOCK_DATA.json";

import { Col, Row } from "antd";

const items = MOCK_DATA;

export interface ShopItemListProps {
  addCart?: (id: string, name: string, price: number, quantity: number) => void;
}

const ShopItemList = (props: ShopItemListProps) => {
  const itemList = items.map(item => (
    // <ShopItem {...item} key={item.name} onPut={props.onPut} />
    <Col span={8}>
      <ShopItem {...item} key={item.id} addCart={props.addCart} />
    </Col>
  ));
  return (
    <div>
      <Row gutter={16}>{itemList}</Row>
    </div>
  );
};

export default inject(({ marketStore }) => ({
  addCart: marketStore.addCart
}))(observer(ShopItemList));
