exports.up = async (sql) => {
  console.log('creating table products');
  await sql`
		CREATE TABLE products
	(
		id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		name varchar(20) NOT NULL,
		type varchar(30) NOT NULL,
		pic1 varchar(20) NOT NULL,
		pic2 varchar(20) NOT NULL,
		price float NOT NULL
	);
	`;
};

exports.down = async (sql) => {
  console.log('dropping table products');
  await sql`DROP TABLE products;`;
};
