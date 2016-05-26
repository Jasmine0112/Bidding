USE `bidding_project`;

CREATE TABLE `manufacturer regristration` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`email` VARCHAR( 255 ) NOT NULL,
	`NameFirst` VARCHAR( 255 ) NOT NULL,
	`NameLast` VARCHAR( 255 ) NOT NULL,
	`Phone` VARCHAR( 255 ) NOT NULL,
	`Companyname` VARCHAR( 255 ) NOT NULL,
	`quantity` VARCHAR( 255 ) NOT NULL,
	`Category` VARCHAR( 255 ) NOT NULL,
	`Industry` VARCHAR( 255 ) NOT NULL,
	`Product image` VARCHAR( 255 ) NOT NULL,
	`Comments` VARCHAR( 255 ) NOT NULL,
    `Asking Price` VARCHAR( 255) NOT NULL,
	PRIMARY KEY ( `id` ) );