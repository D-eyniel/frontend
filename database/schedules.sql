create table schedules(
schedule_id int auto_increment primary key,
start_time time,
end_time time,
instructor_id int,
course_code varchar(45),

foreign key (instructor_id)
references instructor(instructor_id)
on delete cascade
on update cascade,

foreign key (course_code)
references course(course_code)
on delete cascade
on update cascade
);