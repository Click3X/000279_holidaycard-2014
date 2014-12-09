# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.6.16)
# Database: holidaycard-2014
# Generation Time: 2014-12-09 18:14:58 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table clients
# ------------------------------------------------------------

DROP TABLE IF EXISTS `clients`;

CREATE TABLE `clients` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `zip` varchar(10) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `gift_code` varchar(8) DEFAULT NULL,
  `state` varchar(2) DEFAULT 'MN',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;

INSERT INTO `clients` (`id`, `first_name`, `last_name`, `address`, `city`, `zip`, `company`, `email`, `phone`, `gift_code`, `state`)
VALUES
	(1,'Rana','Kinney','P.O. Box 607, 1015 Malesuada Ave','Aieta','50983','Natoque Penatibus Et Consulting','senectus.et@odiotristiquepharetra.edu','(514) 702-0899','1PID','MN'),
	(2,'Hyatt','Flowers','P.O. Box 473, 9111 Tincidunt Av.','Falmouth','50202','Dolor Dolor LLC','nec.mauris.blandit@ametdapibus.com','(659) 980-8288','IUGE','MN'),
	(3,'Geoffrey','Mcguire','P.O. Box 771, 1365 Mollis Road','Terrance','4875KN','Auctor Mauris LLC','neque@mitemporlorem.edu','(334) 456-1663','ZNYL','MN'),
	(4,'Thor','Perez','P.O. Box 534, 3904 Donec Street','Henley-on-Thames','30106','Nec Urna Et Consulting','risus.varius@non.net','(288) 458-3560','EMVD','MN'),
	(5,'Ella','Martinez','647-6255 Neque Av.','Glendale','60319','A Tortor Company','nisi.Aenean@tellusAenean.org','(757) 569-0621','1CDO','MN'),
	(6,'Tanya','Floyd','P.O. Box 596, 4911 Fringilla. Rd.','Montpellier','16282','Diam Inc.','nisl.arcu@malesuadamalesuada.edu','(773) 799-2216','FADT','MN'),
	(7,'Ingrid','Ramos','576-4058 Ut, Avenue','Wenduine','87155-670','Nunc PC','sit.amet.consectetuer@non.org','(248) 856-5117','1TNN','MN'),
	(8,'Odessa','Robertson','Ap #539-6415 Nunc. Ave','Carlton','4553','Volutpat Nulla Incorporated','enim@vulputate.ca','(734) 471-0480','JYTV','MN'),
	(9,'Ariana','Moran','Ap #765-4246 Dapibus Rd.','Rotheux-Rimi�re','1657','Feugiat Placerat Velit Consulting','eros.Nam@aauctor.edu','(680) 905-0173','QERZ','MN'),
	(10,'Rae','Marks','Ap #493-297 Mi, Avenue','Kincardine','42170','Magna LLC','et.risus.Quisque@natoque.ca','(958) 554-0700','34WA','MN'),
	(11,'Timothy','Montgomery','324 Et, Rd.','Raiganj','R8 1MD','Mollis Lectus Limited','eu@DonecnibhQuisque.edu','(787) 503-5931','S9XO','MN'),
	(12,'Robert','Burt','8331 Mauris. Road','Kent','98212','Suspendisse Associates','luctus@ipsumCurabitur.net','(347) 621-6989','0ZDX','MN'),
	(13,'Cameron','Hendrix','5679 Elementum, Road','Whitchurch-Stouffville','75879-250','Dictum LLC','elit.fermentum.risus@MaurisnullaInteger.org','(822) 191-8778','1IGZ','MN'),
	(14,'Ivan','Bowers','7229 Felis Av.','Mata de Plátano','30013','Eget Ltd','nisl.Quisque.fringilla@odiosagittissemper.com','(592) 765-4966','trim(','MN'),
	(15,'Yoshio','Espinoza','Ap #825-7101 Senectus Rd.','Swan','244716','Mus Aenean Institute','cursus@sedorcilobortis.edu','(438) 375-1608','1IUN','MN'),
	(16,'Kadeem','Prince','7826 Molestie Rd.','Comblain-la-Tour','51381','Fringilla Porttitor Vulputate Company','viverra.Maecenas@Maecenas.ca','(796) 971-5587','1YDA','MN'),
	(17,'Leo','Spears','P.O. Box 981, 5543 Lobortis Road','Chichester','BY1S 8AC','Ipsum Porta Ltd','dis.parturient.montes@bibendumfermentummetus.edu','(758) 668-0396','UQQI','MN'),
	(18,'Hayes','Gross','511 Arcu Rd.','Autelbas','Y6T 4V7','Ac Company','Etiam@nonleo.net','(975) 896-6936','0BUH','MN'),
	(19,'Rama','Fry','Ap #664-588 Enim Rd.','Haverhill','0905TU','Felis Adipiscing Fringilla LLC','erat@Donectemporest.edu','(486) 903-9319','19WB','MN'),
	(20,'Elaine','Melendez','P.O. Box 786, 4256 Integer Rd.','Roccamena','79-653','Urna Suscipit Company','luctus@nonbibendumsed.edu','(428) 686-4988','0B1J','MN'),
	(21,'Lysandra','Rocha','718-7378 Sollicitudin Rd.','Chandrapur','82692-799','Velit Incorporated','Ut@aliquetdiam.co.uk','(437) 734-7376','TRPH','MN'),
	(22,'Lee','Quinn','5023 Sodales Road','Elingen','50882','Vel LLP','arcu.Sed@velitSedmalesuada.org','(604) 122-3644','1OQN','MN'),
	(23,'Callum','Odonnell','Ap #808-4932 Maecenas Av.','Val Rezzo','48848','Suspendisse Non Leo PC','purus.mauris.a@molestietellusAenean.net','(664) 970-8536','1MCC','MN'),
	(24,'Pearl','Hahn','P.O. Box 102, 1005 Eu Rd.','Bhatpara','60719','Lorem Ltd','eu.elit@rhoncusDonecest.org','(130) 486-0870','1ZOJ','MN'),
	(25,'Jena','Allen','606-8856 Commodo Rd.','H�rouxville','49-124','Aenean Institute','sagittis.Nullam.vitae@pede.com','(576) 389-8497','IEFY','MN'),
	(26,'Whoopi','Dillard','Ap #189-3324 Praesent St.','Güssing','42954','Hendrerit Consectetuer Associates','metus@fermentum.org','(580) 875-4046','06CB','MN'),
	(27,'Pamela','Potter','7436 Consequat Rd.','Guna','93494','In Tempus Inc.','facilisis.lorem@augue.com','(265) 963-6284','0ISI','MN'),
	(28,'Ferris','Pugh','Ap #212-2060 Nec Rd.','Gentinnes','41839','Suspendisse Tristique Consulting','consequat@Sednecmetus.com','(452) 272-2781','0DBD','MN'),
	(29,'Cyrus','Shepherd','943-7322 Sed Ave','Pont-Saint-Martin','0665','Nunc LLC','mus@Sed.com','(443) 732-9642','DZCB','MN'),
	(30,'Clark','Caldwell','P.O. Box 641, 8576 Ornare, Street','Outremont','90985-083','Sed Industries','justo.sit.amet@neque.com','(342) 403-7630','0ZAT','MN'),
	(31,'Clayton','Gonzales','P.O. Box 312, 8908 Fusce Rd.','Kenosha','10918','Vestibulum Lorem Company','Cras@habitant.edu','(307) 889-1920','KPOX','MN'),
	(32,'Hanae','Palmer','P.O. Box 859, 6607 Eros Road','Pontey','7982','Facilisis Eget Institute','ac@eu.org','(639) 776-4844','A0GY','MN'),
	(33,'Drake','Shelton','9152 Vel Avenue','Ambala Sadar','8393','Sed Neque Sed Corp.','id.blandit@Cum.edu','(400) 673-6330','HUFN','MN'),
	(34,'Dexter','Rivera','7617 Quisque St.','Perpignan','3128','Leo Vivamus Nibh Corporation','Morbi.metus.Vivamus@nullaCras.com','(471) 831-4507','5JZG','MN'),
	(35,'Maggie','Cline','P.O. Box 832, 5200 Fringilla Rd.','Longvilly','21916','Tincidunt PC','enim.nec.tempus@ultricesposuerecubilia.com','(982) 827-9197','0SP9','MN'),
	(36,'Lenore','Cooke','385-5000 Nisi. Av.','Satriano di Lucania','40787','Felis Ullamcorper Viverra Company','mauris@vitaesodales.org','(699) 842-4726','ASHI','MN'),
	(37,'Beverly','Donaldson','8867 Nunc St.','Bridgeport','T6H 8Y7','Iaculis Nec Eleifend Incorporated','tristique.senectus.et@nonlacinia.ca','(121) 827-8269','ASVL','MN'),
	(38,'Wayne','Preston','Ap #499-3118 Aliquet, Rd.','Castelluccio Valmaggiore','15683','Placerat Orci Lacus Limited','sit@metus.net','(566) 423-0875','1SFZ','MN'),
	(39,'Mohammad','Skinner','823 Id, Rd.','Holywell','3903','Nunc Ac Corporation','enim.mi.tempor@nibh.com','(394) 530-7344','14V7','MN'),
	(40,'Tatum','Rogers','342-2668 Enim, Ave','Bellante','41607','Eros Limited','commodo.at.libero@laciniamattisInteger.net','(744) 241-5928','1QIJ','MN'),
	(41,'Phillip','Arnold','Ap #172-1584 Velit. Avenue','Codigoro','3535','Phasellus Ornare Fusce PC','consectetuer@pedeac.com','(320) 959-0201','0JSW','MN'),
	(42,'Elliott','Anderson','P.O. Box 880, 6692 Enim St.','Fayetteville','35410','At Consulting','gravida@enimdiam.ca','(606) 171-9096','EARV','MN'),
	(43,'Dalton','Mccarthy','1594 Mauris. Rd.','Buxton','85595','Magna Praesent Interdum LLC','sed.orci.lobortis@eratsemperrutrum.co.uk','(928) 855-8702','1FNH','MN'),
	(44,'Shaine','Bean','145-7386 Consectetuer Av.','Polesella','68201','Enim Consequat Purus LLC','nascetur.ridiculus@quisdiamPellentesque.org','(973) 652-8927','1XRR','MN'),
	(45,'Zia','Harris','7289 Nec Av.','Madison','DD25 7TJ','Lorem Ipsum Limited','massa@ut.co.uk','(412) 553-4431','04TX','MN'),
	(46,'Herman','Barnes','1528 Ac Road','Burhanpur','46471','Ligula Aliquam Incorporated','magna@lacusvestibulum.com','(700) 226-1670','SICD','MN'),
	(47,'Alexis','Bauer','520-691 Orci. Ave','Auxerre','37936-317','Ridiculus Mus Proin Limited','porttitor.vulputate.posuere@a.ca','(347) 446-7227','FMP1','MN'),
	(48,'Jamalia','Moses','P.O. Box 971, 8079 Ut Avenue','Dover','6945','Dui Corp.','tempor.diam@Fuscedolor.net','(290) 588-3690','1EHN','MN'),
	(49,'Sacha','Summers','688-362 Aliquam Ave','Grimbergen','62-876','Vel Consulting','a.auctor@nibhvulputatemauris.co.uk','(920) 161-1446','KBFF','MN'),
	(50,'Mark','Carson','1873 Placerat, Road','Warrington','50047','Consectetuer Euismod Est Corp.','erat.Vivamus@telluslorem.net','(466) 633-3781','9DGU','MN'),
	(51,'Chelsea','Holland','219-198 Erat Avenue','Grezzana','V7J 7V9','Odio Aliquam Vulputate Foundation','ridiculus.mus.Aenean@Suspendissealiquet.ca','(765) 749-4046','S9GW','MN'),
	(52,'Cain','Colon','1264 Eleifend, St.','Coalville','66600','Pharetra Company','vel.lectus@turpis.net','(733) 255-6270','GEGX','MN'),
	(53,'Kareem','Richardson','1334 Vehicula. Rd.','Saint-Eug?ne-de-Ladri?re','25857','Ligula Aenean Gravida LLP','sapien.Nunc.pulvinar@egestasFuscealiquet.co.uk','(119) 372-4224','09SG','MN'),
	(54,'Merrill','Wallace','2146 Tempus St.','Neum�nster','4518','Amet Consectetuer Inc.','elit@nunc.net','(910) 428-1421','QOH7','MN'),
	(55,'Quail','Rowe','5326 Dui, Rd.','Kontich','56-327','A Facilisis Non Ltd','Nunc.ac.sem@porttitortellusnon.ca','(279) 354-3853','0PWS','MN'),
	(56,'Reuben','Wilder','Ap #156-8727 Orci, Rd.','Reinbek','94505','Sapien Consulting','malesuada.fringilla@Aliquameratvolutpat.co.uk','(960) 356-2266','1TEJ','MN'),
	(57,'Katell','Gilmore','Ap #818-6731 Cras Road','Luttre','50907','Porta Inc.','aptent@vulputate.com','(974) 784-5670','ZK2Z','MN'),
	(58,'Amber','Mills','P.O. Box 954, 3647 Morbi Street','Bracknell','11-651','In Tempus LLC','Morbi.metus.Vivamus@sed.co.uk','(825) 277-0673','1R9G','MN'),
	(59,'Cameran','Sanford','481-4319 Sodales Road','Ahmadnagar','200746','Non Dui Inc.','Cras.vulputate@Crasvehicula.com','(402) 716-8962','00EW','MN'),
	(60,'Dorothy','Henderson','475-6235 Non Avenue','Montebello sul Sangro','TX1B 6WX','Donec LLC','urna.justo@laciniamattis.com','(527) 247-7211','KOIM','MN'),
	(61,'Kylan','Sanford','787-1495 Pede, Rd.','Vollezele','30810','Et Rutrum Inc.','varius@vestibulum.com','(557) 889-3454','0PVV','MN'),
	(62,'Brody','Quinn','7933 Facilisis Avenue','Montgomery','2914NZ','Nec Mauris Associates','Integer.tincidunt.aliquam@eunulla.org','(158) 227-5005','1CU5','MN'),
	(63,'Lester','Duke','6659 Nullam Road','Emblem','5022','Amet Consectetuer Adipiscing Corporation','dolor@ornaresagittisfelis.ca','(911) 257-7556','0XSI','MN'),
	(64,'Piper','Howe','481-8056 A, Rd.','Imphal','9241','Eu Eleifend Ltd','mattis.ornare.lectus@acturpisegestas.edu','(753) 853-5730','08EA','MN'),
	(65,'Bianca','Hewitt','P.O. Box 195, 7892 Elit, Avenue','Rycroft','16684-079','Arcu LLP','sit@elementumategestas.ca','(411) 469-8982','1SMG','MN'),
	(66,'Oscar','Merrill','258-9563 Penatibus Rd.','Ficarolo','A42 7QX','Malesuada Integer Id Incorporated','vulputate@liberoDonecconsectetuer.ca','(865) 447-0482','YIJO','MN'),
	(67,'Delilah','Dodson','Ap #272-162 Molestie St.','Sangli','27257','Diam Eu Inc.','Morbi.accumsan.laoreet@mattis.org','(658) 682-6792','0J7T','MN'),
	(68,'Phoebe','Benton','1030 Lorem Avenue','Kent','H9L 9N7','Molestie Sed Corp.','ut@diam.net','(719) 235-0533','HY1D','MN'),
	(69,'Colorado','Hoffman','956-4370 Mauris Rd.','Lamont','19335','Nulla Aliquet Proin Institute','egestas.ligula.Nullam@nec.edu','(655) 330-5276','54BB','MN'),
	(70,'Myles','Sanchez','752-5780 Eu Street','Birmingham','03043','Purus Ac Industries','dui.nec.tempus@iaculisenimsit.co.uk','(663) 919-8528','G2KO','MN'),
	(71,'Candice','Rios','232-9610 Vitae Street','Vihari','8027','Magna Consulting','ut@interdumligula.com','(251) 298-6532','18AM','MN'),
	(72,'Knox','Swanson','P.O. Box 475, 5741 Nonummy Road','Champigny-sur-Marne','9727','Egestas LLC','enim@liberoProin.net','(679) 237-8678','GEAN','MN'),
	(73,'Byron','Byers','Ap #114-5893 Aliquet. Rd.','Darbhanga','6726','Urna Et Limited','mus.Donec.dignissim@Integermollis.ca','(855) 864-5880','YEMH','MN'),
	(74,'Lani','Welch','P.O. Box 887, 9653 Luctus. Rd.','Saint-Dié-des-Vosges','28363','Rutrum Non Hendrerit Foundation','enim@dapibusrutrumjusto.net','(326) 741-1305','YAF1','MN'),
	(75,'Adam','Cooley','Ap #831-8775 Magna Ave','Biloxi','1134','Laoreet Posuere Enim Institute','et.ultrices.posuere@orci.net','(172) 356-0888','1OPE','MN'),
	(76,'Candace','Drake','8459 Et Ave','Ceuta','482083','Ullamcorper Duis At Foundation','at.libero@convallisante.com','(698) 943-1294','V311','MN'),
	(77,'Kiona','Luna','8604 Augue St.','Caerphilly','192490','Ligula LLC','at.iaculis@Nuncsollicitudincommodo.com','(987) 811-5669','0QA6','MN'),
	(78,'Jameson','Mccarty','712-4952 Arcu Ave','Nizip','71355','Et Malesuada Fames LLP','Pellentesque.habitant.morbi@varius.ca','(493) 936-3257','DLKV','MN'),
	(79,'Shad','Taylor','534-5428 Proin Rd.','Kaster','K0K 5J1','Varius Orci Consulting','quam.vel.sapien@loremluctus.com','(281) 439-5592','0H9O','MN'),
	(80,'Cora','Bolton','P.O. Box 491, 2008 Lorem Street','The Hague','3870','Nunc Incorporated','magna.a@malesuadavel.ca','(985) 694-1614','1VVW','MN'),
	(81,'Mufutau','Shaffer','1145 Mattis Av.','Zwijndrecht','42134','Vulputate Incorporated','ac@adlitora.org','(499) 588-3148','1RFA','MN'),
	(82,'Tarik','Battle','P.O. Box 228, 3944 Mauris Avenue','Meux','8280','Tempor Bibendum Donec Corp.','Donec.fringilla@sitamet.co.uk','(611) 591-9749','2AQM','MN'),
	(83,'Illana','Cantu','3842 Leo, Street','Laces/Latsch','32925','Et Ultrices Ltd','interdum.enim.non@nonsollicitudina.edu','(583) 528-0099','B2BD','MN'),
	(84,'Virginia','Kelley','746-9101 Dui, Ave','Valenciennes','9502CD','In Institute','ut.molestie@erat.edu','(470) 184-1587','LR5H','MN'),
	(85,'Emery','Rosales','Ap #228-8564 Sed, St.','Milmort','1151FY','Turpis Non Enim Inc.','nulla.In@nulla.com','(705) 227-9402','BHXJ','MN'),
	(86,'Wyoming','Phelps','P.O. Box 241, 9470 Morbi Avenue','Ponoka','95-018','Ipsum Sodales Purus Institute','arcu@necmollisvitae.com','(742) 162-0830','1YAU','MN'),
	(87,'Tanya','Hopper','Ap #424-3436 Euismod Avenue','Kansas City','5866','Et Associates','erat.volutpat.Nulla@aliquet.co.uk','(761) 620-5385','J5J1','MN'),
	(88,'Kim','Peters','9466 Lorem Road','Gasp?','9596BP','Duis Company','ac@eleifend.ca','(116) 363-6645','1QIC','MN'),
	(89,'Jermaine','Holden','2216 Odio St.','Casole d\'Elsa','1286','Cras Lorem Industries','lorem.fringilla@nequevenenatis.co.uk','(592) 149-5340','JTKN','MN'),
	(90,'Arsenio','Dalton','P.O. Box 116, 4914 Suscipit Rd.','Guysborough','3849','Diam Associates','et@Aliquamauctorvelit.edu','(458) 251-7151','0P3D','MN'),
	(91,'Yvette','Joseph','9170 Vel Ave','St. John\'s','15441','Quis Tristique Institute','Praesent.eu@fringilla.com','(993) 224-0949','0TWQ','MN'),
	(92,'Merritt','Faulkner','6410 Est, Avenue','Noduwez','8341','Libero Inc.','consectetuer.mauris@consequatnecmollis.net','(436) 322-0689','MMLY','MN'),
	(93,'Fuller','Reid','Ap #447-4385 Enim. Rd.','Duns','MC5 3RD','Orci LLC','faucibus@aliquetsem.ca','(244) 365-5212','1PTN','MN'),
	(94,'Branden','York','485-5525 Semper, Ave','Tranent','40800','Donec Incorporated','lacus.Mauris@lectusconvallisest.com','(948) 846-2766','PK8X','MN'),
	(95,'Ebony','Soto','Ap #739-6911 Dignissim Rd.','Bard','41301','Nunc Nulla Industries','mollis@feugiatSednec.edu','(645) 292-4517','0OQZ','MN'),
	(96,'Gloria','Knight','1294 Urna Av.','Hamme','07557','Et Malesuada Fames Corp.','molestie.arcu@nunc.org','(663) 871-7797','0CR0','MN'),
	(97,'Carolyn','Ramos','Ap #539-9839 Proin St.','Santa Fiora','4677','Eu Consulting','feugiat.metus@tortor.ca','(728) 274-0367','1RQR','MN'),
	(98,'Constance','Griffith','P.O. Box 652, 5053 Vel Road','Bhatinda','451927','Orci Corporation','eu.odio@ultricesposuere.edu','(449) 931-5330','IRXB','MN'),
	(99,'Blake','Merrill','877-8210 Primis Rd.','Strombeek-Bever','5936','Pharetra Quisque Ac Incorporated','lacus@interdumenim.org','(461) 240-5314','PX5I','MN'),
	(100,'Shoshana','Dickerson','P.O. Box 331, 9990 Dui St.','Leominster','62552','Semper Dui Lectus Corp.','Cum.sociis@blandit.ca','(149) 886-8292','1EKB','MN');

/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table orders
# ------------------------------------------------------------

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `ref_client_id` tinyint(3) DEFAULT NULL,
  `state` varchar(3) DEFAULT NULL,
  `size` varchar(11) DEFAULT NULL,
  `design` varchar(20) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `zip` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table states
# ------------------------------------------------------------

DROP TABLE IF EXISTS `states`;

CREATE TABLE `states` (
  `state_id` smallint(5) unsigned NOT NULL AUTO_INCREMENT COMMENT 'PK: Unique state ID',
  `state_name` varchar(32) COLLATE utf8_unicode_ci NOT NULL COMMENT 'State name with first letter capital',
  `state_abbr` varchar(8) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'Optional state abbreviation (US is 2 capital letters)',
  PRIMARY KEY (`state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;

INSERT INTO `states` (`state_id`, `state_name`, `state_abbr`)
VALUES
	(1,'Alabama','AL'),
	(2,'Alaska','AK'),
	(3,'Arizona','AZ'),
	(4,'Arkansas','AR'),
	(5,'California','CA'),
	(6,'Colorado','CO'),
	(7,'Connecticut','CT'),
	(8,'Delaware','DE'),
	(9,'District of Columbia','DC'),
	(10,'Florida','FL'),
	(11,'Georgia','GA'),
	(12,'Hawaii','HI'),
	(13,'Idaho','ID'),
	(14,'Illinois','IL'),
	(15,'Indiana','IN'),
	(16,'Iowa','IA'),
	(17,'Kansas','KS'),
	(18,'Kentucky','KY'),
	(19,'Louisiana','LA'),
	(20,'Maine','ME'),
	(21,'Maryland','MD'),
	(22,'Massachusetts','MA'),
	(23,'Michigan','MI'),
	(24,'Minnesota','MN'),
	(25,'Mississippi','MS'),
	(26,'Missouri','MO'),
	(27,'Montana','MT'),
	(28,'Nebraska','NE'),
	(29,'Nevada','NV'),
	(30,'New Hampshire','NH'),
	(31,'New Jersey','NJ'),
	(32,'New Mexico','NM'),
	(33,'New York','NY'),
	(34,'North Carolina','NC'),
	(35,'North Dakota','ND'),
	(36,'Ohio','OH'),
	(37,'Oklahoma','OK'),
	(38,'Oregon','OR'),
	(39,'Pennsylvania','PA'),
	(40,'Rhode Island','RI'),
	(41,'South Carolina','SC'),
	(42,'South Dakota','SD'),
	(43,'Tennessee','TN'),
	(44,'Texas','TX'),
	(45,'Utah','UT'),
	(46,'Vermont','VT'),
	(47,'Virginia','VA'),
	(48,'Washington','WA'),
	(49,'West Virginia','WV'),
	(50,'Wisconsin','WI'),
	(51,'Wyoming','WY');

/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table tshirts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tshirts`;

CREATE TABLE `tshirts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `design_id` varchar(20) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tshirts` WRITE;
/*!40000 ALTER TABLE `tshirts` DISABLE KEYS */;

INSERT INTO `tshirts` (`id`, `design_id`, `name`)
VALUES
	(1,'skyline_blue','Skyline Blue'),
	(2,'skyline_white','Skyline White'),
	(3,'2015_blue','2015 Blue'),
	(4,'2015_white','2015 White'),
	(5,'selfie_blue','Selfie Blue'),
	(6,'selfie_white','Selfie White');

/*!40000 ALTER TABLE `tshirts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table videos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `videos`;

CREATE TABLE `videos` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `video_id` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;

INSERT INTO `videos` (`id`, `video_id`, `created_at`)
VALUES
	(1,'vacation-slopes','2014-12-09 13:08:12');

/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
