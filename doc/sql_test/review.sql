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
-- Schema boarddb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema boarddb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `boarddb` DEFAULT CHARACTER SET utf8mb3 ;
USE `boarddb` ;

-- -----------------------------------------------------
-- Table `boarddb`.`review`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `boarddb`.`review` ;

CREATE TABLE IF NOT EXISTS `boarddb`.`review` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rating` INT NOT NULL COMMENT '1 ~ 10',
  `ticket_id` BIGINT NOT NULL,
  `ticket_name` VARCHAR(45) NOT NULL,
  `user_id` BIGINT NOT NULL,
  `user_name` VARCHAR(45) NOT NULL COMMENT '성 + \"**\"',
  `content` VARCHAR(512) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_users_TO_review`
    FOREIGN KEY (`user_id`)
    REFERENCES `localticket`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_festival_api_TO_review`
    FOREIGN KEY (`ticket_id`)
    REFERENCES `localticket`.`festival_api` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `FK_users_TO_review_idx` ON `boarddb`.`review` (`user_id` ASC) VISIBLE;

CREATE INDEX `FK_festival_api_TO_review_idx` ON `boarddb`.`review` (`ticket_id` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
