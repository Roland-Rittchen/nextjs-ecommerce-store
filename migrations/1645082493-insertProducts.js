const products = [
  {
    name: 'Atlas',
    type: 'ATX',
    pic1: 'Atlas',
    pic2: 'Atlas_build',
    price: 190,
  },
  {
    name: 'Computer-1',
    type: 'ITX',
    pic1: 'Computer-1',
    pic2: 'Computer-1_parts',
    price: 150,
  },
  {
    name: 'Lithium',
    type: 'ATX',
    pic1: 'Lithium',
    pic2: 'Lithium_build',
    price: 210,
  },
  {
    name: 'Moebius',
    type: 'ITX',
    pic1: 'Mobius',
    pic2: 'Mobius_build',
    price: 199.9,
  },
  {
    name: 'Monolith',
    type: 'ATX',
    pic1: 'Monolith',
    pic2: 'Monolith_back',
    price: 179.9,
  },
  {
    name: 'Monument',
    type: 'ITX',
    pic1: 'Monument',
    pic2: 'Monument_build',
    price: 115.95,
  },
];

exports.up = async (sql) => {
  console.log('inserting products into table');
  await sql`
    INSERT INTO products ${sql(
      products,
      'name',
      'type',
      'pic1',
      'pic2',
      'price',
    )}
  `;
};

exports.down = async (sql) => {
  console.log('removing products from table');
  for (const product of products) {
    await sql`
      DELETE FROM
        products
      WHERE
        name = ${product.name} AND
        type = ${product.type} AND
        pic1 = ${product.pic1} AND
				pic2 = ${product.pic2} AND
				price = ${product.price}
    `;
  }
};
