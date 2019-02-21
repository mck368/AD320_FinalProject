/*ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';*/

DROP DATABASE IF EXISTS iLoveMovies;
CREATE DATABASE IF NOT EXISTS iLoveMovies;
USE iLoveMovies;


-- ------------------------------------------------------------------------------------------------------------------------------------------
--                                              Create Tables                                                                               --
-- -------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE movieInfo (
	MovieID			INT								NOT NULL,
    Title			VARCHAR(50)						NOT NULL,
    Rating			ENUM('G', 'PG', 'PG-13', 'R'),		
    Genre			VARCHAR(50),
    ReleaseDate		DATE,		 
    StarRating		DECIMAL(2,1),
    MovieLanguage	VARCHAR(30)
);

CREATE TABLE users (	
    userName		VARCHAR(50)			NOT NULL,
    Email			VARCHAR(50),		
    FavoriteMovie	VARCHAR(50),
    FavoriteGenre	VARCHAR(50)    
);


-- ------------------------------------------------------------------------------------------------------------------------------------------
--                                              Insert Data                                                                                --
-- ---------------------------------------------------------------------------------------------------------------------

INSERT INTO movieInfo	
VALUES
(1,'Glass','R','Thriller', '2019-03-01', 4.5, 'English'),
(2,'Matrix','R','Thriller', '2019-03-01', 3.1, 'English'),
(3,'Lego Movie','PG','Comedy', '2019-03-01', 4.3, 'English'),
(4,'Requiem for a Dream','G','Thriller', '2019-03-01', 2.0, 'English'),
(5,'The Truman Show','PG-13','Thriller', '2019-03-01', 4.4, 'English'),
(6,'Big Daddy','R','Comedy', '2019-03-01', 4.3, 'English'),
(7,'Happy Gilmore','R','Comedy', '2019-03-01', 4.5, 'English'),
(8,'Inception','R','Thriller', '2019-03-01', 4.5, 'English'),
(9,'Murder By Numbers','R','Horror', '2019-03-01', 4.9, 'English'),
(10,'Elf','G','Comedy', '2019-03-01', 4.2, 'English'),
(11,'Ace Ventura','PG','Comedy', '2019-03-01', 4.4, 'English'),
(12,'50 First Dates','PG','Comedy', '2019-03-01', 4.3, 'English'),
(13,'Raiders of the Lost Arc', 'PG', 'Action', '1981-06-12', 8.5, 'English'),
(14,'The Breakfast Club', 'R','Drama', '1989-02-15',7.9, 'English'),
(15,'Goonies', 'PG', 'Comedy','1989-06-07', 7.8, 'English'),
(16,'Alice In Wonderland', 'PG','Fantasy', '1999-02-28', 6.3, 'English'),
(17,'Die Hard', 'R', 'Action', '1988-07-20', 8.2, 'English'),
(18,'Home Alone', 'PG', 'Family', '1990-11-16', 7.5, 'English'),
(19,'The Grudge', 'PG-13', 'Horror', '2004-10-22', 7.3, 'English'),
(20,'Cinderella', 'G', 'Family', '1950-03-04', 7.8, 'English'),
(21,'Kill Bill', 'R', 'Action', '2003-10-10', 8.1, 'English'),
(22,'Chariots of Fire', 'PG', 'Sports', '1982-04-09', 7.2, 'English'),
(23,'Planes, Trains, and Automobiles', 'R', 'Comedy', '1987-11-25', 7.6, 'English'),
(24,'Anchorman', 'PG-13', 'Comedy', '2004-07-09', 7.2, 'English'),
(25,'Halloween', 'R', 'Horror', '1978-10-27', 7.8, 'English'),
(26,'Blair Witch Project', 'R', 'Horror', '1999-07-30', 6.4, 'English');

INSERT INTO users
VALUES
('Harry','harry@hogwarts.com','Raiders of the Lost Arc','Action'),
('Hermione','hermione@hogwarts.com','The Breakfast Club','Documentary'),
('Ron','ron@hogwarts.com','Goonies','Comedy'),
('Luna','luna@hogwarts.com','Alice In Wonderland','Fantasy'),
('Ginny','ginny@hogwarts.com','Die Hard','Action'),
('Neville','neville@hogwarts.com','Home Alone','Foriegn'),
('Draco','draco@hogwarts.com','The Grudge','Horror'),
('Pansy','pansy@hogwarts.com','Cinderella','Romance'),
('Dean','dean@hogwarts.com','Kill Bill', 'Thriller'),
('Seamus','seamus@hogwarts.com','Chariots of Fire','Sports'),
('Fred','fred@hogwarts.com','Planes, Trains, and Automobiles','Comedy'),
('George','george@hogwarts.com','Anchorman','Comedy'),
('Crabbe','crabbe@hogwarts.com','Halloween','Horror'),
('Goyle','goyle@hogwarts.com','Blair Witch Project','Horror');