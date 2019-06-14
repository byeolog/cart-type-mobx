import { observable, action, computed } from "mobx";
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
  // @observable total: number = 0;

  @action
  getCart = () => {
    console.log("getCart 실행");
  };

  @action
  addCart = (id: string, name: string, price: number, quantity: number) => {
    const exists = this.cartItems.find(item => item.cartProduct.id === id);
    if (exists) return;

    console.log("addCart 실행");

    const newItem = {
      cartProduct: { id, name, price },
      quantity,
      total: price * quantity
    };

    this.cartItems.push(newItem);
  };

  @action
  deleteCart = (id: string) => {
    console.log("deleteCart 실행");

    this.cartItems = this.cartItems.filter(item => {
      return item.cartProduct.id !== id;
    });
  };

  @action
  putCart = (id: string, quantity: number) => {
    console.log("putCart 실행");

    const findItem = this.cartItems.find(item => item.cartProduct.id === id);

    if (findItem) {
      findItem.quantity = quantity;
      findItem.total = findItem.cartProduct.price * quantity;
    }

    // this.cartItems.forEach(item => {
    //   if (item.cartProduct.id === id) {
    //     item.quantity = quantity;
    //     item.total = quantity * item.cartProduct.price;
    //   }
    // });
  };

  @computed
  get total() {
    console.log("total 계산");

    return this.cartItems.reduce((prev, curr) => {
      return prev + curr.total;
    }, 0);
  }
}
