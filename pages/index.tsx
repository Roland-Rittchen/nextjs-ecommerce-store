// import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
// import { useEffect, useState } from 'react';
import vercelLogo from '../public/vercel.svg';

// import { getItemsInCart } from '../util/cookies';

export default function Home() {
  // const [cartItemNumber, setCartItemNumber] = useState(0);

  // let itemNumber = getItemsInCart('cart');
  // useEffect(() => {
  //   setCartItemNumber(itemNumber);
  // }, [itemNumber]);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to my website" />
      </Head>

      <div>
        <h1>Home page</h1>
        <p>Home page content</p>

        <div>
          Option 1.0: Loading image with Image component WITHOUT width and
          height
        </div>
        <Image src={vercelLogo} alt="Vercel" />

        <div>
          Option 1.1: Loading image with Image component with width and height
        </div>
        <Image src="/vercel.svg" alt="Vercel" width="283" height="64" />

        <div>Option 2: Loading image with img tag</div>
        <img src="/vercel.svg" alt="Vercel" />
      </div>
    </>
  );
}
