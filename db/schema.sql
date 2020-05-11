
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies(
 id INTEGER NOT NULL AUTO_INCREMENT,
 movie_name VARCHAR(75) NOT NULL,
 watched BOOLEAN DEFAULT false,
 PRIMARY KEY (id)
 
);