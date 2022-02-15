# E commerce store project in Next.js

To practice Next.JS, Cookies, and Typescript, a basic E-commerce store project is set up.

## Technologies used

## Setup instructions

```
-- Create Database itself
CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE nextjs_ecommerce_store TO nextjs_ecommerce_store;


-- Create products table
CREATE TABLE products
 (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(20) NOT NULL,
  type varchar(30) NOT NULL,
  pic1 varchar(20) NOT NULL,
  pic2 varchar(20) NOT NULL,
  price float NOT NULL
);

-- Insert some products (C in CRUD - Create)
INSERT INTO products
  (name, type, pic1, pic2, price)
VALUES
   ('Atlas', 'ATX', 'Atlas', 'Atlas_build', 190),
  ('Computer-1', 'ITX', 'Computer-1', 'Computer-1_parts', 150),
  ('Lithium', 'ATX', 'Lithium', 'Lithium_build',210),
  ('Moebius', 'ITX', 'Mobius', 'Mobius_build', 199.90),
  ('Monolith', 'ATX', 'Monolith', 'Monolith_back', 179.90),
  ('Monument', 'ITX', 'Monument', 'Monument_build', 115.95);

-- Read some products (R in CRUD - Read)
SELECT * FROM products;
```

## Deployment instructions

Create a readme with:
Title
Description
List of all technologies used
1 or 2 screenshots
Setup instructions
Deployment instructions
