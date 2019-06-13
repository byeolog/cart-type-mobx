import * as React from "react";
import "../style/CartItem.css";
import { observer } from "mobx-react";

import { InputNumber, Button, message } from "antd";

export interface CartItemProps {
  id?: string;
  name?: string;
  price?: number;
  count?: number;
  total?: number;
  deleteCart?: (id: string) => void;
  putCart?: (id: string, quantity: number) => void;
}

@observer
export default class CartItem extends React.Component<CartItemProps> {
  id = this.props.id!;
  name = this.props.name!;
  price = this.props.price!;
  count = this.props.count!;
  total = this.props.total!;
  deleteCart = this.props.deleteCart!;
  putCart = this.props.putCart!;

  state = {
    mode: false,
    quantity: this.props.count
  };

  _changeMode = () => {
    this.setState({
      mode: true
    });
  };

  _onChange = value => {
    this.setState({
      quantity: value
    });
  };

  _saveQuantity = () => {
    this.setState({
      mode: false
    });

    if (this.props.id && this.state.quantity)
      this.putCart(this.props.id, this.state.quantity);

    message.success("수량이 변경되었습니다.");
  };

  _renderInputNumber = () => {
    if (this.state.mode) {
      return (
        <InputNumber
          min={1}
          max={100}
          defaultValue={this.state.quantity}
          onChange={this._onChange}
          size="small"
          className="inputNumberInCart"
        />
      );
    } else {
      return this.state.quantity;
    }
  };

  _renderButton = () => {
    if (this.state.mode) {
      return (
        <Button shape="round" size="small" onClick={this._saveQuantity}>
          저장
        </Button>
      );
    } else {
      return (
        <Button shape="round" size="small" onClick={this._changeMode}>
          수량변경
        </Button>
      );
    }
  };

  public render() {
    return (
      <div className="cartItem">
        <div className="name">{this.name}</div>
        <div className="price">{this.price}원</div>
        <div className="count">
          {this._renderInputNumber()}
          {/* <InputNumber
            min={1}
            max={100}
            defaultValue={count}
            onChange={this._onChange}
            size="small"
            className="inputNumberInCart"
          /> */}
        </div>
        <div className="count">
          {this._renderButton()}
          {/* <Button shape="round" size="small" onClick={this._changeMode}>
            수량변경
          </Button> */}
          {/* <Button
            shape="round"
            size="small"
            onClick={() => putCart(id, this.quantity)}
          >
            수량변경
          </Button> */}
        </div>
        <div className="total">{this.total}원</div>
        <div className="return">
          <Button
            type="danger"
            shape="circle"
            icon="delete"
            size="small"
            onClick={() => this.deleteCart(this.id)}
          />
        </div>
      </div>
    );
  }
}
