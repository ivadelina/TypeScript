import Buyable from './Buyable';

export default class Cart {
  private _items: Buyable[] = [];
  add(item: Buyable): void {
      this._items.push(item);
  }
  get items(): Buyable[] {
      return [...this._items];
  }
  
  sumPrice() {
    let counter: number;
    return [...this._items].forEach((el: Buyable) => {
        return counter += el.price;
    });
   }

   sumPriceDiscount(discount: number) {
    let counter: number;
    return [...this._items].forEach((el: Buyable) => {
        return counter += el.price * discount;
    });
   }

   deliteEl(id: number): void {
    [...this._items].forEach((el: Buyable) => {
        if(el.id === id) {
            let index: number = [...this._items].indexOf(el);
            [...this._items].splice(index, 1)
        }
    });
   }
}