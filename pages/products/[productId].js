import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';
import productsDatabase from '../../util/database';

export default function SingleProducts(props) {
  const [likedArray, setLikedArray] = useState(props.likedProductss);

  // [{"id":"1","stars":0},{"id":"2","stars":0}]
  const currentProductsObject = likedArray.find(
    (cookieObject) => cookieObject.id === props.products.id,
  );

  console.log(currentProductsObject);

  function starsCountUp() {
    // because we render the button only when is liked then we can be sure the object is always on the cooke
    console.log('stars up');
    // 1. get the current cookie value
    const cookieValue = getParsedCookie('likedProductss') || [];
    // 2. update the stars count to +1
    const newCookie = cookieValue.map((cookieObject) => {
      // if is the object of the products on this page update stars
      if (cookieObject.id === props.products.id) {
        return { ...cookieObject, stars: cookieObject.stars + 1 };
      } else {
        // if is not the object of the products on this page don't do anything
        return cookieObject;
      }
    });

    // 3. update cookie and state
    setLikedArray(newCookie);
    setParsedCookie('likedProductss', newCookie);
  }

  return (
    <Layout>
      <Head>
        <title>
          {props.products.name} ({props.products.type})
        </title>
        <meta
          description={`${props.products.name} is a ${props.products.type}`}
        />
      </Head>
      <h1>
        {props.products.name} ({props.products.type})
      </h1>
      <Image
        src={`/unfortunately-foxes/${props.products.pic1}.jpeg`}
        width="300"
        height="300"
      />
      <Image
        src={`/unfortunately-foxes/${props.products.pic2}.jpeg`}
        width="300"
        height="300"
      />
      <div>id: {props.products.id}</div>
      <div>name: {props.products.name}</div>
      <div>type: {props.products.type}</div>
      {currentProductsObject ? (
        <button onClick={() => starsCountUp()}>
          stars: {currentProductsObject.stars}{' '}
        </button>
      ) : (
        'not followed'
      )}
    </Layout>
  );
}

// The parameter `context` gets passed from Next.js
// and includes a bunch of information about the
// request
export function getServerSideProps(context) {
  const likedProductssOnCookies = context.req.cookies.likedProductss || '[]';

  // if there is no likedProductss cookie on the browser we store to an [] otherwise we get the cooke value and parse it
  const likedProductss = JSON.parse(likedProductssOnCookies);

  // This is the variable that we get from the URL
  // (anything after the slash)
  const productsId = context.query.productsId;
  console.log('db', productsDatabase);

  const matchingProducts = productsDatabase.find((products) => {
    return products.id === productsId;
  });

  return {
    props: {
      likedProductss,
      products: matchingProducts,
      // productsId: productsId,
    },
  };
}
