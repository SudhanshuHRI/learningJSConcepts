///////////////////////////////////////////  Notes //////////////////////////////////////////

// sql is not case sensitive.
// create database ==> CREATE DATABASE <database_name>; || CREATE DATABASE IF NOT EXISTS <database_name>; [check if db already exists then don't create it]
// delete database ==> DROP DATABASE <database_name>;
// select database ==> USE <database_name>;

// create table ==> CREATE TABLE <table_name> (column_1 datatype contraints, column_2 datatype constraints, ...);  
// contraints are optional 
// eg: create table dummmy (id int primary key, name varchar(50) not null);


// insert data in table==> INSERT INTO <table_name> (column_1, column_2, ...) VALUES (value_1, value_2, ...); 
// eg: insert into dummy (id, name) values (1, 'dummy');

// delete table ==> DROP TABLE <table_name>;

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

// SHOW DATABASES; ==> show all databases
// SHOW TABLES; ==> show all tables in current database









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