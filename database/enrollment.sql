create table enrollment (
enrollment_id int auto_increment primary key,
student_number int (9) unsigned not null,
registration_status enum("Regular", "Irregular"),
year_level enum("1st Year", "2nd Year", "3rd Year", "4th Year"),
semester enum("1st Semester", "2nd Semester"),
school_year varchar(9) not null,
user_id int,
department_code varchar(45),

foreign key (student_number) 
references student(student_number)
on delete cascade
on update cascade,

foreign key (user_id) 
references users(user_id)
on delete cascade
on update cascade,

foreign key (department_code) 
references department(department_code)
on delete cascade
on update cascade
);