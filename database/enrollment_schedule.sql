create table enrollment_schedule (
enrollment_schedule_id int auto_increment primary key,
enrollment_id int,
schedule_id int,

foreign key (enrollment_id)
references enrollment(enrollment_id)
on delete cascade
on update cascade,

foreign key (schedule_id)
references schedules(schedule_id)
on delete cascade
on update cascade
);