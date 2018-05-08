DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price INT NOT NULL,
  stock_qunatity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_qunatity)
VALUES ("Softball Cleats", "Women's Shoes", 15, 50);

INSERT INTO products (product_name, department_name, price, stock_qunatity)
VALUES ("Yoga Pants", "Women's Clothing", 35, 21);

INSERT INTO products (product_name, department_name, price, stock_qunatity)
VALUES ("Tank Top", "Women's Clothing", 17, 16);

INSERT INTO products (product_name, department_name, price, stock_qunatity)
VALUES ("Volleyball", "Sporting Goods", 30, 20);

INSERT INTO products (product_name, department_name, price, stock_qunatity)
VALUES ("Nike Free 2.3", "Men's Shoes", 12, 23);

INSERT INTO products (product_name, department_name, price, stock_qunatity)
VALUES ("Football", "Sporting Goods", 55, 9);

INSERT INTO products (product_name, department_name, price, stock_qunatity)
VALUES ("Jersey", "Men's Clothing", 65, 7);

INSERT INTO products (product_name, department_name, price, stock_qunatity)
VALUES ("Sweatpants", "Men's Clothing", 65, 13);

INSERT INTO products (product_name, department_name, price, stock_qunatity)
VALUES ("Protein Bar", "Nutrition", 3, 70);

INSERT INTO products (product_name, department_name, price, stock_qunatity)
VALUES ("BCAAs", "Nutrition", 14, 30);



SELECT * FROM products;