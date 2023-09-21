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
-- Table `localticket`.`shopping_cart_1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `localticket`.`shopping_cart_1` ;

CREATE TABLE IF NOT EXISTS `localticket`.`shopping_cart_1` (
  `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'auto-increment',
  `ticket_quantity` INT NOT NULL,
  `created_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pay_done` TINYINT NOT NULL DEFAULT '0' COMMENT '결제 완료 or 미완',
  `paid_id` BIGINT NOT NULL,
  `ticket_id` BIGINT NOT NULL,
  `login_id` BIGINT NOT NULL,
  `cart_deleted` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_tickets_TO_shopping_cart_1`
    FOREIGN KEY (`ticket_id`)
    REFERENCES `localticket`.`festival_api` (`id`),
  CONSTRAINT `FK_users_TO_shopping_cart_1`
    FOREIGN KEY (`login_id`)
    REFERENCES `localticket`.`users` (`id`),
  CONSTRAINT `FK_paid_tickets_TO_shopping_cart_1`
    FOREIGN KEY (`paid_id`)
    REFERENCES `localticket`.`paid_tickets` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `FK_tickets_TO_shopping_cart_1_idx` ON `localticket`.`shopping_cart_1` (`ticket_id` ASC) VISIBLE;

CREATE INDEX `FK_users_TO_shopping_cart_1_idx` ON `localticket`.`shopping_cart_1` (`login_id` ASC) VISIBLE;

CREATE INDEX `FK_paid_tickets_TO_shopping_cart_1_idx` ON `localticket`.`shopping_cart_1` (`paid_id` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
