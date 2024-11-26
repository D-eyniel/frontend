create table users(
user_id int primary key,
username varchar(45) not null unique,
password_hash varchar(255) not null,
email varchar(45),
user_role enum("Admin", "Registrar", "Officer")
);
