import { observable, action } from "mobx";
import axios from "axios";

interface productListJSON {
  cartProduct: { id: string; name: string; price: number };
  quantity: number;
  total: number;
}

interface cartJSON {
  items: productListJSON[];
  total: number;
}

export default class MarketStore {
  @observable cartItems: productListJSON[] = [];
  //   @observable selectedItems: Array<itemJSON> = [];     가능;
  @observable total: number = 0;

  @action
  getCart = () => {
    console.log("getCart 실행");
    axios(`/gun`)
      .then(result => {
        this.setCart(result.data);
      })
      .catch(err => console.log(err));
  };

  @action
  setCart = (data: cartJSON) => {
    this.total = data.total;
    this.cartItems = data.items;
  };

  @action
  addCart = (id: string, name: string, price: number, quantity: number) => {
    const exists = this.cartItems.find(item => item.cartProduct.id === id);
    if (exists) return;

    console.log("addCart 실행");

    const url = `/gun/${quantity}`;
    const body = JSON.stringify({
      id: id,
      name: name,
      price: price
    });
    const header = { headers: { "Content-Type": "application/json" } };

    axios
      .post(url, body, header)
      .then(() => {
        this.getCart();
      })
      .catch(err => console.log(err));
  };

  @action
  deleteCart = (id: string) => {
    console.log("deleteCart 실행");

    const url = `/gun/${id}`;

    axios
      .delete(url)
      .then(() => {
        this.getCart();
      })
      .catch(err => console.log(err));
  };

  @action
  putCart = (id: string, quantity: number) => {
    console.log("putCart 실행");

    const url = `/gun/${id}/${quantity}`;

    axios
      .put(url)
      .then(() => {
        this.getCart();
      })
      .catch(err => console.log(err));
  };
}
