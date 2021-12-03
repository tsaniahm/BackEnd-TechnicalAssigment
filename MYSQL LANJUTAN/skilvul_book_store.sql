CREATE DATABASE skilvulbookstore;

USE skilvulbookstore;

CREATE TABLE `penerbit`(
    `id` INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nama` VARCHAR(50) NULL,
    `kota` VARCHAR(50) NULL
);

CREATE TABLE `penulis`(
    `id` INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nama` VARCHAR(50) NULL,
    `kota` VARCHAR(50) NULL
);

CREATE TABLE `buku`(
    `id` INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `ISBN` VARCHAR(50) NULL,
    `judul` VARCHAR(50) NULL,
    `penulis` INT(10) NULL,
    `penerbit` INT(10) NULL,
    `harga` INT(10) NULL,
    `stock` INT(10) NULL,
    CONSTRAINT `fk_penulis` FOREIGN KEY (`penulis`) REFERENCES `penulis`(`id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT `fk_penerbit` FOREIGN KEY (`penerbit`) REFERENCES `penerbit`(`id`) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO `penerbit` VALUES
    (NULL, 'Gramedia', 'Bandung'),
    (NULL, 'Erlangga', 'Jakarta'),
    (NULL, 'Mizan', 'Yogyakarta'),
    (NULL, 'Periplus', 'Jakarta'),
    (NULL, 'Bintang Media', 'Jakarta'),
    (NULL, 'Wattpad', 'Bandung');

INSERT INTO `penulis` VALUES
    (NULL, 'JK Rowling', 'Bali'),
    (NULL, 'Nicholas Sparks', 'Jakarta'),
    (NULL, 'Dan Brown', 'Jakarta'),
    (NULL, 'Suzzane Colline', 'Bandung'),
    (NULL, 'Axel Mattew', 'Yogyakarta');

INSERT INTO `buku` VALUES
    (NULL, '978-7-827-2', 'The Notebooks', 1 , 2 , 75000, 200),
    (NULL, '978-2-860-3', 'Harry Potter', 1 , 1 , 60000, 100),
    (NULL, '978-2-852-4', 'Inferno', 4 , 3 , 150000, 8),
    (NULL, '978-3-802-9', 'The Hunger Game', 3 , 5 , 360000, 90),
    (NULL, '978-5-792-6', 'Supermodel', 1 , 4 , 90000, 160);

SELECT * FROM buku INNER JOIN penerbit ON buku.penerbit = penerbit.id;

SELECT * FROM buku LEFT JOIN penerbit ON buku.penerbit = penerbit.id;

SELECT * FROM buku RIGHT JOIN penerbit ON buku.penerbit = penerbit.id;

SELECT id, ISBN, judul, penulis, penerbit, MAX(harga) AS harga, stock FROM buku WHERE stock < 10;

SELECT id, ISBN, judul, penulis, penerbit, MIN(harga) AS harga, stock FROM buku;

SELECT COUNT(*) AS Harga_Dibawah_100 FROM buku WHERE harga < 100000;