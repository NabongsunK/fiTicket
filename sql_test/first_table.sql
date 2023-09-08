CREATE TABLE `users` (
	`users_id`	bigint	NOT NULL	COMMENT 'auto-increment',
	`name`	varchar(100)	NOT NULL,
	`password`	varchar(255)	NOT NULL,
	`mobile_number`	varchar(11)	NOT NULL,
	`email`	varchar(100)	NOT NULL,
	`role`	varchar(20)	NOT NULL	COMMENT '회원,비회원,관리자',
	`created_time`	timestamp	NOT NULL,
	`modified_time`	timestamp	NOT NULL,
	`authentication_status`	tinyint	NOT NULL
);

CREATE TABLE `events` (
	`event_id`	bigint	NOT NULL	COMMENT 'auto-increment',
	`event_name`	varchar(255)	NOT NULL,
	`venue`	varchar(255)	NOT NULL	COMMENT '지역명',
	`event_image`	varchar(255)	NULL	COMMENT '이미지 파일 경로 or URL',
	`landline_number`	varchar(11)	NULL,
	`introduction`	varchar(500)	NULL,
	`event_start_date`	date	NULL,
	`event_end_date`	date	NULL,
	`operating_start_time`	time	NULL,
	`operating_end_time`	time	NULL,
	`created_time`	timestamp	NOT NULL,
	`modified_time`	timestamp	NOT NULL,
	`recommendation`	VARCHAR(255)	NULL	COMMENT '관리자가 추천 여부 판단'
);

CREATE TABLE `shopping_cart` (
	`cart_id`	bigint	NOT NULL	COMMENT 'auto-increment',
	`ticket_quantity`	int	NOT NULL,
	`created_time`	timestamp	NULL,
	`modified_time`	timestamp	NULL,
	`status`	varchar(255)	NOT NULL	COMMENT '장바구니 상태 활성 or 비활성',
	`user_id`	bigint	NOT NULL,
	`voucher_id`	bigint	NOT NULL
);

CREATE TABLE `ticket_purchase` (
	`purchase_id`	bigint	NOT NULL	COMMENT 'auto-increment',
	`Field3`	timestamp	NOT NULL,
	`ticket_quantity`	int	NOT NULL,
	`payment_information`	varchar(100)	NOT NULL,
	`total_payment_amount`	float	NOT NULL,
	`user_id`	bigint	NOT NULL,
	`qr_code`	varchar(100)	NOT NULL	COMMENT '우선 순위 뒤로',
	`voucher_id`	bigint	NOT NULL
);

CREATE TABLE `voucher` (
	`voucher_id`	bigint	NOT NULL	COMMENT 'auto-increment',
	`voucher_name`	varchar(100)	NOT NULL,
	`voucher_description`	varchar(500)	NOT NULL,
	`created_time`	timestamp	NOT NULL,
	`modified_time`	timestamp	NOT NULL,
	`status`	varchar(255)	NOT NULL	COMMENT '활성, 비활성을 통해 판매 상태를 관리할 수 있다',
	`remaining_ticket`	int	NOT NULL,
	`api_id`	bigint	NOT NULL
);

CREATE TABLE `ticket` (
	`ticket_id`	bigint	NOT NULL,
	`ticket_name`	varchar(100)	NOT NULL,
	`ticket_description`	varchar(500)	NOT NULL,
	`created_time`	timestamp	NOT NULL,
	`modified_time`	timestamp	NOT NULL,
	`status`	varchar(100)	NOT NULL	COMMENT '활성, 비활성을 통해 판매 상태를 관리할 수 있다',
	`remaining_ticket`	int	NOT NULL
);

CREATE TABLE `api` (
	`api_id`	bigint	NOT NULL,
	`addr1`	varchar(1024)	NULL,
	`addr2`	varchar(1024)	NULL,
	`area_code`	varchar(1024)	NOT NULL,
	`book_tour`	varchar(1024)	NULL,
	`cat1`	varchar(100)	NULL,
	`cat2`	varchar(100)	NULL,
	`cat3`	varchar(100)	NULL,
	`content_id`	varchar(100)	NULL,
	`content_type_id`	varchar(100)	NULL,
	`created_time`	timestamp	NULL,
	`first_image`	varchar(100)	NULL,
	`first_image2`	varchar(100)	NULL,
	`cpyrhtDivCd`	varchar(100)	NULL,
	`map_x`	varchar(100)	NULL,
	`map_y`	varchar(100)	NULL,
	`m_level`	varchar(100)	NULL,
	`modified_time`	timestamp	NULL,
	`si_gun_gu_code`	varchar(100)	NULL,
	`tel`	varchar(20)	NULL,
	`title`	varchar(100)	NULL,
	`zip_code`	varchar(100)	NULL
);

CREATE TABLE `auth` (
	`auth_id`	bigint	NOT NULL,
	`login_id`	varchar(45)	NOT NULL,
	`phone_number`	varchar(45)	NOT NULL,
	`current_time`	datetime	NOT NULL,
	`expiration_time`	datetime	NOT NULL,
	`authentication_number`	varchar(8)	NOT NULL,
	`count`	int	NOT NULL
);

ALTER TABLE `users` ADD CONSTRAINT `PK_USERS` PRIMARY KEY (
	`users_id`
);

ALTER TABLE `events` ADD CONSTRAINT `PK_EVENTS` PRIMARY KEY (
	`event_id`
);

ALTER TABLE `shopping_cart` ADD CONSTRAINT `PK_SHOPPING_CART` PRIMARY KEY (
	`cart_id`
);

ALTER TABLE `ticket_purchase` ADD CONSTRAINT `PK_TICKET_PURCHASE` PRIMARY KEY (
	`purchase_id`
);

ALTER TABLE `voucher` ADD CONSTRAINT `PK_VOUCHER` PRIMARY KEY (
	`voucher_id`
);

ALTER TABLE `ticket` ADD CONSTRAINT `PK_TICKET` PRIMARY KEY (
	`ticket_id`
);

ALTER TABLE `api` ADD CONSTRAINT `PK_API` PRIMARY KEY (
	`api_id`
);

ALTER TABLE `auth` ADD CONSTRAINT `PK_AUTH` PRIMARY KEY (
	`auth_id`
);

ALTER TABLE `shopping_cart` ADD CONSTRAINT `FK_users_TO_shopping_cart_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `users` (
	`users_id`
);

ALTER TABLE `shopping_cart` ADD CONSTRAINT `FK_voucher_TO_shopping_cart_1` FOREIGN KEY (
	`voucher_id`
)
REFERENCES `voucher` (
	`voucher_id`
);

ALTER TABLE `ticket_purchase` ADD CONSTRAINT `FK_users_TO_ticket_purchase_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `users` (
	`users_id`
);

ALTER TABLE `ticket_purchase` ADD CONSTRAINT `FK_voucher_TO_ticket_purchase_1` FOREIGN KEY (
	`voucher_id`
)
REFERENCES `voucher` (
	`voucher_id`
);

ALTER TABLE `voucher` ADD CONSTRAINT `FK_api_TO_voucher_1` FOREIGN KEY (
	`api_id`
)
REFERENCES `api` (
	`api_id`
);

