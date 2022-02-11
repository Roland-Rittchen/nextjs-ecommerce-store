import { css } from '@emotion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const headerStyles = css`
  background-color: #eee;
  padding: 10px 15px;
  border-radius: 4px;
  margin: 8px 8px 20px;

  a + a {
    margin-left: 10px;
  }
`;

export default function Header({ cartItemNumber }) {
  const [numberOfItems, setNumberOfItems] = useState(0);

  useEffect(() => {
    setNumberOfItems(cartItemNumber);
  }, [cartItemNumber]);

  return (
    <header css={headerStyles}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/cart">
        <a>Cart {numberOfItems}</a>
      </Link>
    </header>
  );
}
