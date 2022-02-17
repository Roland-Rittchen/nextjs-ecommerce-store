// import { getParsedCookie } from './cookies';
// import { getProducts } from './database';
import { CartItem } from './cookies';

export type Product = {
  id: number;
  name: string;
  type: string;
  pic1?: string;
  pic2?: string;
  price: number;
};

export function cartSum(key: string, cart: CartItem[], products: Product[]) {
  // const cart = getParsedCookie(key);
  // const products = await getProducts();
  const detailedCart = [];
  for (const prod of cart) {
    const found = products.find((element) => element.id === prod.id);
    if (found) {
      detailedCart.push({
        id: prod.id,
        name: found.name,
        qty: prod.quantity,
        price: found.price,
      });
    }
  }
  console.log(products);
  console.log('det cart' + JSON.stringify(detailedCart));
  let newTotal = 0;
  for (const element of detailedCart) {
    newTotal += element.price * element.qty;
  }
  console.log('total price' + newTotal);
  return newTotal;
}
