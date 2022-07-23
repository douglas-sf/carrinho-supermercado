import { v4 as uuid } from 'uuid';

export class Product {
  public id: string;
  public amount: number;
  public total: number;

  constructor(public name: string, public price: number) {
    this.id = uuid();
    this.amount = 1;
    this.total = this.price;
  }

  changeAmount(value: number) {
    this.amount = value;
    this.total = this.calcTotal();
  }

  calcTotal() {
    return this.amount * this.price;
  }

  formatToMoney(value: number) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  getFormattedTotal() {
    return this.formatToMoney(this.total);
  }

  getFormattedPrice() {
    return this.formatToMoney(this.price);
  }
}
