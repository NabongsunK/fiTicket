CREATE TABLE `users` (
	`users_id`	bigint	NOT NULL	COMMENT 'auto-increment',
	`login_id`	varchar(45)	NOT NULL,
	`name`	varchar(45)	NOT NULL,
	`password`	varchar(45)	NOT NULL,
	`email`	varchar(45)	NOT NULL,
	`phone_number`	varchar(45)	NOT NULL,
	`created_at`	timestamp	NULL,
	`updated_at`	timestamp	NULL,
	`login_at`	timestamp	NULL,
	`logout_at`	timestamp	NULL,
	`is_signed`	tinyint	NOT NULL,
	`role`	varchar(45)	NOT NULL	COMMENT '역할(관리자/유저)'
);

CREATE TABLE `shopping_cart` (
	`cart_id`	bigint	NOT NULL	COMMENT 'auto-increment',
	`ticket_quantity`	int	NOT NULL,
	`created_time`	timestamp	NULL,
	`modified_time`	timestamp	NULL,
	`status`	varchar(255)	NOT NULL	COMMENT '장바구니 상태 활성 or 비활성',
	`users_id`	bigint	NOT NULL,
	`ticket_id`	bigint	NOT NULL
);

CREATE TABLE `ticket_purchase` (
	`purchase_id`	bigint	NOT NULL	COMMENT 'auto-increment',
	`Field3`	timestamp	NOT NULL,
	`ticket_quantity`	int	NOT NULL,
	`payment_information`	varchar(100)	NOT NULL,
	`total_payment_amount`	float	NOT NULL,
	`qr_code`	varchar(100)	NOT NULL	COMMENT '우선 순위 뒤로',
	`user_id`	bigint	NOT NULL,
	`ticket_id`	bigint	NOT NULL
);

CREATE TABLE `ticket` (
	`ticket_id`	bigint	NOT NULL,
	`ticket_name`	varchar(100)	NOT NULL,
	`ticket_description`	varchar(500)	NOT NULL,
	`created_time`	timestamp	NOT NULL,
	`modified_time`	timestamp	NOT NULL,
	`status`	varchar(100)	NOT NULL	COMMENT '활성, 비활성을 통해 판매 상태를 관리할 수 있다',
	`remaining_ticket`	int	NOT NULL,
	`festival_api_idd`	bigint	NOT NULL
);

CREATE TABLE `festival_api` (
	`festival_api_id`	bigint	NOT NULL,
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

ALTER TABLE `shopping_cart` ADD CONSTRAINT `PK_SHOPPING_CART` PRIMARY KEY (
	`cart_id`
);

ALTER TABLE `ticket_purchase` ADD CONSTRAINT `PK_TICKET_PURCHASE` PRIMARY KEY (
	`purchase_id`
);

ALTER TABLE `ticket` ADD CONSTRAINT `PK_TICKET` PRIMARY KEY (
	`ticket_id`
);

ALTER TABLE `festival_api` ADD CONSTRAINT `PK_FESTIVAL_API` PRIMARY KEY (
	`festival_api_id`
);

ALTER TABLE `auth` ADD CONSTRAINT `PK_AUTH` PRIMARY KEY (
	`auth_id`
);

