create table course(
course_code varchar(45) primary key,
course_name varchar(45),
lecture_unit int,
lab_unit int,
lecture_hours int,
lab_hours int,
semester enum("1st Semester", "2nd Semester"),
year_level enum("1st Year", "2nd Year", "3rd Year", "4th Year")
);