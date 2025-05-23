-- Do not drop tables to preserve data
-- DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    UNIQUE (username, email)
);

-- DROP TABLE IF EXISTS testimonials;
CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    approved BOOLEAN DEFAULT FALSE,
    UNIQUE (user_name, message)
);

CREATE TABLE IF NOT EXISTS languages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    icon TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    value VARCHAR(100) NOT NULL,
    url VARCHAR(500) NOT NULL,
    image_path VARCHAR(500) NOT NULL,
    UNIQUE (title, value, url)
);
