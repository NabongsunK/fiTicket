-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`auth`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`auth`;

CREATE TABLE IF NOT EXISTS `mydb`.`auth` (
  `pid` INT NOT NULL AUTO_INCREMENT COMMENT 'dbID',
  `id` VARCHAR(45) NOT NULL COMMENT 'userID',
  `phoneNumber` VARCHAR(45) NOT NULL COMMENT 'userPhoneNumber',
  `currentTime` DATETIME NULL DEFAULT CURRENT_TIMESTAMP COMMENT '입력시간',
  `expirationTime` DATETIME NULL COMMENT'인증만료시간',
  `auth` VARCHAR(8) NOT NULL COMMENT 'authentication key',
  `counter` INT DEFAULT 1 NULL,
  PRIMARY KEY (`pid`))
ENGINE = InnoDB;

DELIMITER //
CREATE TRIGGER set_expiration_time
BEFORE INSERT ON auth
FOR EACH ROW
BEGIN
    SET NEW.expirationTime = DATE_ADD(NOW(), INTERVAL 3 MINUTE);
    SET NEW.auth = substring(hex(aes_encrypt(CONCAT(NOW(),NEW.id,NEW.phoneNumber), CONVERT(round(RAND(),6), CHAR))),4,4);
END;
//
DELIMITER ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


select * from auth;

insert into auth(id,phoneNumber) values("kkk","1234567890");
insert into auth(id,phoneNumber) values("kka","1234567891");

select pid from auth
      where
        id = "kkk" and
        phoneNumber = "1234567890";
