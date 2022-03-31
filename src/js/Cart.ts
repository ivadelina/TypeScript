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
    let counter: number = 0;
    [...this._items].forEach((el: Buyable) => counter += el.price);
    return counter;
   }

   sumPriceDiscount(discount: number): number {
    let counter: number = 0;
    [...this._items].forEach((el: Buyable) => (counter += el.price * (1 - (discount / 100))));
    return counter;
   }

   deliteEl(id: number): void {
    [...this._items].forEach((el: Buyable) => {
        if(el.id === id) {
            let index: number = [...this._items].indexOf(el);
            [...this._items].splice(index, 1);
            console.log([...this._items].splice(index, 1));
        }
    });
   }
}