import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

// Read the environment variables from the .env
// file, which will then be available for all
// following code
config();

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  // When in development, connect only once to the database
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres();
  }
  const sql = globalThis.postgresSqlClient;

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export async function getProducts() {
  const products = await sql`
    SELECT * FROM products;
  `;
  return products; // .map((animal) => camelcaseKeys(animal));
}

export async function getProductById(id) {
  const [product] = await sql`
    SELECT * FROM products WHERE id = ${id};
  `;
  return camelcaseKeys(product);
}

// const productsDatabase = [
//   {
//     id: '1',
//     name: 'Atlas',
//     type: 'ATX',
//     pic1: 'Atlas',
//     pic2: 'Atlas_build',
//   },
//   {
//     id: '2',
//     name: 'Computer-1',
//     type: 'ITX',
//     pic1: 'Computer-1',
//     pic2: 'Computer-1_parts',
//   },
//   {
//     id: '3',
//     name: 'Lithium',
//     type: 'ATX',
//     pic1: 'Lithium',
//     pic2: 'Lithium_build',
//   },
//   {
//     id: '4',
//     name: 'Moebius',
//     type: 'ITX',
//     pic1: 'Mobius',
//     pic2: 'Mobius_build',
//   },
//   {
//     id: '5',
//     name: 'Monolith',
//     type: 'ATX',
//     pic1: 'Monolith',
//     pic2: 'Monolith_back',
//   },
//   {
//     id: '6',
//     name: 'Monument',
//     type: 'ITX',
//     pic1: 'Monument',
//     pic2: 'Monument_build',
//   },
// ];
