CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    -- INT Primary Key --
id INTEGER NOT NULL AUTO_INCREMENT,
    -- Burger Name --
burger_name VARCHAR(30) NOT NULL,
    -- Eaten or not?--
devoured BOOLEAN,
PRIMARY KEY (id) );