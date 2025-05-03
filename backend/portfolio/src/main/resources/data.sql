INSERT INTO users (username, email) VALUES ('JohnDoe', 'john@example.com');

INSERT INTO testimonials (user_name, message, approved) 
VALUES ('Jon Jones', 'Great developer!', true);

INSERT INTO testimonials (user_name, message, approved) 
VALUES ('Alex Poatan Pereira', 'Team player!', true);

INSERT INTO testimonials (user_name, message, approved) 
VALUES ('Demetrious Johnson', 'Hard worker!', true);



INSERT INTO languages (name, icon) VALUES ('HTML5', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg');
INSERT INTO languages (name, icon) VALUES ('CSS3', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg');
INSERT INTO languages (name, icon) VALUES ('JavaScript', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg');
INSERT INTO languages (name, icon) VALUES ('TypeScript', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg');
INSERT INTO languages (name, icon) VALUES ('MySQL', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg');
INSERT INTO languages (name, icon) VALUES ('Android', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg');
INSERT INTO languages (name, icon) VALUES ('Arduino', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg');
INSERT INTO languages (name, icon) VALUES ('Raspberry Pi', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg');
INSERT INTO languages (name, icon) VALUES ('Kotlin', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg');
INSERT INTO languages (name, icon) VALUES ('Java', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg');
INSERT INTO languages (name, icon) VALUES ('C#', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg');
INSERT INTO languages (name, icon) VALUES ('Android Studio', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg');
INSERT INTO languages (name, icon) VALUES ('Xcode', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg');
INSERT INTO languages (name, icon) VALUES ('React', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg');
INSERT INTO languages (name, icon) VALUES ('Docker', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg');

INSERT INTO projects (title, value, url, image_path) VALUES
('C Clean Inc.', 'ccleaninc', 'https://github.com/ThomasBedard/ccleaninc', '/images/ccleaninc.png'),
('GeoCache Explorer', 'geocache', 'https://github.com/MercuryAtom31/GeoCache-Explore-Android-Application/tree/main', '/images/geocache.png'),
('PetClinic', 'petclinic', 'https://github.com/cgerard321/champlain_petclinic', '/images/petclinic.png'),
('Contact Manager', 'contactmanager', 'https://github.com/MercuryAtom31/.NET_Final_Project_Contact_Manager_Application', '/images/contactmanager.png'),
('Weather App', 'weatherapp', 'https://github.com/MercuryAtom31/WeatherApp-Final-Project', '/images/weatherapp.png');













-- -- USERS
-- INSERT INTO users (username, email)
-- SELECT * FROM (SELECT 'JohnDoe', 'john@example.com') AS tmp
-- WHERE NOT EXISTS (
--     SELECT 1 FROM users WHERE username = 'JohnDoe' AND email = 'john@example.com'
-- );

-- -- TESTIMONIALS
-- INSERT INTO testimonials (user_name, message, approved)
-- SELECT * FROM (SELECT 'Jon Jones', 'Great developer!', true) AS tmp
-- WHERE NOT EXISTS (
--     SELECT 1 FROM testimonials WHERE user_name = 'Jon Jones' AND message = 'Great developer!'
-- );

-- INSERT INTO testimonials (user_name, message, approved)
-- SELECT * FROM (SELECT 'Alex Poatan Pereira', 'Team player!', true) AS tmp
-- WHERE NOT EXISTS (
--     SELECT 1 FROM testimonials WHERE user_name = 'Alex Poatan Pereira' AND message = 'Team player!'
-- );

-- INSERT INTO testimonials (user_name, message, approved)
-- SELECT * FROM (SELECT 'Demetrious Johnson', 'Hard worker!', true) AS tmp
-- WHERE NOT EXISTS (
--     SELECT 1 FROM testimonials WHERE user_name = 'Demetrious Johnson' AND message = 'Hard worker!'
-- );

-- -- LANGUAGES
-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'HTML5', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'HTML5');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'CSS3', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'CSS3');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'JavaScript', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'JavaScript');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'TypeScript', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'TypeScript');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'MySQL', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'MySQL');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'Android', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'Android');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'Arduino', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'Arduino');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'Raspberry Pi', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'Raspberry Pi');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'Kotlin', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'Kotlin');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'Java', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'Java');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'C#', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'C#');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'Android Studio', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'Android Studio');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'Xcode', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'Xcode');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'React', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'React');

-- INSERT INTO languages (name, icon)
-- SELECT * FROM (SELECT 'Docker', 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM languages WHERE name = 'Docker');

-- -- PROJECTS
-- INSERT INTO projects (title, value, url, image_path)
-- SELECT * FROM (SELECT 'C Clean Inc.', 'ccleaninc', 'https://github.com/ThomasBedard/ccleaninc', '/images/ccleaninc.png') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'C Clean Inc.' AND value = 'ccleaninc');

-- INSERT INTO projects (title, value, url, image_path)
-- SELECT * FROM (SELECT 'GeoCache Explorer', 'geocache', 'https://github.com/MercuryAtom31/GeoCache-Explore-Android-Application/tree/main', '/images/geocache.png') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'GeoCache Explorer' AND value = 'geocache');

-- INSERT INTO projects (title, value, url, image_path)
-- SELECT * FROM (SELECT 'PetClinic', 'petclinic', 'https://github.com/cgerard321/champlain_petclinic', '/images/petclinic.png') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'PetClinic' AND value = 'petclinic');

-- INSERT INTO projects (title, value, url, image_path)
-- SELECT * FROM (SELECT 'Contact Manager', 'contactmanager', 'https://github.com/MercuryAtom31/.NET_Final_Project_Contact_Manager_Application', '/images/contactmanager.png') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'Contact Manager' AND value = 'contactmanager');

-- INSERT INTO projects (title, value, url, image_path)
-- SELECT * FROM (SELECT 'Weather App', 'weatherapp', 'https://github.com/MercuryAtom31/WeatherApp-Final-Project', '/images/weatherapp.png') AS tmp
-- WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'Weather App' AND value = 'weatherapp');
