import * as React from "react";
import "../style/ShopItem.css";

import { InputNumber, Card, Button, Tooltip } from "antd";

export interface ShopItemProps {
  id?: string;
  name?: string;
  price?: number;
  addCart?: (id: string, name: string, price: number, quantity: number) => void;
}

export default class ShopItem extends React.Component<ShopItemProps> {
  quantity: number = 1;

  _onChange = value => {
    this.quantity = value;
  };

  public render() {
    const id = this.props.id!;
    const name = this.props.name!;
    const price = this.props.price!;
    const addCart = this.props.addCart!;
    return (
      <div className="cardWrapper">
        <Tooltip title={name}>
          <Card title={name} bordered={false}>
            <div>{price}원</div>
            <div className="cardInnerWrapper">
              <div className="cardInner">
                <InputNumber
                  min={1}
                  max={100}
                  defaultValue={1}
                  onChange={this._onChange}
                  size="small"
                  className="inputNumberInShop"
                />
              </div>

              <div className="cardInner">
                <Button
                  type="primary"
                  shape="circle"
                  icon="shopping-cart"
                  size="small"
                  onClick={() => addCart(id, name, price, this.quantity)}
                />
              </div>
            </div>
          </Card>
        </Tooltip>
        {/* <h4>{name}</h4>
        <div>{price}원</div>
        <InputNumber
          min={1}
          max={100}
          defaultValue={1}
          onChange={this._onChange}
        /> */}
      </div>
    );
  }
}
