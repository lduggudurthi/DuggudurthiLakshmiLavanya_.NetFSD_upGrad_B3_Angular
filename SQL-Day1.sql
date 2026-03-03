Create database EventDb;

Use EventDb;



Create table userinfo(
EmailId varchar(50) primary key,
UserName varchar(50) NOT NULL,
Role varchar(20) NOT NULL,
Password varchar(20) NOT NULL,
constraint ch_UserName_Length check(len(UserName) between 1 and 50),
constraint ch_Role check(Role IN('Admin','Participant')),
constraint ch_Password_len check(len(Password) between 6 and 20)
);


Create table EventDetails(
EventId int primary key,
EventName varchar(50) not null,
EventCategory varchar(50) not null,
EventDate Datetime not null,
Description varchar(255) null,
Status varchar(20) not null,
constraint chk_EventName_len check(len(EventName) between 1 and 50),
constraint chk_EventCategory_len check(len(EventCategory) between 1 and 50),
constraint chk_Status check(Status in ('Active' , 'In-Active'))
);


create table SpeakersDetails(
SpeakerId int primary key,
SpeakerName varchar(50) not null,
constraint chk_SpeakerName_len check(len(SpeakerName) between 1 and 50)
);

create table SessionInfo(
SessionId int primary key,
EventId int not null,
SessionTitle varchar(50) not null,
SpeakerId int not null,
Description varchar(255) null,
SessionStart datetime not null,
SessionEnd datetime not null,
SessionUrl varchar(255) null,
constraint fk_Session_Event foreign key(EventId) references EventDetails(EventId),
constraint fk_Session_Speaker foreign key(SpeakerId) references SpeakersDetails(Speakerid),
constraint chk_SessionTitle_len check(len(SessionTitle) between 1 and 50)
);


create table ParticipantDetails(
Id int primary key,
ParticipantEmailId varchar(50) not null,
EventId int not null,
SessionId int not null,
IsAttended bit not null,
constraint fk_Participant_User foreign key(ParticipantEmailId) references UserInfo(EmailId),
constraint fk_Participant_Event foreign key(EventId) references  EventDetails(EventId),
constraint fk_participant_session foreign key(SessionId) references SessionInfo(SessionId),
constraint chk_IsAttended check (IsAttended in(0,1))
);


INSERT INTO UserInfo VALUES
('lavanya@gmail.com', 'Lavanya', 'Admin', 'lavanya@123'),
('satya@gmail.com', 'Satya', 'Participant', 'satya@123');


insert into EventDetails values(532,'Fest','Technology','2022-10-03','Farewell party','Active');
INSERT INTO EventDetails VALUES
(1, 'Tech Fest', 'Technology', '2025-04-10',
 'Annual Event', 'Active');

insert into SpeakersDetails values (521,'Satya');





 insert into SessionInfo values
(1, 1, 'Jaava Workshop', 521,
 'Intro to java',
 '2026-04-10 10:00:00',
 '2026-04-10 12:00:00',
 'www.javalink.com');

 INSERT INTO ParticipantDetails VALUES(1, 'lavanya@gmail.com', 1, 1, 1);
 INSERT INTO ParticipantDetails VALUES(2, 'satya@gmail.com', 1, 1, 1);


 select * from userinfo;
 select *from EventDetails;
 select* from SpeakersDetails;
 select* from SessionInfo;
 select *from ParticipantDetails;