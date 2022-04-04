import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { Product } from '../util/cart';
import { addShoppingToCookie } from '../util/cookies';
import { getProducts } from '../util/database';

const productstyles = css`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 20px;
`;

type Props = {
  products: Product[];
};

export default function Products(props: Props) {
  function buy(id: number, quantity: number) {
    addShoppingToCookie('cart', id, quantity);
  }

  return (
    <>
      <Head>
        <title>products</title>
        <meta name="description" content="A list of products and their accessories" />
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
export async function getServerSideProps() {
  return {
    props: {
      products: await getProducts(),
    },
  };
}
