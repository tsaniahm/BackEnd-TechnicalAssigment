SHOW DATABASES;

CREATE DATABASE bookstore;

USE bookstore;

SHOW TABLES;

CREATE TABLE `books`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `author1` VARCHAR(100) NOT NULL,
    `author2` VARCHAR(100),
    `author3` VARCHAR(100),
    `title` VARCHAR(100),
    `description` TEXT,
    `place_sell` CHAR(3),
    `stock` INT default 0,
    `creation_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE books
    ADD `price` INT DEFAULT 0,
    ADD `status` ENUM('available', 'out of stock', 'limited'),
    DROP `place_sell`;

INSERT INTO books VALUES
    (NULL,'Nicholas Sparks', 'JK Rowling', 'Harry Styles', 'The Notebook', 'Kisah cinta penuh perbedaan',150, default, 299000, 'available'),
    (NULL,'Chase Stoke', 'Madyline Cline', 'Rude S', 'The Outer Bank', 'Kisah pencarian harta karun berharga',200, default, 199000, 'limited'),
    (NULL,'Kendall Jenner', 'Gigi Hadid', 'Emily Ratajkowski', 'Supermodel', 'Kehidupan menjadi seorang supermodel dunia',3, default, 260000, 'out of stock');

SELECT * FROM books;

SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 from books;

SELECT * FROM books WHERE id = 3;

SELECT * FROM books where id = 1 AND price >= 100000;

SELECT * FROM books WHERE stock > 100 OR price <= 200000;

SELECT * FROM books WHERE NOT status = 'out of stock';

SELECT * FROM books ORDER BY id;

SELECT * FROM books LIMIT 2;

UPDATE books SET author1 = 'Taylor Swift', price = '125000' WHERE id = 1;

DELETE FROM books where id = 2;