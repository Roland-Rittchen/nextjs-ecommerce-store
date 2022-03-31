import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
// import { useEffect, useState } from 'react';
import vercelLogo from '../public/vercel.svg';

// import { getItemsInCart } from '../util/cookies';

const mainstyle = css`
  width: 600px;
  margin-left: 45px;
  padding: 25px;
  margin-bottom: 20px;
`;

export default function Home() {
  // const [cartItemNumber, setCartItemNumber] = useState(0);

  // let itemNumber = getItemsInCart('cart');
  // useEffect(() => {
  //   setCartItemNumber(itemNumber);
  // }, [itemNumber]);

  return (
    <div css={mainstyle}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to my website" />
      </Head>

      <div>
        <h1>Home page</h1>
        <p>
          This is an e-commerce store sample page. The main techniques displayed
          are: Use of Next.js, displaying items from a database, handling props,
          handling cart content in a cookie, checkout process and testing with
          Jest, Puppeteer and GitHub Actions.
        </p>
        <p>
          The sample products displayed in this store are real existing designer
          PC cases, mostly for small factor PCs. I chose these products, as I
          too am interested in cases, and want to sell my own designs in the
          future. I learnt the necessary skills in my previous career as
          mechanical design engineer.
        </p>
      </div>
    </div>
  );
}
