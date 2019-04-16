BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS rides CASCADE;
DROP TABLE IF EXISTS cars CASCADE;

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_driver INTEGER,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(30)
);

INSERT INTO users (id, username, password, is_driver, phone, email) VALUES
    (1,'david', '237489b0shggw8hgwgf', 1,'0504567890','abcd@gmail.com'),
    (2,'jack', 'sgb8sutgh8rh0', 0,'0504567890','efhg@gmail.com'),
    (3,'obaydah', 'u83qgbusadnbiau9bh', 1,'0504567890','obaydah@gmail.com'),
    (4,'john', 'ser8tb90shr8bw0h', 0,'0504567890','john@gmail.com');

CREATE TABLE rides (
    ride_id SERIAL,
    driver_id INTEGER,
    rider_id INTEGER DEFAULT 0,
    pickup TEXT,
    dropoff TEXT,
    price INTEGER
);

INSERT INTO rides (driver_id,pickup,dropoff,price) VALUES
    (1,'Haifa','Jerusalem',70),
    (1,'Accre','Tel-Aviv',50),
    (3,'Beersheva','Haifa',15),
    (3,'Beersheva','Haifa',35);

CREATE TABLE cars (
    owner_id INTEGER,
    model TEXT,
    year INTEGER
);

INSERT INTO cars (owner_id,model,year) VALUES
    (1,'Mazda 3',2008);

COMMIT;
