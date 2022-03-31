# E commerce store project in Next.js

A sample e-commerce store using PC cases as sample products to practice Next.JS, Cookies, and Typescript, a basic E-commerce store project is set up.

## Technologies used
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://github.com/puppeteer/puppeteer" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg" alt="puppeteer" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>


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


