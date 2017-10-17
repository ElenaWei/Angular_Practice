export class Cart {
  constructor(id: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  id: number;
  name: string;
  price: number;
  quantity: number;
}
