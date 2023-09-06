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
-- Table `mydb`.`userDB`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`userDB`;

CREATE TABLE IF NOT EXISTS `mydb`.`userDB` (
  `pid` INT NOT NULL AUTO_INCREMENT,
  `id` VARCHAR(45) NOT NULL,
  `phoneNumber` VARCHAR(45) NULL,
  `createdAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `loginAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `logoutAt` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `password` VARCHAR(45) NOT NULL,
  `isSigned` TINYINT NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NULL,
  `paymentInformation` VARCHAR(45) NULL,
  PRIMARY KEY (`pid`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


select * from userDB;


insert into userDB(id, phoneNumber,password,isSigned,role,email,paymentInformation)
value("kang","01012345678","rkd123",true,"user","kang@gmail.com","1231235125125151252");
insert into userDB(id, phoneNumber,password,isSigned,role,email,paymentInformation)
value("park","01087654321","qkr123",true,"user","park@gmail.com","1231235125125151252");
insert into userDB(id, phoneNumber,password,isSigned,role,email,paymentInformation)
value("kim","01087654321","rla123",false,"user","kim@gmail.com","1231235125125151252");

select
pid
from userDB
where
id = "kang";

update userDB set isSigned = false where pid = 1 ;
