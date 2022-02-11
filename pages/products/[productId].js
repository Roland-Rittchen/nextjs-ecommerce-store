import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { addShoppingToCookie } from '../../util/cookies';
import { getProducts } from '../../util/database';

export default function SingleProducts(props) {
  const [numberToBuy, setNumberToBuy] = useState(0);

  function buy() {
    addShoppingToCookie(props.product.id, numberToBuy);
    const inp = document.getElementById('numberToBuy');
    inp.value = '';
  }
  return (
    <>
      <Head>
        <title>
          {props.product.name} ({props.product.type})
        </title>
        <meta
          description={`${props.product.name} is a ${props.product.type}`}
        />
      </Head>
      <h1>{props.product.name}</h1>
      <Image
        src={`/productPictures/${props.product.pic1}.jpg`}
        width="300"
        height="300"
      />
      <Image
        src={`/productPictures/${props.product.pic2}.jpg`}
        width="300"
        height="300"
      />
      <div>id: {props.product.id}</div>
      <div>name: {props.product.name}</div>
      <div>type: {props.product.type}</div>
      <br />
      <input
        id="numberToBuy"
        onChange={(e) => {
          setNumberToBuy(parseInt(e.target.value));
        }}
      />
      <button onClick={buy}>add to cart</button>
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
