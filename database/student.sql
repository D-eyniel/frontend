create table student (
student_number int (9) unsigned primary key,
first_name varchar (45) not null,
last_name varchar (45) not null,
middle_name varchar (45),
address varchar (45),
date_of_birth date not null,
gender enum("M", "F") not null,
contact_number int(11),
email varchar (45) not null 
);