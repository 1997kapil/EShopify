CREATE TABLE Contact_Us_Form
(
    Id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    Name VARCHAR(30) NOT NULL,
    Email Address VARCHAR(200) NULL,
    Phone_no INT NOT NULL,
    Message VARCHAR(500) NULL
);



create table help_center(
Id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
OrderNo varchar(20),
ProductDetails varchar(500),
ProblemType varchar(100),
Descriptions varchar(2000)
	
)