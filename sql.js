///////////////////////////////////////////  Basics //////////////////////////////////////////

// 
// To create database : CREATE DATABASE <database_name>; 
// check if not created then : CREATE DATABASE IF NOT EXISTS <database_name>; 
// Delete a database : DROP DATABASE <database_name>;[delete a database]
// Select database for use : USE <database_name>;

// Create a table : CREATE TABLE <table_name> (column_1 datatype contraints, column_2 datatype constraints, ...);
// Check if table already exists then : CREATE TABLE IF NOT EXISTS <table_name> (column_1 datatype contraints, column_2 datatype constraints, ...);
// DROP TABLE <table_name>;[delete a table]

// Show all databases: SHOW DATABASES;
// Show all tables : SHOW TABLES; 

// Select all data of table : SELECT * FROM <table_name>;
// Select specific column of table : SELECT column_1, column_2, ... FROM <table_name>;
// Insert data in table : INSERT INTO <table_name> (column_1, column_2, ...) VALUES (value_1, value_2, ...);


////////////////////////////////////////// keys /////////////////////////////////////////

// Primary Key ==> It cannot be NULL and must be unique. one table can have only one primary key.
// Foreign Key ==> in 2 tables one table's primary key is used as a foreign key in another table. It can accept Null values. Also it can accept duplicate values. one table can have multiple foreign keys.
// Unique Key ==> A unique key constraint ensures that all values in a column are different from each other. It can accept NULL values, but only one NULL value is allowed.

//////////////////////////  constraints /////////////////////////////////////////

// constraints is a rule for data in the table.
// NOT NULL ==> column cannot be empty. eg: CREATE TABLE USERS (ID INT NOT NULL, NAME VARCHAR(255) NOT NULL);
// Unique => all values in a column must be unique. eg: CREATE TABLE USERS (ID INT UNIQUE, NAME VARCHAR(255) UNIQUE);
// primary key => make column unique and not null + only one column can be primary key.
// forign key => other table's primary key can become new table column's forign key. eg: CREATE TABLE temp(cust_id int, forign key (cust_id) references customer(id));
// DEFAULT => set the default value of column. eg: salary int default 25000;
// CHECK => to check the condition before storing data in column. eg: create table newTab(age int check (age >= 18));

/////////////////////////////////////////  Important command and keywords ////////////////////////////////////////////

// => SELECT : SELECT <column name> from <table name>;

// => DISTINCT keyword : removes duplicates in column . eg: SELECT DISTINCT city from students

// => WHERE : to define condition || We use multiple operator with WHERE. eg: +,-,*,/,%,=, !=, >, <, AND , OR, NOT, IN, BETWEEN, ALL, LIKE, ANY, &, |
// eg1 : SELECT * from students WHERE marks+10 > 100;
// eg2 : SELECT * FROM students WHERE marks BETWEEN 80 AND 90;
// eg3 : SELECT * FROM students WHERE city IN ("DELHI","MUMBAI");
// eg4 : SELECT * FROM students WHERE city NOT IN ("DELHI","MUMBAI");
// eg5 : SELECT * FROM STUDENTS WHERE marks >=80 AND city = "mumbai";

// => LIMIT: apply limit on rows.
// eg1: SELECT * FROM students WHERE marks > 75 LIMIT 3;

// => ORDER BY : get rows in ascending or decending order;
// eg1: SELECT * FROM students ORDER BY city ASC;
// eg2: SELECT * FROM students ORDER BY MARKS DESC;

// => GROUP BY : used to create groups on any basis condition.
// eg: SELECT city, COUNT(name) FROM students GROUP BY city; Here first city column is selected > made group of cities > count name that which name is from which city and return total name in each city. we can also do it for multiple columns like select city,name,count(rollNo) from students group by city,name;

// HAVING : similer to WHERE  but apply only on conditions after grouping.
// eg: SELECT city ,COUNT(roll_no)FROM `students` GROUP by city HAVING MAX(marks) > 90;

// General Order to write a query ====>
// SELECT column
// FROM table_name
// WHERE condition
// GROUP BY column
// HAVING condition
// ORDER BY column ASC;

// ALTER : to change the schema means to add or remove or rename any column in table.
// add column : ALTER TABLE table_name ADD COLUMN column_name datatype constraint;
// drop column : ALTER TABLE table_name DROP COLUMN column_name;
// rename table : ALTER TABLE table_name RENAME TO new_table_name;
// rename column : ALTER TABLE table_name CHANGE COLUMN old_name new_name new_datatype new_constrant;
// modify constraints / datatype : ALTER TABLE table_name MODIFY col_name new_datatype new_constraint;
// delete all table's data : TRUNCATE TABLE table_name;

///////////////////////////////////////////////////  Table related queries  /////////////////////////////////////

// update a value in table || Syntex: UPDATE table_name SET col1=val1,col2=val2 WHERE condition; || eg: UPDATE students SET grade="O" WHERE grade="c"
// delete a value in table || Syntex: DELETE FROM table_name WHERE conditon; || eg: DELETE FROM students WHERE id=101;

////////////////////////////////////////////////  forign key in detail /////////////////////////////////

// we have 2 tables. deparments, teachers. deparments table have science , english , hindi and their primary key is id which is 101, 102, 103, respectively. teachers have id , name , department id columns in which id is primary key.

// we make department's primary key to teacher's dept_id forign key. || CREATE TABLE teachers(id int primary key,dept_id int, Forign key (dept_id)  references deparments(id));

// Cascading in Forign key: means if change in parent table the reflect in child table also. To do this we use "ON UPDATE CASCADE" AND 'ON DELETE CASCADE'
// eg: CREATE TABLE teacher(
// id INT PRIMARY KEY,
// name VARCHAR(20),
// dept_id INT,
// FORIGN KEY (dept_id) REFERENCES dept(id)
// ON UPDATE CASCADE
// ON DELETE CASCADE
// ); 

/////////////////////////////////////////////////////// AGGREGATE FUNCTIONS ///////////////////////////////

// => these functions perform calculations on all values and return a single value.
// =>COUNT() : TO COUNT VALUE
// =>MAX() : TO GET MAXIMUM VALUE
// =>MIN() : TO GET MINIMUM VALUE
// =>SUM() : TO GET SUM OF VALUE
// =>AVG() : TO GET AVRAGE OF VALUE

// eg: SELECT MAX(marks) FROM students;

/////////////////////////////////////////////////// Data Types /////////////////////////////////////////

// Datatypes ==> int, varchar(0-255), char(0-255), text, date, datetime, timestamp, boolean, decimal(p,s), float, double, blob
// char vs varchar ==> if a char is of 50 then memory will be allocated for 50 char even if string is empty. whereas varchar will only allocate memory for the number of char used in string. 50 will be max value for varchar.
// BLOB ==> Binary Large Object, used to store large binary data like images, videos.(0-65,535 bytes)
// INT => To save integer values. (-2,147,483,648 to 2,147,483,647)
// Float=> To save floating point values. (7 decimal digits)
// Double=> To save double precision floating point values. (15 decimal digits)
// Date => To save date values. (YYYY-MM-DD)
// Time => To save time values. (HH:MM:SS)
// Timestamp => To save date and time values. (YYYY-MM-DD HH:MM:SS)
// signed vs unsigned data types ==> signed can store negative values, unsigned can only store positive values.



////////////////////////////////////////////////  Joins in sql /////////////////////////////////////////////////

// used to combine rows from 2 or more tables.
// There is 2 type of joins: 1) Inner Join , 2) Outer Join
// 1) Inner Join : return data which is common in both tables + SELECT columns FROM tableA INNER JOIN tableB ON tableA.col_name = tableB.col_name;
// eg: SELECT * FROM students INNER JOIN cources ON students.student_id = courses.courses.id;

// 2) Outer Join : It has 3 types. i) Left Join , ii) Right Join iii) Full Join.

// i) Left Join : gets full data of table A with common data with table B. + SELECT * FROM tableA LEFT JOIN tableB ON tableA.col_name = tableB.col_name; + here tableA is left joined with tableB so it will return tableA's full data and tableB's common data.
// eg: SELECT * FROM students LEFT JOIN courses ON students.student_id = courses.course_id;

// ii) Right Join : gets full data of table B with commom data with table A + SELECT * FROM tableB as tbB RIGHT JOIN tableA as tbA ON tableA.col_name = tableB.col_name; + 

//////////////////////////////////////////////////////////////////  questions  /////////////////////////////////////////

// first create database of company to excute these sql queries.

// 🗃️ Database Schema: TechNova Inc.
// 1. employees

// CREATE TABLE employees (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     first_name VARCHAR(50),
//     last_name VARCHAR(50),
//     email VARCHAR(100) UNIQUE,
//     department_id INT,
//     manager_id INT,
//     hire_date DATE,
//     salary DECIMAL(10, 2),
//     job_title VARCHAR(100)
// );
// 2. departments

// CREATE TABLE departments (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(100),
//     location VARCHAR(100)
// );
// 3. projects

// CREATE TABLE projects (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(100),
//     start_date DATE,
//     end_date DATE,
//     budget DECIMAL(12, 2),
//     department_id INT
// );
// 4. employee_projects

// CREATE TABLE employee_projects (
//     employee_id INT,
//     project_id INT,
//     role VARCHAR(100),
//     PRIMARY KEY (employee_id, project_id)
// );
// 5. clients

// CREATE TABLE clients (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(100),
//     email VARCHAR(100),
//     phone VARCHAR(20),
//     country VARCHAR(50)
// );
// 6. invoices

// CREATE TABLE invoices (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     client_id INT,
//     project_id INT,
//     amount DECIMAL(10, 2),
//     invoice_date DATE,
//     paid BOOLEAN
// );

// Select all columns from employees.

// Select first name and salary from employees.

// List all departments.

// Show all clients from the USA.

// Show employees hired after 2022.

// Count total employees.

// Get distinct job titles.

// Show clients sorted by name (A-Z).

// List top 5 highest-paid employees.

// Count number of projects.

// Show invoices that are unpaid.

// Find employees with salary > 80000.

// Show all projects started in 2024.

// Find employee with a specific email.

// Show employees who are managers (manager_id is null).

// Show employees with salary between 50000 and 90000.

// List all employees with “Engineer” in job title.

// Sort invoices by amount (high to low).

// Get employees with null department_id.

// Show current date using SQL.

// 🟡 INTERMEDIATE (21–50)
// List employee full names.

// Show total salary by department.

// Count employees in each department.

// Show average salary in the company.

// List projects and number of assigned employees.

// List clients who have more than 3 invoices.

// Calculate total paid amount per client.

// Find projects without any assigned employees.

// List employees and their managers (self join).

// Show employees working on more than 1 project.

// Get highest paid employee in each department.

// Count number of clients per country.

// Show project budgets grouped by department.

// Update salary by 10% for all developers.

// Delete invoices older than 2021.

// Insert a new employee with all required fields.

// Assign an employee to a project.

// Remove an employee from a project.

// Show employees not assigned to any project.

// List projects with invoice total over 50,000.

// 🟠 ADVANCED (51–80)
// Find the second highest salary.

// Show department with highest average salary.

// List projects with no invoices yet.

// Show each employee’s total project count.

// List employees assigned to more than 3 projects.

// Find employees without managers.

// Use a window function to rank employees by salary.

// Show cumulative project budget by department.

// Create a view for active invoices.

// Create a view for employee-project-role mapping.

// Write a stored procedure to give bonus to employees in a department.

// Write a function to calculate total earned by an employee from projects.

// Trigger to log when an invoice is inserted.

// Trigger to update budget usage when an invoice is added.

// List top 3 departments by project count.

// Find average project duration by department.

// List employees who never worked with a specific client.

// List clients who paid more than 90% of their invoices.

// Find the longest-running project.

// Create a view for employee hierarchy (manager → subordinate).

// 🔴 EXPERT (81–100)
// Recursive CTE to build employee hierarchy.

// List clients and their total outstanding amount.

// Use CASE to categorize employees by salary range.

// Correlated subquery to find employees earning above department average.

// Partition invoices by client to get running totals.

// List latest invoice per client.

// Detect duplicate client emails.

// Optimize a slow-running query on invoice totals.

// Write a function to return employee's experience in years.

// Use JSON functions to store metadata in a column (e.g., employee_skills).

// Generate a report of revenue by month and department.

// Simulate monthly payroll expense.

// Dynamic SQL for filtering employees by job title.

// Use temporary table for summarizing project statuses.

// Find clients with projects in more than 2 departments.

// Generate a calendar of project deadlines.

// Use ROLLUP to get subtotals per department.

// Compare total budget vs invoice totals per project.

// Implement full-text search on project names.

// Add an audit log table and use triggers to fill it.

// 🧠 BONUS MASTERY TASKS (Optional but challenging)
// Design a query to show average delay between project start and first invoice.

// Calculate the ratio of paid to unpaid invoices per client.

// Create a summary dashboard using views for HR, Sales, and Finance.

// Setup materialized view for monthly financial performance.

// Create an index to speed up employee-project join.

// Normalize a denormalized version of employee + project data.

// Use WITH clause to simplify a multi-step query.

// Archive old invoices into another table.

// Calculate the overlap between projects by date.

// Auto-assign default department using trigger on new employee.

// Design a query to simulate promotions based on tenure.

// Create a lookup table for job titles and update schema accordingly.

// Write a complex join using all six tables.

// Use analytics functions to detect salary anomalies.

// Use ENUM or CHECK constraints on job titles.

// Create and use a composite primary key.

// Optimize joins with EXPLAIN or ANALYZE.

// Use conditional logic in updates (e.g., salary change).

// Backup and restore part of the database.

// Create a set of test data for performance testing (insert 1000+ rows).
