const baseUrl = 'http://localhost:3000';

test('assert the page is loading, basic test functionality is there', async () => {
  await page.goto(`${baseUrl}/`);
  // Expect that the page URL will be correct
  expect(page.url()).toBe(`${baseUrl}/`);
  // Match any page content
  await expect(page).toMatch('Home page');
});

// E2E: Add to cart, change quantity and remove from cart
test('add items to the cart, check cart, and remove from cart again', async () => {
  // go to base side
  await page.goto(`${baseUrl}/`);
  await expect(page).toMatch('Home page');
  // go to the products page
  await expect(page).toClick('[data-test-id="products-link"]');
  await page.waitForNavigation();
  // Expect that the page URL will be correct
  expect(page.url()).toBe(`${baseUrl}/products`);
  await expect(page).toMatch('Products');
  // Click on element and wait for navigation
  await expect(page).toClick('[data-test-id="product-1"]');
  await page.waitForNavigation();
  // add item to cart
  await expect(page).toClick('[data-test-id="product-add-to-cart"]');
  // go to cart
  await expect(page).toClick('[data-test-id="cart-link"]');
  await page.waitForNavigation();
  // check if item is in cart
  await expect(page).toMatch('Atlas');
  // remove item
  await expect(page).toClick('[data-test-id="cart-product-remove-1"]');
  // check if cart count is 0
  await expect(page).toMatchElement('[data-test-id="cart-count"]', {
    text: '0',
  });
});

// E2E: Checkout flow, payment page, thank you page
test('add items to the cart, checkout, and test thank you page', async () => {
  // go to base side
  await page.goto(`${baseUrl}/`);
  await expect(page).toMatch('Home page');
  // go to the products page
  await expect(page).toClick('[data-test-id="products-link"]');
  await page.waitForNavigation();
  // Expect that the page URL will be correct
  expect(page.url()).toBe(`${baseUrl}/products`);
  // Click on element and wait for navigation
  await expect(page).toClick('[data-test-id="product-1"]');
  await page.waitForNavigation();
  // add item to cart
  await expect(page).toClick('[data-test-id="product-add-to-cart"]');
  // go to cart
  await expect(page).toClick('[data-test-id="cart-link"]');
  await page.waitForNavigation();
  // go to checkout
  await expect(page).toClick('[data-test-id="cart-checkout"]');
  // await page.waitForNavigation();
  await page.waitForNetworkIdle();
  // Assert that a form will be filled

  await expect(page).toFill('[data-test-id="checkout-first-name"]', 'Karl');
  await expect(page).toFill('[data-test-id="checkout-last-name"]', 'Horky');
  await expect(page).toFill(
    '[data-test-id="checkout-email"]',
    'karl.horky@upleveled.com',
  );
  await expect(page).toFill('[data-test-id="checkout-address"]', 'Markhof');
  await expect(page).toFill('[data-test-id="checkout-city"]', 'Vienna');
  await expect(page).toFill('[data-test-id="checkout-postal-code"]', '1030');
  await expect(page).toFill('[data-test-id="checkout-country"]', 'Austria');
  await expect(page).toFill(
    '[data-test-id="checkout-credit-card"]',
    '0000 0000 0000 0000',
  );
  await expect(page).toFill(
    '[data-test-id="checkout-expiration-date"]',
    '02/2022',
  );
  await expect(page).toFill('[data-test-id="checkout-security-code"]', '123');

  // confirm checkout and check for thank you page
  await expect(page).toClick('[data-test-id="checkout-confirm-order"]');
  await page.waitForNavigation();
  expect(page.url()).toBe(`${baseUrl}/thankYou`);
  // await expect(page).toMatch('Thank you for your order');
});
