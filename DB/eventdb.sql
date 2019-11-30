-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventdb` ;

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventdb` DEFAULT CHARACTER SET utf8 ;
USE `eventdb` ;

-- -----------------------------------------------------
-- Table `game`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `game` ;

CREATE TABLE IF NOT EXISTS `game` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `console` VARCHAR(45) NULL,
  `rating` VARCHAR(45) NULL,
  `release_year` VARCHAR(45) NULL,
  `genre` VARCHAR(45) NULL,
  `players` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS eventuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eventuser'@'localhost' IDENTIFIED BY 'eventuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `game`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `game` (`id`, `title`, `console`, `rating`, `release_year`, `genre`, `players`) VALUES (1, 'Dragon Ball Fighter Z', 'Playstation 4', 'T', '2018', 'Fighting', 2);
INSERT INTO `game` (`id`, `title`, `console`, `rating`, `release_year`, `genre`, `players`) VALUES (2, 'Street Fighter V', 'Playstation 4', 'T', '2016', 'Fighting', 2);
INSERT INTO `game` (`id`, `title`, `console`, `rating`, `release_year`, `genre`, `players`) VALUES (3, 'Mortal Kombat 11', 'Playstation 4', 'M', '2019', 'Fighting', 2);
INSERT INTO `game` (`id`, `title`, `console`, `rating`, `release_year`, `genre`, `players`) VALUES (4, 'Tekken 7', 'Playstation 4', 'T', '2017', 'Fighting', 2);
INSERT INTO `game` (`id`, `title`, `console`, `rating`, `release_year`, `genre`, `players`) VALUES (5, 'Injustice 2', 'Playstation 4', 'T', '2017', 'Fighting', 2);

COMMIT;

