import Buyable from './Buyable';

export default class Cart {
  private _items: Buyable[] = [];
  add(item: Buyable): void {
      this._items.push(item);
  }
  getItems(): Buyable[] {
      return [...this._items];
  }
  
  sumPrice(): number {
    return [...this._items].reduce((sum: number, current: Buyable) => {
      return sum + current.price;
    }, 0);
   }

   sumPriceDiscount(discount: number): number {
    let counter: number = 0;
    [...this._items].forEach((el: Buyable) => (counter += el.price * (1 - (discount / 100))));
    return counter;
   }

   deliteEl(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
   }
}