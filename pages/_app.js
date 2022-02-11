import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getItemsInCart } from '../util/cookies';

function MyApp({ Component, pageProps }) {
  const [cartItemNumber, setCartItemNumber] = useState(0);

  useEffect(() => {
    window.addEventListener('click', () => {
      const itemNumber = getItemsInCart('cart');
      setCartItemNumber(itemNumber);
    });
  });
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          main {
            margin: 0 8px;
          }
        `}
      />
      {/* Component for each one of the pages */}
      <Layout cartItemNumber={cartItemNumber}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
