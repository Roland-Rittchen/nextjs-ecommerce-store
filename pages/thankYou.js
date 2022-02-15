import Head from 'next/head';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank you for your order</title>
        <meta
          name="order confirmation"
          content="Order confirmation and thank you page"
        />
      </Head>
      <h1>Thank you for your order</h1>
      <div>
        Our little drone is now buzzing to get the ordered items for you. Every
        little detail will be checked and double-checked by our quality wizards
        Karl and Jose. And while the preflight check for the delivery runs, our
        CEO Antje plays a sad lullaby as we say goodbye to the shipment.
      </div>
      <Link href="/" passHref>
        <button component="a">Continue Shopping</button>
      </Link>
    </>
  );
}
