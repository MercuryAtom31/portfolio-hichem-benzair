-- Do not drop tables to preserve data
-- DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- DROP TABLE IF EXISTS testimonials;
CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    approved BOOLEAN DEFAULT FALSE
);





-- -- DROP TABLE IF EXISTS users;
-- DROP TABLE IF NOT EXISTS users;
-- CREATE TABLE users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     username VARCHAR(50) NOT NULL,
--     email VARCHAR(100) NOT NULL
-- );

-- -- DROP TABLE IF EXISTS testimonials;
-- DROP TABLE IF NOT EXISTS testimonials;
-- CREATE TABLE testimonials (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_name VARCHAR(100) NOT NULL,
--     message TEXT NOT NULL,
--     approved BOOLEAN DEFAULT FALSE
-- );





-- -- Drop existing tables if they exist
-- DROP TABLE IF EXISTS testimonials;
-- DROP TABLE IF EXISTS users;

-- -- Create the "users" table using SERIAL for auto-incrementing IDs
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(50) NOT NULL,
--     email VARCHAR(100) NOT NULL
-- );

-- -- Create the "testimonials" table using SERIAL for auto-incrementing IDs
-- CREATE TABLE testimonials (
--     id SERIAL PRIMARY KEY,
--     user_name VARCHAR(100) NOT NULL,
--     message TEXT NOT NULL,
--     approved BOOLEAN DEFAULT FALSE
-- );