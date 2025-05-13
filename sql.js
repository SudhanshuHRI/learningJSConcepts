///////////////////////////////////////////  Notes //////////////////////////////////////////

// sql is not case sensitive.
// CREATE DATABASE <database_name>; [create a new database] 
// CREATE DATABASE IF NOT EXISTS <database_name>; [check if db already exists then don't create it]
// DROP DATABASE <database_name>;[delete a database]
// USE <database_name>; [select a database to use]

// CREATE TABLE <table_name> (column_1 datatype contraints, column_2 datatype constraints, ...);[create a new table]
// CREATE TABLE IF NOT EXISTS <table_name> (column_1 datatype contraints, column_2 datatype constraints, ...);[check if table already exists then don't create it]
// contraints are optional 

// DROP TABLE <table_name>;[delete a table]

// SHOW DATABASES; ==> show all databases
// SHOW TABLES; ==> show all tables in current database


// SELECT * FROM <table_name>; [select all data from table] 
// SELECT column_1, column_2, ... FROM <table_name>; [select specific columns from table]

// INSERT INTO <table_name> (column_1, column_2, ...) VALUES (value_1, value_2, ...); [insert data into table]
// eg: INSERT INTO users (name, age) VALUES ('John', 25),('Jane', 30); [insert multiple rows at once]


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


//////////////////////////////////////////////////////////////////  questions  /////////////////////////////////////////

//  Advanced SQL Queries
// Write a query to find the second highest salary from an employees table.

// Write a query to pivot a table of monthly sales.

// Find all employees who earn more than the average salary of their department.

// Return the top 3 highest paid employees per department.

// Calculate a running total of sales using a window function.

// Write a query to find duplicate rows based on multiple columns.

// Write a recursive CTE to generate a hierarchy (e.g., org chart).

// Use a CTE to calculate the Fibonacci sequence.

// Find the first and last purchase date for each customer.

// Calculate a moving average of sales over a 3-day window.

// ⚙️ Indexes & Performance
// How do indexes affect performance? Explain with a query example.

// Compare the performance of JOIN vs. EXISTS.

// When would a composite index be better than a single-column index?

// How would you identify slow queries in a database?

// Explain how to use EXPLAIN or EXPLAIN ANALYZE to tune queries.

// 🔄 Subqueries & Correlated Subqueries
// Write a correlated subquery to find customers with orders above their average order value.

// What is the difference between IN, EXISTS, and JOIN in subqueries?

// Use a subquery to return departments with no employees.

// Find the employee(s) with the maximum salary using a subquery.

// Write a query using NOT EXISTS to find unmatched records.

// 🔍 Window Functions
// Use RANK() to list employees ranked by salary per department.

// Compare ROW_NUMBER() vs RANK() vs DENSE_RANK() with example.

// Write a query that calculates the percent change in sales over months.

// Use LAG() and LEAD() to find growth or drop in stock prices.

// Create a cumulative count using COUNT(*) OVER (...).

// 🧮 Aggregation & Grouping
// Find the department with the highest average salary.

// Group orders by week and calculate total revenue per week.

// Use GROUPING SETS to generate roll-up summaries.

// Calculate median salary using SQL.

// Use CUBE and ROLLUP for multidimensional aggregation.

// 🔗 Joins and Set Operations
// Write a full outer join without using FULL OUTER JOIN syntax.

// Use INTERSECT to find common records between two tables.

// Use EXCEPT to find unique values in one table.

// Perform a self-join to find employees and their managers.

// Implement an anti-join using NOT EXISTS.

// 💾 Stored Procedures, Views, Triggers
// Create a stored procedure to insert a new order and update inventory.

// Write a trigger to log deleted records into an audit table.

// Write a view that flattens a normalized set of tables.

// Use a stored function to validate email addresses.

// Create a trigger that prevents duplicate inserts.

// 🧩 Schema Design & Constraints
// What is a surrogate key? When would you use one?

// Compare normalization vs denormalization.

// Define a unique constraint that only applies when a column is NOT NULL.

// Create a table with a check constraint enforcing a salary range.

// What is a foreign key cascade and when should it be avoided?

// 🧠 Conceptual & Theoretical
// Explain ACID properties in the context of SQL databases.

// Describe isolation levels and how they prevent concurrency issues.

// What is the difference between OLTP and OLAP?

// Explain how sharding works in distributed SQL systems.

// What are materialized views and how do they differ from regular views?