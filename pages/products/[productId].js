import Head from 'next/head';
import { useState } from 'react';
import { addShoppingToCookie } from '../../util/cookies';
import { getProducts } from '../../util/database';

export default function SingleProducts(props) {
  const [numberToBuy, setNumberToBuy] = useState(1);

  function buy() {
    const inp = document.getElementById('numberToBuy');
    addShoppingToCookie(props.product.id, numberToBuy);
    inp.value = '1';
  }
  return (
    <>
      <Head>
        <title>
          {props.product.name} ({props.product.type})
        </title>
        <meta
          description={`${props.product.name} is a ${props.product.type} pc case`}
        />
      </Head>
      <h1>{props.product.name}</h1>
      <img
        alt={`product ${props.product.pic1}`}
        data-test-id="product-image"
        src={`/productPictures/${props.product.pic1}.jpg`}
        width="300"
        height="300"
      />
      <div>id: {props.product.id}</div>
      <div>name: {props.product.name}</div>
      <div>type: {props.product.type}</div>
      <br />
      <span>price: </span>
      <span data-test-id="product-price">{props.product.price}</span>
      <span>€</span> <br />
      <input
        id="numberToBuy"
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={numberToBuy}
        onChange={(e) => {
          setNumberToBuy(parseInt(e.target.value));
        }}
      />
      <button onClick={buy} data-test-id="product-add-to-cart">
        add to cart
      </button>
    </>
  );
}

// The parameter `context` gets passed from Next.js
// and includes a bunch of information about the
// request
export async function getServerSideProps(context) {
  const likedProductssOnCookies = context.req.cookies.likedProductss || '[]';

  const productsDatabase = await getProducts();

  // if there is no likedProductss cookie on the browser we store to an [] otherwise we get the cooke value and parse it
  const likedProductss = JSON.parse(likedProductssOnCookies);

  // This is the variable that we get from the URL
  // (anything after the slash)
  const productId = context.query.productId;

  const matchingProduct = productsDatabase.find((product) => {
    return product.id === parseInt(productId);
  });

  return {
    props: {
      likedProductss,
      product: matchingProduct,
      // productsId: productsId,
    },
  };
}
