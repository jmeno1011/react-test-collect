-- DATABASE.TABLE = > opentutorials.jwt_test_table
-- 대충 만듬
create table opentutorials.jwt_test_table(
	_id int primary key auto_increment,
    id varchar(32) not null,
    password varchar(100) not null);