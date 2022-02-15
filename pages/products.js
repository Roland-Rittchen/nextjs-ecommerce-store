import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { addShoppingToCookie } from '../util/cookies';
import { getProducts } from '../util/database';

const productstyles = css`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
`;

export default function Products(props) {
  function buy(id, quantity) {
    addShoppingToCookie('cart', id, quantity);
  }

  return (
    <>
      <Head>
        <title>products</title>
        <meta description="A list of productsproducts and their accessories" />
      </Head>
      <h1>Products</h1>
      {props.products.map((products) => {
        return (
          <div key={`products-${products.id}`} css={productstyles}>
            {/* Dynamic link, eg. /productsproducts/1, /productsproducts/2, etc */}
            <Link href={`/products/${products.id}`}>
              <a data-test-id={`product-${products.id}`}>{products.name}</a>
            </Link>{' '}
            <button onClick={() => buy(products.id, 1)}>Buy</button>
          </div>
        );
      })}
    </>
  );
}

// Code in getServerSideProps runs only in
// Node.js, and allows you to do fancy things:
// - Read files from the file system
// - Connect to a (real) database
//
// getServerSideProps is exported from your files
// (ONLY FILES IN /pages) and gets imported
// by Next.js
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
