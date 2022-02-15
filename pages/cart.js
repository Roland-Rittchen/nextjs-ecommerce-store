import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getParsedCookie, setParsedCookie } from '../util/cookies';
import { getProducts } from '../util/database';

const productstyles = css`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
`;

export default function Cart(props) {
  const [cart, setCart] = useState(props.cart);
  const [detailedCart, setDetailedCart] = useState([{}]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartDetails = cart.map((prod) => {
      const found = props.products.find((element) => element.id === prod.id);
      return {
        id: prod.id,
        name: found.name,
        qty: prod.quantity,
        price: found.price,
      };
    });
    setDetailedCart(cartDetails);
  }, [cart, props.products]);

  useEffect(() => {
    let newTotal = 0;
    for (const element of detailedCart) {
      newTotal += element.price * element.qty;
    }
    setTotalPrice(newTotal);
  }, [detailedCart]);

  // console.log('cart details ' + JSON.stringify(cartDetails));

  function remove(id) {
    // 1. get the value of the cookie
    const cookieValue = getParsedCookie('cart') || [];

    const newCookie = cookieValue.filter((cookieObject) => {
      return cookieObject.id !== id;
    });
    setDetailedCart(detailedCart);

    // 3. set the new value of the cookie
    setCart(
      newCookie.filter((cartObject) => {
        return cartObject.id !== id;
      }),
    );
    setParsedCookie('cart', newCookie);
  }

  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="Cart page" content="The products in your shopping car" />
      </Head>

      <div>
        <h1>Cart</h1>
        <br />
        {detailedCart.map((singleItem) => {
          return (
            <div
              key={`products-${singleItem.id}`}
              css={productstyles}
              data-test-id={`cart-product-${singleItem.id}`}
            >
              <span>{singleItem.qty} x </span>
              <Link href={`/products/${singleItem.id}`}>
                <a>{singleItem.name}</a>
              </Link>{' '}
              <span>{singleItem.price} Euro</span>
              <button
                onClick={() => remove(singleItem.id)}
                data-test-id={`cart-product-remove-${singleItem.id}`}
              >
                Remove
              </button>
            </div>
          );
        })}
        <div>Total price: </div>
        <span data-test-id="cart-total">{totalPrice}</span>
        <br />
        <Link href="/checkout" passHref>
          <button component="a" data-test-id="cart-checkout">
            Purchase
          </button>
        </Link>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const cartOnCookies = context.req.cookies.cart || '[]';

  // if there is no likedproducts cookie on the browser we store to an [] otherwise we get the cooke value and parse it
  const cart = JSON.parse(cartOnCookies);
  // Important:
  // - Always return an object from getServerSideProps
  // - Always return a key in that object that is
  // called props

  // 1. get the cookies from the browser
  // 2. pass the cookies to the frontend
  return {
    props: {
      // In the props object, you can pass back
      // whatever information you want
      cart: cart,
      products: await getProducts(),
    },
  };
}
