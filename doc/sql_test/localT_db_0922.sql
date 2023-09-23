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
DROP SCHEMA IF EXISTS `localticket` ;

-- -----------------------------------------------------
-- Schema localticket
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `localticket` DEFAULT CHARACTER SET utf8mb3 ;
USE `localticket` ;

-- -----------------------------------------------------
-- Table `localticket`.`auth`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `localticket`.`auth` ;

CREATE TABLE IF NOT EXISTS `localticket`.`auth` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `login_id` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `curr_time` DATETIME NOT NULL,
  `expiration_time` DATETIME NOT NULL,
  `authentication_number` VARCHAR(4) NOT NULL,
  `count` INT NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 27
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `localticket`.`festival_api`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `localticket`.`festival_api` ;

CREATE TABLE IF NOT EXISTS `localticket`.`festival_api` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `addr1` VARCHAR(1024) NULL DEFAULT NULL,
  `addr2` VARCHAR(1024) NULL DEFAULT NULL,
  `area_code` VARCHAR(1024) NULL DEFAULT NULL,
  `cat1` VARCHAR(100) NULL DEFAULT NULL,
  `cat2` VARCHAR(100) NULL DEFAULT NULL,
  `cat3` VARCHAR(100) NULL DEFAULT NULL,
  `content_id` VARCHAR(100) NOT NULL,
  `content_type_id` VARCHAR(100) NULL DEFAULT NULL,
  `created_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `first_image` VARCHAR(100) NULL DEFAULT NULL,
  `first_image2` VARCHAR(100) NULL DEFAULT NULL,
  `cpyrhtDivCd` VARCHAR(100) NULL DEFAULT NULL COMMENT '저작권 유형 (Type1:제1유형(출처표시-권장), Type3:제3유형(제1유형+변경금지)',
  `map_x` VARCHAR(100) NULL DEFAULT NULL,
  `map_y` VARCHAR(100) NULL DEFAULT NULL,
  `m_level` VARCHAR(100) NULL DEFAULT NULL,
  `modified_time` DATETIME NULL DEFAULT NULL,
  `si_gun_gu_code` VARCHAR(100) NULL DEFAULT NULL,
  `tel` VARCHAR(100) NULL DEFAULT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `zip_code` VARCHAR(100) NULL DEFAULT NULL,
  `use_time_festival` VARCHAR(1024) NULL DEFAULT NULL,
  `event_start_date` VARCHAR(1024) NULL DEFAULT NULL,
  `play_time` VARCHAR(1024) NULL DEFAULT NULL,
  `event_end_date` VARCHAR(1024) NULL DEFAULT NULL,
  `home_page` VARCHAR(1024) NULL DEFAULT NULL,
  `over_view` VARCHAR(10000) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `unique_content_id` (`content_id`)
  )
  
ENGINE = InnoDB
AUTO_INCREMENT = 205
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `localticket`.`tickets`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `localticket`.`tickets` ;

CREATE TABLE IF NOT EXISTS `localticket`.`tickets` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `ticket_name` VARCHAR(100) NOT NULL,
  `ticket_description` VARCHAR(500) NOT NULL,
  `created_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` VARCHAR(100) NOT NULL COMMENT '활성, 비활성을 통해 판매 상태를 관리할 수 있다',
  `remaining_ticket` INT NOT NULL,
  `festival_api_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_tickets_TO_tickets_1`
    FOREIGN KEY (`festival_api_id`)
    REFERENCES `localticket`.`festival_api` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `FK_tickets_TO_tickets_1` ON `localticket`.`tickets` (`festival_api_id` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `localticket`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `localticket`.`users` ;

CREATE TABLE IF NOT EXISTS `localticket`.`users` (
  `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'auto-increment',
  `login_id` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `login_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `logout_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `is_signed` TINYINT NOT NULL DEFAULT '0',
  `role` VARCHAR(45) NOT NULL COMMENT '역할(관리자/유저)',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `localticket`.`purchase_history`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `localticket`.`purchase_history` ;

CREATE TABLE IF NOT EXISTS `localticket`.`purchase_history` (
  `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'auto-increment',
  `purchase_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ticket_quantity` INT NOT NULL,
  `payment_information` VARCHAR(100) NOT NULL,
  `total_payment_amount` FLOAT NOT NULL,
  `qr_code` VARCHAR(100) NOT NULL COMMENT '우선 순위 뒤로',
  `users_id` BIGINT NOT NULL,
  `tickets_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_tickets_TO_purchase_history_1`
    FOREIGN KEY (`tickets_id`)
    REFERENCES `localticket`.`tickets` (`id`),
  CONSTRAINT `FK_users_TO_purchase_history_1`
    FOREIGN KEY (`users_id`)
    REFERENCES `localticket`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `FK_users_TO_purchase_history_1` ON `localticket`.`purchase_history` (`users_id` ASC) VISIBLE;

CREATE INDEX `FK_tickets_TO_purchase_history_1` ON `localticket`.`purchase_history` (`tickets_id` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `localticket`.`cart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `localticket`.`cart` ;

CREATE TABLE IF NOT EXISTS `localticket`.`cart` (
  `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT 'auto-increment',
  `ticket_quantity` INT NOT NULL,
  `created_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cart_done` TINYINT NOT NULL DEFAULT '0' COMMENT '결제 완료 or 미완',
  `paid_id` BIGINT NOT NULL,
  `ticket_id` BIGINT NOT NULL,
  `user_id` BIGINT NOT NULL,
  `cart_deleted` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_tickets_TO_cart`
    FOREIGN KEY (`ticket_id`)
    REFERENCES `localticket`.`festival_api` (`id`),
  CONSTRAINT `FK_users_TO_cart`
    FOREIGN KEY (`user_id`)
    REFERENCES `localticket`.`users` (`id`),
  CONSTRAINT `FK_paid_tickets_TO_cart`
    FOREIGN KEY (`paid_id`)
    REFERENCES `localticket`.`paid` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `FK_tickets_TO_cart_idx` ON `localticket`.`cart` (`ticket_id` ASC) VISIBLE;

CREATE INDEX `FK_users_TO_cart_idx` ON `localticket`.`cart` (`user_id` ASC) VISIBLE;

CREATE INDEX `FK_paid_TO_cart_idx` ON `localticket`.`cart` (`paid_id` ASC) VISIBLE;




-- -----------------------------------------------------
-- Table `localticket`.`slt`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `localticket`.`slt` ;

CREATE TABLE IF NOT EXISTS `localticket`.`slt` (
  `a` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`a`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;
insert into slt(a) value("akdqklfqwopp14214kl124129r12rklf12f21f201412412jk214210");

-- -----------------------------------------------------
-- Table `localticket`.`review`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `localticket`.`review` ;

CREATE TABLE IF NOT EXISTS `localticket`.`review` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `rating` INT NOT NULL COMMENT '1 ~ 10',
  `ticket_id` BIGINT NOT NULL,
  `user_id` BIGINT NOT NULL,
  `content` VARCHAR(512) NULL,
  `best_review` TINYINT NOT NULL DEFAULT '0' COMMENT '홈 화면 보여질 리뷰',
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

CREATE INDEX `FK_users_TO_review_idx` ON `localticket`.`review` (`user_id` ASC) VISIBLE;

CREATE INDEX `FK_festival_api_TO_review_idx` ON `localticket`.`review` (`ticket_id` ASC) VISIBLE;

-- -----------------------------------------------------
-- Table `localticket`.`paid`
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


--  주차장 테이블

-- DROP TABLE IF EXISTS `localticket`.`parking` ;

-- CREATE TABLE IF NOT EXISTS `localticket`.`parking` (
--   `id` BIGINT NOT NULL AUTO_INCREMENT,
--   `prkplaceNm` VARCHAR(1000) NOT NULL, -- 주차장명
--   `rdnmadr` VARCHAR(1000) NOT NULL, -- 소재지 도로명 주소
--   `prkcmprt` VARCHAR(1000) NOT NULL, -- 주차구획수
--   `latitude` VARCHAR(1000) NOT NULL, -- 위도
--   `longitude` VARCHAR(1000) NOT NULL, -- 경도
--   PRIMARY KEY (`id`))
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8mb3;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


