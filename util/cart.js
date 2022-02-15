// import { getParsedCookie } from './cookies';
// import { getProducts } from './database';

export function cartSum(key, cart, products) {
  // const cart = getParsedCookie(key);
  // const products = await getProducts();
  const detailedCart = [];
  for (const prod of cart) {
    const found = products.find((element) => element.id === prod.id);
    detailedCart.push({
      id: prod.id,
      name: found.name,
      qty: prod.quantity,
      price: found.price,
    });
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
