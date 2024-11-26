create table instructor (
instructor_id int primary key,
first_name varchar(45) not null,
last_name varchar(45) not null,
email varchar(45),
contact_number varchar(45),
department_code varchar(56),

foreign key (department_code)
references department(department_code)
on delete cascade
on update cascade
)