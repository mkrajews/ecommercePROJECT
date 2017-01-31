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
  products_id integer[] references products,
);

create table orders(
  id serial,
  cart_id integer,
  total money,
  products_id integer
);

create table users(
  user_id serial,
  displayname varchar(70),
  password text,
  facebookid text
);

orderline
add products to cart:
req.session.cart = []
push the body


cart

orders:
order status
customer id
shipping status
email status
notes

-- update product row:
--   UPDATE products
-- SET image='https://pbs.twimg.com/profile_images/489190886190755840/6Q8Xf_HJ_400x400.jpeg'
-- WHERE id=4;
