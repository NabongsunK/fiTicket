﻿DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
	`id`	bigint	NOT NULL	COMMENT 'auto-increment',
	`login_id`	varchar(45)	NOT NULL,
	`name`	varchar(45)	NOT NULL,
	`password`	varchar(45)	NOT NULL,
	`email`	varchar(45)	NOT NULL,
	`phone_number`	varchar(45)	NOT NULL,
	`created_at`	datetime	NULL,
	`updated_at`	datetime	NULL,
	`login_at`	datetime	NULL,
	`logout_at`	datetime	NULL,
	`is_signed`	tinyint	NOT NULL,
	`role`	varchar(45)	NOT NULL	COMMENT '역할(관리자/유저)'
);

DROP TABLE IF EXISTS `shopping_cart`;

CREATE TABLE `shopping_cart` (
	`id`	bigint	NOT NULL	COMMENT 'auto-increment',
	`ticket_quantity`	int	NOT NULL,
	`created_time`	datetime	NULL,
	`modified_time`	datetime	NULL,
	`status`	varchar(255)	NOT NULL	COMMENT '장바구니 상태 활성 or 비활성',
	`users_id`	bigint	NOT NULL,
	`tickets_id`	bigint	NOT NULL
);

DROP TABLE IF EXISTS `purchase_history`;

CREATE TABLE `purchase_history` (
	`id`	bigint	NOT NULL	COMMENT 'auto-increment',
	`purchase_time`	timestamp	NOT NULL,
	`ticket_quantity`	int	NOT NULL,
	`payment_information`	varchar(100)	NOT NULL,
	`total_payment_amount`	float	NOT NULL,
	`qr_code`	varchar(100)	NOT NULL	COMMENT '우선 순위 뒤로',
	`users_id`	bigint	NOT NULL,
	`tickets_id`	bigint	NOT NULL
);

DROP TABLE IF EXISTS `tickets`;

CREATE TABLE `tickets` (
	`id`	bigint	NOT NULL,
	`ticket_name`	varchar(100)	NOT NULL,
	`ticket_description`	varchar(500)	NOT NULL,
	`created_time`	datetime	NOT NULL,
	`modified_time`	datetime	NOT NULL,
	`status`	varchar(100)	NOT NULL	COMMENT '활성, 비활성을 통해 판매 상태를 관리할 수 있다',
	`remaining_ticket`	int	NOT NULL,
	`festival_api_id`	bigint	NOT NULL
);

DROP TABLE IF EXISTS `festival_api`;

CREATE TABLE `festival_api` (
	`id`	bigint	NOT NULL,
	`addr1`	varchar(1024)	NULL,
	`addr2`	varchar(1024)	NULL,
	`area_code`	varchar(1024)	NULL,
	`cat1`	varchar(100)	NULL,
	`cat2`	varchar(100)	NULL,
	`cat3`	varchar(100)	NULL,
	`content_id`	varchar(100)	NOT NULL,
	`content_type_id`	varchar(100)	NULL,
	`created_time`	datetime	NULL,
	`first_image`	varchar(100)	NULL,
	`first_image2`	varchar(100)	NULL,
	`cpyrhtDivCd`	varchar(100)	NULL	COMMENT '저작권 유형 (Type1:제1유형(출처표시-권장), Type3:제3유형(제1유형+변경금지)',
	`map_x`	varchar(100)	NULL,
	`map_y`	varchar(100)	NULL,
	`m_level`	varchar(100)	NULL,
	`modified_time`	datetime	NULL,
	`si_gun_gu_code`	varchar(100)	NULL,
	`tel`	varchar(20)	NULL,
	`title`	varchar(100)	NULL,
	`zip_code`	varchar(100)	NULL,
	`use_time_festival`	varchar(100)	NULL,
	`home_page`	varchar(100)	NULL
);

DROP TABLE IF EXISTS `auth`;

CREATE TABLE `auth` (
	`id`	bigint	NOT NULL,
	`login_id`	varchar(45)	NOT NULL,
	`phone_number`	varchar(45)	NOT NULL,
	`current_time`	datetime	NOT NULL,
	`expiration_time`	datetime	NOT NULL,
	`authentication_number`	varchar(4)	NOT NULL,
	`count`	int	NOT NULL	DEFAULT 1
);

ALTER TABLE `users` ADD CONSTRAINT `PK_USERS` PRIMARY KEY (
	`id`
);

ALTER TABLE `shopping_cart` ADD CONSTRAINT `PK_SHOPPING_CART` PRIMARY KEY (
	`id`
);

ALTER TABLE `purchase_history` ADD CONSTRAINT `PK_PURCHASE_HISTORY` PRIMARY KEY (
	`id`
);

ALTER TABLE `tickets` ADD CONSTRAINT `PK_TICKETS` PRIMARY KEY (
	`id`
);

ALTER TABLE `festival_api` ADD CONSTRAINT `PK_FESTIVAL_API` PRIMARY KEY (
	`id`
);

ALTER TABLE `auth` ADD CONSTRAINT `PK_AUTH` PRIMARY KEY (
	`id`
);

ALTER TABLE `shopping_cart` ADD CONSTRAINT `FK_users_TO_shopping_cart_1` FOREIGN KEY (
	`users_id`
)
REFERENCES `users` (
	`id`
);

ALTER TABLE `shopping_cart` ADD CONSTRAINT `FK_tickets_TO_shopping_cart_1` FOREIGN KEY (
	`tickets_id`
)
REFERENCES `tickets` (
	`id`
);

ALTER TABLE `purchase_history` ADD CONSTRAINT `FK_users_TO_purchase_history_1` FOREIGN KEY (
	`users_id`
)
REFERENCES `users` (
	`id`
);

ALTER TABLE `purchase_history` ADD CONSTRAINT `FK_tickets_TO_purchase_history_1` FOREIGN KEY (
	`tickets_id`
)
REFERENCES `tickets` (
	`id`
);

ALTER TABLE `tickets` ADD CONSTRAINT `FK_festival_api_TO_tickets_1` FOREIGN KEY (
	`festival_api_id`
)
REFERENCES `festival_api` (
	`id`
);

