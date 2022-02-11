import Link from 'next/link';
import { setParsedCookie } from '../util/cookies';

export default function Checkout() {
  function clearCart() {
    setParsedCookie('cart', []);
  }
  return (
    <>
      <h1>Checkout</h1>
      <div>You're checking out right now, right here, go on do it!</div>
      <Link href="/thankYou" passHref>
        <button onClick={clearCart} component="a">
          Confirm order
        </button>
      </Link>
    </>
  );
}
