-- Create Schema
CREATE SCHEMA `company-motto`;

-- -----------------------------------------------------
-- Table `company-motto`.`industry`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `company-motto`.`industry` (
  `industry_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `industry_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`industry_id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Table `company-motto`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `company-motto`.`company` (
  `company_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `industry_id` BIGINT(20) NOT NULL,
  `company_name` VARCHAR(255) NULL DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`company_id`),
  KEY `fk_industry` (`industry_id`),
  CONSTRAINT `fk_industry` FOREIGN KEY (`industry_id`) REFERENCES `industry` (`industry_id`)  
  )
ENGINE=InnoDB
AUTO_INCREMENT = 1;



-- -----------------------------------------------------
-- Table `company-motto`.`motto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `company-motto`.`motto` (
  `motto_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `company_id` BIGINT(20) NOT NULL,
  `phrase_1` VARCHAR(255) NULL DEFAULT NULL,
  `phrase_2` VARCHAR(255) NULL DEFAULT NULL,
  `phrase_3` VARCHAR(255) NULL DEFAULT NULL,
  `phrase_4` VARCHAR(255) NULL DEFAULT NULL,
  `phrase_5` VARCHAR(255) NULL DEFAULT NULL,
  `phrase_6` VARCHAR(255) NULL DEFAULT NULL,
  `phrase_7` VARCHAR(255) NULL DEFAULT NULL,
  `phrase_8` VARCHAR(255) NULL DEFAULT NULL,
  `phrase_9` VARCHAR(255) NULL DEFAULT NULL,
  `phrase_10` VARCHAR(255) NULL DEFAULT NULL,
  `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  PRIMARY KEY (`motto_id`),
  KEY `fk_company` (`company_id`),
  CONSTRAINT `fk_company` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) 
  )
ENGINE=InnoDB
AUTO_INCREMENT = 1;
