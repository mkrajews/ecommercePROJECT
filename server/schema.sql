create table products(
  id serial primary key not null,
  name varchar(70),
  description varchar(180),
  price money,
  type varchar(20)
);

create table cart(
  id serial primary key not null,
  products_id integer references products,
);
