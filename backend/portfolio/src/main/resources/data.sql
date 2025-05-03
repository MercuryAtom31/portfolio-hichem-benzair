-- INSERT INTO users (username, email) VALUES ('JohnDoe', 'john@example.com');

-- INSERT INTO testimonials (user_name, message, approved) 
-- VALUES ('Jon Jones', 'Great developer!', true);

-- INSERT INTO testimonials (user_name, message, approved) 
-- VALUES ('Alex Poatan Pereira', 'Team player!', true);

-- INSERT INTO testimonials (user_name, message, approved) 
-- VALUES ('Demetrious Johnson', 'Hard worker!', true);



-- INSERT INTO languages (name, icon) VALUES ('HTML5', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('CSS3', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('JavaScript', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('TypeScript', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('MySQL', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('Android', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('Arduino', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('Raspberry Pi', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('Kotlin', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('Java', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('C#', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('Android Studio', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('Xcode', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('React', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg');
-- INSERT INTO languages (name, icon) VALUES ('Docker', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg');

-- INSERT INTO projects (title, value, url, image_path) VALUES
-- ('C Clean Inc.', 'ccleaninc', 'https://github.com/ThomasBedard/ccleaninc', '/images/ccleaninc.png'),
-- ('GeoCache Explorer', 'geocache', 'https://github.com/MercuryAtom31/GeoCache-Explore-Android-Application/tree/main', '/images/geocache.png'),
-- ('PetClinic', 'petclinic', 'https://github.com/cgerard321/champlain_petclinic', '/images/petclinic.png'),
-- ('Contact Manager', 'contactmanager', 'https://github.com/MercuryAtom31/.NET_Final_Project_Contact_Manager_Application', '/images/contactmanager.png'),
-- ('Weather App', 'weatherapp', 'https://github.com/MercuryAtom31/WeatherApp-Final-Project', '/images/weatherapp.png');



-- Users
INSERT IGNORE INTO users (username, email) VALUES 
('JohnDoe', 'john@example.com');

-- Testimonials
INSERT IGNORE INTO testimonials (user_name, message, approved) VALUES
('Jon Jones', 'Great developer!', true),
('Alex Poatan Pereira', 'Team player!', true),
('Demetrious Johnson', 'Hard worker!', true);

-- Languages
INSERT IGNORE INTO languages (name, icon) VALUES
('HTML5', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg'),
('CSS3', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg'),
('JavaScript', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg'),
('TypeScript', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg'),
('MySQL', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg'),
('Android', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg'),
('Arduino', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg'),
('Raspberry Pi', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg'),
('Kotlin', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg'),
('Java', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg'),
('C#', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg'),
('Android Studio', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg'),
('Xcode', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg'),
('React', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg'),
('Docker', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg');

-- Projects
INSERT IGNORE INTO projects (title, value, url, image_path) VALUES
('C Clean Inc.', 'ccleaninc', 'https://github.com/ThomasBedard/ccleaninc', '/images/ccleaninc.png'),
('GeoCache Explorer', 'geocache', 'https://github.com/MercuryAtom31/GeoCache-Explore-Android-Application/tree/main', '/images/geocache.png'),
('PetClinic', 'petclinic', 'https://github.com/cgerard321/champlain_petclinic', '/images/petclinic.png'),
('Contact Manager', 'contactmanager', 'https://github.com/MercuryAtom31/.NET_Final_Project_Contact_Manager_Application', '/images/contactmanager.png'),
('Weather App', 'weatherapp', 'https://github.com/MercuryAtom31/WeatherApp-Final-Project', '/images/weatherapp.png');
