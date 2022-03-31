import Cart from '../Cart';
import Movie from '../Movies';
import Book from '../Book';
test('add book', () => {
    const cart = new Cart();
    const book1 = new Book(5, 'js', 'orelly', 10, 12)
    const book2 = new Book(6, 'ts', 'orelly', 20, 12)
    cart.add(book1);
    cart.add(book2);
    expect(cart).toEqual({"_items": [{"author": "orelly", "id": 5, "name": "js", "pages": 12, "price": 10}, {"author": "orelly", "id": 6, "name": "ts", "pages": 12, "price": 20}]});
  });
  test('get collection', () => {
    const cart = new Cart();
    const book1 = new Book(5, 'js', 'orelly', 10, 12)
    const book2 = new Book(6, 'ts', 'orelly', 20, 12)
    cart.add(book1);
    cart.add(book2);
    const result = cart.getItems();
    expect(result).toEqual([{"author": "orelly", "id": 5, "name": "js", "pages": 12, "price": 10}, {"author": "orelly", "id": 6, "name": "ts", "pages": 12, "price": 20}]);
  });

  test('sum without discount', () => {
    const cart = new Cart();
    const book1 = new Book(5, 'js', 'orelly', 10, 12)
    const book2 = new Book(6, 'ts', 'orelly', 20, 12)
    cart.add(book1);
    cart.add(book2);
    const result = cart.sumPrice();
    expect(result).toBe(30);
  });

  test('sum with discount', () => {
    const cart = new Cart();
    const book1 = new Book(5, 'js', 'orelly', 10, 12)
    const book2 = new Book(6, 'ts', 'orelly', 20, 12)
    cart.add(book1);
    cart.add(book2);
    const result = cart.sumPriceDiscount(10);
    expect(result).toBe(27);
  });

  test('delete', () => {
    const cart = new Cart();
    const book1 = new Book(5, 'js', 'orelly', 10, 12)
    const book2 = new Book(6, 'ts', 'orelly', 20, 12)
    cart.add(book1);
    cart.add(book2);
    cart.deliteEl(6);
    const result = cart.getItems();
    expect(result).toEqual([{"author": "orelly", "id": 5, "name": "js", "pages": 12, "price": 10}]);
  });
  test('add movie', () => {
    const cart = new Cart();
    const movie1 = new Movie(5, 'js', 'orelly', 10, 2000, 'Russia', 'Soon', 'Comedy', '1 hour')
    const movie2 = new Movie(5, 'js', 'orelly', 10, 2000, 'Russia', 'Soon', 'Comedy', '1 hour')
    cart.add(movie1);
    cart.add(movie2);
    expect(cart).toEqual({"_items": [{"author": "orelly", "country": "Russia", "genre": "Comedy", "id": 5, "name": "js", "price": 10, "tagline": "Soon", "time": "1 hour", "year": 2000}, {"author": "orelly", "country": "Russia", "genre": "Comedy", "id": 5, "name": "js", "price": 10, "tagline": "Soon", "time": "1 hour", "year": 2000}]});
  });
  test('get collection movie', () => {
    const cart = new Cart();
    const movie1 = new Movie(5, 'js', 'orelly', 10, 2000, 'Russia', 'Soon', 'Comedy', '1 hour')
    const movie2 = new Movie(5, 'js', 'orelly', 10, 2000, 'Russia', 'Soon', 'Comedy', '1 hour')
    cart.add(movie1);
    cart.add(movie2);
    const result = cart.getItems();
    expect(result).toEqual([{"author": "orelly", "country": "Russia", "genre": "Comedy", "id": 5, "name": "js", "price": 10, "tagline": "Soon", "time": "1 hour", "year": 2000}, {"author": "orelly", "country": "Russia", "genre": "Comedy", "id": 5, "name": "js", "price": 10, "tagline": "Soon", "time": "1 hour", "year": 2000}]);
  });

  test('sum without discount movie', () => {
    const cart = new Cart();
    const movie1 = new Movie(5, 'js', 'orelly', 10, 2000, 'Russia', 'Soon', 'Comedy', '1 hour')
    const movie2 = new Movie(5, 'js', 'orelly', 10, 2000, 'Russia', 'Soon', 'Comedy', '1 hour')
    cart.add(movie1);
    cart.add(movie2);
    const result = cart.sumPrice();
    expect(result).toBe(20);
  });

  test('sum with discount movie', () => {
    const cart = new Cart();
    const movie1 = new Movie(5, 'js', 'orelly', 10, 2000, 'Russia', 'Soon', 'Comedy', '1 hour')
    const movie2 = new Movie(5, 'js', 'orelly', 10, 2000, 'Russia', 'Soon', 'Comedy', '1 hour')
    cart.add(movie1);
    cart.add(movie2);
    const result = cart.sumPriceDiscount(10);
    expect(result).toBe(18);
  });

  test('delete movie', () => {
    const cart = new Cart();
    const movie1 = new Movie(5, 'js', 'orelly', 10, 2000, 'Russia', 'Soon', 'Comedy', '1 hour')
    const movie2 = new Movie(5, 'js', 'orelly', 10, 2000, 'Russia', 'Soon', 'Comedy', '1 hour')
    cart.add(movie1);
    cart.add(movie2);
    cart.deliteEl(6)
    const result = cart.getItems();
    expect(result).toEqual([{"author": "orelly", "country": "Russia", "genre": "Comedy", "id": 5, "name": "js", "price": 10, "tagline": "Soon", "time": "1 hour", "year": 2000}]);
  });
