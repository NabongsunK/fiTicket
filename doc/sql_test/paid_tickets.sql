-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema localticket
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema localticket
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `localticket` DEFAULT CHARACTER SET utf8mb3 ;
USE `localticket` ;

-- -----------------------------------------------------
-- Table `localticket`.`paid_tickets`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `localticket`.`paid` ;

CREATE TABLE IF NOT EXISTS `localticket`.`paid` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `paid_amount` BIGINT NOT NULL,
  `user_id` BIGINT NOT NULL,
  `paid_done` TINYINT NOT NULL DEFAULT 0,
  `paid_deleted` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
