USE `bidding_project`;

CREATE TABLE `manufacturer regristration` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`email` VARCHAR( 255 ) NOT NULL,
	`password` VARCHAR( 255 ) NOT NULL,
	`NameFirst` VARCHAR( 255 ) NOT NULL,
	`NameLast` VARCHAR( 255 ) NOT NULL,
	`Phone` VARCHAR( 255 ) NOT NULL,
	`Companyname` VARCHAR( 255 ) NOT NULL,
	`Streetaddress` VARCHAR( 255 ) NOT NULL,
	`State` VARCHAR( 255 ) NOT NULL,
	`country` VARCHAR( 255 ) NOT NULL,
	`product` VARCHAR( 255 ) NOT NULL,
	`catorgory` VARCHAR( 255 ) NOT NULL,
	PRIMARY KEY ( `id` ) );