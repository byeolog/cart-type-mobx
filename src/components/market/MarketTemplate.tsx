import * as React from "react";
import { Row, Col } from "antd";
import "../style/MarketTemplate.css";

import { Typography } from "antd";
const { Title } = Typography;

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
            <Title level={2}>상품</Title>
            {items}
          </div>
        </Col>
        <Col span={12}>
          <div className="basket-wrapper">
            <Title level={2}>장바구니</Title>
            {basket}
          </div>
        </Col>
      </Row>
    );
  }
}
