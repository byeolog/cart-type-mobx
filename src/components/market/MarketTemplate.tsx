import * as React from "react";
import { Row, Col } from "antd";
import "../style/MarketTemplate.css";

export interface MarketTemplateProps {
  items?: JSX.Element;
  basket?: JSX.Element;
}

export default class ShopTemplate extends React.Component<MarketTemplateProps> {
  public render() {
    const items = this.props.items!;
    const basket = this.props.basket!;
    return (
      <Row gutter={12}>
        <Col span={12}>
          <div className="items-wrapper">
            <h2>상품</h2>
            {items}
          </div>
        </Col>
        <Col span={12}>
          <div className="basket-wrapper">
            <h2>장바구니</h2>
            {basket}
          </div>
        </Col>
      </Row>
    );
  }
}
