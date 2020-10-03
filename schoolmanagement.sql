create database schoolmanagement;
create table admin(
   adminname varchar(30) PRIMARY key ,
   password varchar(10)

)
CREATE table employee
(
   id int(10) PRIMARY key AUTO_INCREMENT,
   firstname varchar(30) not null,
   lastname varchar(30) not null,
   position varchar(10),
   age varchar(10),
    contect varchar(10),
    email varchar(30),
    gender varchar(10),
    parmanenetaddress varchar(100),
    presentaddress varchar(100)
    
    
 );
CREATE table student
(
   id int(10) PRIMARY key AUTO_INCREMENT,
   firstname varchar(30) not null,
   lastname varchar(30) not null,
   class varchar(10),
   year varchar(10),
   dob varchar(10),
    contect varchar(10),
    email varchar(30),
    gender varchar(10),
    parmanenetaddress varchar(100),
    presentaddress varchar(100)
    
    
 );
    

CREATE table teacher
(
   id int(10) PRIMARY key AUTO_INCREMENT,
   firstname varchar(30) not null,
   lastname varchar(30) not null,
   position varchar(10),
   age varchar(10),
    contect varchar(10),
    email varchar(30),
    gender varchar(10),
    parmanenetaddress varchar(100),
    presentaddress varchar(100)
    
    
 );
    
    