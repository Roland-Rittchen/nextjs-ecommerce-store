import { cartSum } from '../cart';
import {
  addShoppingToCookie,
  deleteCookie,
  getParsedCookie,
  setParsedCookie,
} from '../cookies';

// Unit: Test functions for adding and removing info from cookie
test('add and remove info to/from cookie', () => {
  const cookie = {
    key: 'test',
    value: [{ id: 0, quantity: 1 }],
  };

  // First, make sure that the value at the start is undefined
  expect(getParsedCookie(cookie.key)).toBe(undefined);

  // Set the cookie value and test that the value was updated
  expect(setParsedCookie(cookie.key, cookie.value)).toBeUndefined();
  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);

  // Best practice: tests clean up any state after themselves
  expect(deleteCookie(cookie.key)).toBe(undefined);
  expect(getParsedCookie(cookie.key)).toBe(undefined);
});

// Test function for updating quantity in item of cookie (eg. adding an item to the cart that already exists)
test('update cart quantity', () => {
  const cookie = {
    key: 'test',
    value: [{ id: 0, quantity: 1 }],
  };
  const shopping = {
    id: 0,
    quantity: 5,
  };
  const cookieAfterShopping = {
    key: 'test',
    value: [{ id: 0, quantity: 6 }],
  };
  expect(setParsedCookie(cookie.key, cookie.value)).toBeUndefined();
  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);
  expect(
    addShoppingToCookie(cookie.key, shopping.id, shopping.quantity),
  ).toBeUndefined();
  expect(getParsedCookie(cookie.key)).toEqual(cookieAfterShopping.value);
  // Best practice: tests clean up any state after themselves
  expect(deleteCookie(cookie.key)).toBe(undefined);
  expect(getParsedCookie(cookie.key)).toBe(undefined);
});

// Test cart sum function
test('cart sum function', () => {
  const cookie = {
    key: 'test',
    value: [
      { id: 0, quantity: 1 },
      { id: 1, quantity: 1 },
      { id: 2, quantity: 1 },
      { id: 3, quantity: 1 },
      { id: 4, quantity: 1 },
      { id: 5, quantity: 1 },
    ],
  };
  const products = [
    { id: 0, name: 'Atlas', type: 'ATX', price: 190 },
    { id: 1, name: 'Computer-1', type: 'ITX', price: 150 },
    { id: 2, name: 'Lithium', type: 'ATX', price: 210 },
    { id: 3, name: 'Moebius', type: 'ITX', price: 199.9 },
    { id: 4, name: 'Monolith', type: 'ATX', price: 179.9 },
    { id: 5, name: 'Monument', type: 'ITX', price: 115.95 },
  ];
  expect(setParsedCookie(cookie.key, cookie.value)).toBeUndefined();
  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);
  expect(cartSum(cookie.key, cookie.value, products)).toBe(1045.75);
  // Best practice: tests clean up any state after themselves
  expect(deleteCookie(cookie.key)).toBe(undefined);
  expect(getParsedCookie(cookie.key)).toBe(undefined);
});
