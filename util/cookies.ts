import Cookies from 'js-cookie';

export type CartItem = {
  id: number;
  quantity: number;
};

export function getParsedCookie(key: string) {
  try {
    const cookie = Cookies.get(key);
    if (cookie) {
      return JSON.parse(cookie);
    }
  } catch (err) {
    return undefined;
  }
}

export function setParsedCookie(key: string, value: CartItem[]) {
  Cookies.set(key, JSON.stringify(value));
}

export function deleteCookie(key: string) {
  Cookies.remove(key);
}

export function getItemsInCart(key: string) {
  const cookie = getParsedCookie(key);
  let num = 0;
  let item;
  for (item in cookie) {
    num += parseInt(cookie[item].quantity);
  }
  return num;
}

export function addShoppingToCookie(key: string, id: number, quantity: number) {
  const cookieValue = getParsedCookie(key) || [];
  const existIdOnArray = cookieValue.some((cookieObject: CartItem) => {
    return cookieObject.id === id;
  });
  let newCookie;
  if (existIdOnArray) {
    const existingElementIndex = cookieValue.findIndex((e: CartItem) => {
      return e.id === id;
    });
    cookieValue[existingElementIndex].quantity += quantity;
    newCookie = cookieValue;
  } else {
    newCookie = [...cookieValue, { id: id, quantity: quantity }];
  }
  setParsedCookie(key, newCookie);
}
