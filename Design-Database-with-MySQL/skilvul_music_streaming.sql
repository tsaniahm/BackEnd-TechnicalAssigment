CREATE DATABASE skilvul_music_streaming;

USE skilvul_music_streaming;

CREATE TABLE `user`(
    `user_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NULL,
    `email` VARCHAR(50) NULL,
    `password` VARCHAR(50) NULL
    );

 CREATE TABLE `singer`(
    `singer_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NULL
    );

CREATE TABLE `album`(
    `album_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NULL,
    `singer_id` INT NOT NULL,
    CONSTRAINT `fk_singer_id` FOREIGN KEY (`singer_id`) REFERENCES `singer`(singer_id) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE `playlist`(
   `playlist_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `user_id` INT NOT NULL,
   `tracks` VARCHAR(50) NULL,
   CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON UPDATE CASCADE ON DELETE CASCADE
   );

CREATE TABLE `tracks`(
    `track_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(50) NULL,
    `singer_id` INT NOT NULL,
    `album_id` INT NOT NULL,
    CONSTRAINT `fk_singer_id_tracks` FOREIGN KEY (singer_id) REFERENCES `singer`(`singer_id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT `fk_album_id_tracks` FOREIGN KEY (album_id) REFERENCES `album`(`album_id`) ON UPDATE CASCADE ON DELETE CASCADE
    );

 CREATE TABLE `track_playlist`(
    `track_id` INT NOT NULL,
    `playlist_id` INT NOT NULL,
    CONSTRAINT `fk_track_id_con` FOREIGN KEY (track_id) REFERENCES `tracks`(`track_id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT `fk_playlist_id_con` FOREIGN KEY (playlist_id) REFERENCES `playlist`(`playlist_id`) ON UPDATE CASCADE ON DELETE CASCADE
    );