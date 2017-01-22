-- insert into products
--   (name, description, price, type)
-- values
--   ('Turtle Bracelet', 'turtle themed bracelet', 12, 'bracelet');
-- 1:24 video

insert into products
  (name, description, price, type)
values
  ($1, $2, $3, $4);
