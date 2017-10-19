// export enum Condition {
//   NEW, USED, DISCONTINUED
// }
//
// Condition[Symbol.iterator] = function*(): Iterator<Condition>{
//   yield Condition.NEW;
//   yield Condition.USED;
//   yield Condition.DISCONTINUED;
// }

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  condition: string;
  category: string;
}

