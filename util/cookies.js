import Cookies from 'js-cookie';

export function getParsedCookie(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

export function setParsedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

export function getItemsInCart(key) {
  const cookie = getParsedCookie(key);
  let num = 0;
  let item;
  // console.log(cookie);
  for (item in cookie) {
    // console.log(cookie[item].quantity);
    num += parseInt(cookie[item].quantity);
  }
  // console.log('num: ' + num);
  return num;
  // const reducer = (previousValue, currentValue) =>
  //   parseInt(previousValue.quantity) + parseInt(currentValue.quantity);
  // console.log('Cookie :' + JSON.stringify(cookie));
  // if (cookie) {
  //   return cookie.reduce(reducer);
  // } else {
  //   return 0;
  // }
}

export function addShoppingToCookie(id, quantity) {
  const cookieValue = getParsedCookie('cart') || [];
  const existIdOnArray = cookieValue.some((cookieObject) => {
    return cookieObject.id === id;
  });
  let newCookie;
  if (existIdOnArray) {
    const existingElementIndex = cookieValue.findIndex((e) => {
      return e.id === id;
    });
    cookieValue[existingElementIndex].quantity += quantity;
    newCookie = cookieValue;
  } else {
    newCookie = [...cookieValue, { id: id, quantity: quantity }];
  }
  setParsedCookie('cart', newCookie);
}
