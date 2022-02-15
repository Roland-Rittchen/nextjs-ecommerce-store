import Head from 'next/head';
import Router from 'next/router';
import { setParsedCookie } from '../util/cookies';

export default function Checkout() {
  async function clearCart() {
    setParsedCookie('cart', []);
    await Router.push('/thankYou');
  }
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="Checkout" content="Shipment info and purchasing" />
      </Head>
      <h1>Checkout</h1>
      <div>You're checking out right now, right here, go on do it!</div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          clearCart().catch((e) => {
            console.log(e);
          });
        }}
      >
        <label>
          First name <input data-test-id="checkout-first-name" required />
        </label>
        <br />
        <label>
          Last name <input data-test-id="checkout-last-name" required />
        </label>
        <br />
        <label>
          Email address <input data-test-id="checkout-email" required />
        </label>
        <br />
        <label>
          Postal Address <input data-test-id="checkout-address" required />
        </label>
        <br />
        <label>
          City <input data-test-id="checkout-city" required />
        </label>
        <br />
        <label>
          Postal Code <input data-test-id="checkout-postal-code" required />
        </label>
        <br />
        <label>
          Country <input data-test-id="checkout-country" required />
        </label>
        <br />
        <label>
          Credit Card Number{' '}
          <input data-test-id="checkout-credit-card" required />
        </label>
        <br />
        <label>
          Expiration Date{' '}
          <input data-test-id="checkout-expiration-date" required />
        </label>
        <br />
        <label>
          Security Code <input data-test-id="checkout-security-code" required />
        </label>
        <br />

        <button data-test-id="checkout-confirm-order">Confirm order</button>
      </form>
    </>
  );
}
