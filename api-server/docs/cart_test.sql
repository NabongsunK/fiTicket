-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `localticket`.`cart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `localticket`.`cart` ;

CREATE TABLE IF NOT EXISTS `localticket`.`cart` (
  `id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `localticket`.`shopping_cart_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `localticket`.`shopping_cart_item` ;

CREATE TABLE IF NOT EXISTS `localticket`.`shopping_cart_item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ticket_name` INT NOT NULL,
  `ticket_price` INT NOT NULL,
  `ticket_discount` INT NOT NULL,
  `cartId` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_shopping_cart_item_cartId`
    FOREIGN KEY (`cartId`)
    REFERENCES `localticket`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_shopping_cart_item_cartId_idx` ON `localticket`.`shopping_cart_item` (`cartId` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
