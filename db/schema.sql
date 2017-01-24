create table products(
  id serial primary key not null,
  name varchar(70),
  description varchar(180),
  price money,
  type varchar(20),
  image text
);

create table cart(
  id serial primary key not null,
  products_id integer references products,
);

create table user(
  id serial,
  name varchar(70),
  cart_id references cart
);

create table orders(
  id serial,
  cart_id integer,
  total money,
  products_id integer
);
