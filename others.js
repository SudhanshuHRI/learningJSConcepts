// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ DSA Section ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// 1. Array
// 2. Linked list
// 3. Stack
// 4. Queue
// 5. Tree
// 6. Heap
// 7. graph
// 8. Hashing

///////////////////////////////////////////////////////////////  Theory  ///////////////////////////////////////////////////

// * 2 type of data staructure :-
// 1.linear data structure = array, stack, queue
// 2.Non-linear data staructures= tree, graph

// * Array Traversing = to check each element in array
// * Array Accessing = to get a specific element from array
// * Algorithm = steps to do any task in program.
// * Algorithm complexity = 1.time complexity, 2. space complexity
// 1. Time complexity = it is calculated by counting the number of steps to finish the execution. if a program have 50 lines of code then time complexity will be 50 but if we have loop who excutes 100 times in 50 lines then time complexity will be 150.
// 2.Space complexity = space required to excute the program + space complexity = Auxilary space / supportive space + input size / variable space. if a program needs 1 MB to excute program, then Space complexity will be 1 MB.
// * To do a task there is multiple algorithm / multiple ways.
// * Big-O-Notation = it is a unit to denote complexity. eg- weight's Big-O-Notation is "kg"
// * which algorithm we have to choose, it depends on data size. choosing wrong algorithm will increase complexity. That is why we have multiple algirithm to do single task.
// * Asymptotic analysis = tells which algorithm is best for doing that single task. In Asymptotic analysis we use different notations to find the best algorithm . time and space complexity is also calculated in asymptotic analysis. also in time and space complexity, time complexity is important to measure because using large running loops will increase time complexity. eg- if we have array of 100 elements and we have to search element then linear search algorithm is best but if we have 1000000 elements the binary search will be best for searching.
// * Asymptotic Notation = we have 3 notations. big-O-notation, omega notation, theta notation.
// * Time complexity directly depends on input. eg- if we use nested loops , and we have 6 elements array then loop will run 6*6=36 times. so time complexity depends upon inputs.
// * input is chuncks of data where algorithm is going to implement. eg- [1,2,3,4,5] in this it's elements are chunks and each element is called input.
// f(N) = 5N*5N + 6N + 12. This formula is used to find time complexity where nested loops are used. here N = no of elements in Array.
// f(N) = 6N + 12. This formula is used to find time complexity with no nested loops. here N = no of elements in Array.

///////////////////////////////////////////////////////////  Sorting  //////////////////////////////////////////////////////////////////////
// * loop will always excute (arraylength * arraylength) times maximum to sort an array. if we have some elements that are sorted already, then no of excution will decrease.

///////////////////////////////////////////////////////////////// Recurtion  ///////////////////////////////////////////////////////////////
// * recurtion = a function that calls itself + it have 2 types-
// 1.direct/basice recurtion = it is default recurion
// 2. indirect recurtion = 2 functions that calls themselfs and stops on a perticular conditions.

//////////////////////////////////////////////////////////////// Stack ///////////////////////////////////////////////////////////////

// * In stack data structure, elements are added / removed / updated from a single end + in array we do same where we want like adding element in first or last or in middle of array but in stack we can do it with single end.
// * It works on Last in first out (LIFO) . means last item added to stack is the first one to be removed.
// * we decalre maximum value of stack. eg- we have to declare stack will be of 10 element so only 10 elements will be enter.
//* key operations in stack = push, pop , peek(view the top elememt) , isEmpty(checks if stack is empty)
//* Stack is used when you need to maintain history of operations. Stack is used in browser history naivgation, undo functionallity etc
//* Stack is not required if you want to access random elements

/////////////////////////////////////////////  Queue  ////////////////////////////////////////////////////////////////

// * it is a lienear data structure + queue have 2 points front and rear.
// * elements add from front point and remove from rear point + it works on FIFO concept.
// * we can perform different operation on Queue: En-queue(add element in front), de-queue(remove element from end), isEmpty(check if queue is empty), isFull(check if queue is full), peek(get first element without removing it)
// * "front" means oldest element in queue and "rear" means latest element in queue.
// * Circular Queue :- the rear connects back to front to optimize space by using empty slots + in simple queue when front is removed , front space is cleared and it cannot be filled becz in queue we insert element from rear. so for this we use circular queue to reuse that space + in circular queue suppose if we have circular queue [1,2,3,4,5]. here front is 1 and rear is 5. if we want to remove a element, only 1 can be removed becz of FIFO. so 1 will be removed and space will be null like [null,2,3,4,5]. Now we want to add element 111 so it will be place on null like [111,2,3,4,5]. Now fornt will be 2 and rear will be 111. Now, if we want to remove one more element then only 2 can be removed and it will be like [111,null,3,4,5]. Now, if we want to add 222 then it will become [111,222,3,4,5]. Now front will be 3 and rear will be 222.

//[1,2,3,4,5]
//[null,2,3,4,5]
//[111,2,3,4,5]
//[111,null,3,4,5]
//[111,222,3,4,5]

///////////////////////////////////////////////////  Linear search  //////////////////////////////////////////////////

// * Search element by one by one

/////////////////////////////////////////////////  Binary Search /////////////////////////////////////////////////////

// * if we want to use binary seach then we have to first sort the array.
// * Binary search is of 2 types :- 1. Itrative, 2. Recursive

// 1. Itrative Approch :-
// eg:- we have a array [1,2,3,4,5,6,7,8] and we want to find 6. Then it breaks the array in [1,2,3] and [5,6,7,8] and make 4 as middle point. + then compare middle point with 6. if 6 is greater than 4 then it will search in 2nd array first. if element not found in 2nd array then it will search in first array and if the middle point and searching point is same the it will return the result and stop searching further + Now, it will again break [5,6,7,8] into [5] and [7,8] and 6 as a middle point and give the result that 6 is answer.

// let data = [5, 9, 13, 17];
// let find = 13;
// let start = 0;
// let end = data.length - 1;
// let position = undefined;

// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);

//   if (data[mid] == find) {
//     position = mid;
//     break;
//   } else if (data[mid] < find) {
//     start = mid +1
//   } else  {
//     end = mid-1
//   }

// }

// console.log(position);

///////////////////////////////////////////////////////////////////////  InterView Questions  //////////////////////////////////////////////////

// Q.Find the largest and smallest element in an array.
// Q.Find the second largest and second smallest elements in an array.
// Q.Rotate an array by k positions.
// Q.Find the majority element in an array (appears more than n/2 times).
// Q.Find the missing number in a given array of size n with elements from 1 to n.
// Q.Find all pairs in an array that sum up to a given number.
// Q.Merge two sorted arrays without using extra space.
// Q.Find the subarray with the maximum sum (Kadane’s Algorithm).
// Q.Rearrange an array such that positive and negative numbers alternate.
// Q.Find the longest consecutive sequence in an unsorted array.

// Q.Check if a string is a palindrome.
// Q.Find the first non-repeating character in a string.
// Q.Reverse a string without using extra space.
// Q.Check if two strings are anagrams of each other.
// Q.Find the longest repeating subsequence in a string.
// Q.Implement string matching using the KMP algorithm.
// Q.Find the longest common prefix among an array of strings.
// Q.Count the number of vowels and consonants in a string.
// Q.Find the smallest window in a string containing all characters of another string.
// Q.Generate all permutations of a string.

// Q.Reverse a linked list.
// Q.Detect and remove a cycle in a linked list.
// Q.Find the middle element of a linked list.
// Q.Merge two sorted linked lists.
// Q.Remove duplicates from a sorted linked list.
// Q.Add two numbers represented as linked lists.
// Q.Flatten a multilevel linked list.
// Q.Find the intersectioa point of two linked lists.
// Q.Check if a linked list is a palindrome.
// Q.Rotate a linked list by k nodes.

// Q.Implement a stack using arrays.
// Q.Implement a queue using stacks.
// Q.Find the next greater element for every element in an array.
// Q.Evaluate a postfix expression.
// Q.Implement a min stack (a stack that supports push(), pop(), and getMin()).
// Q.Implement a circular queue.
// Q.Find the maximum in each sliding window of size k.
// Q.Implement a priority queue.
// Q.Check for balanced parentheses in an expression.
// Q.Design a stack that supports push(), pop(), top(), and retrieving the maximum element.

// Q.Perform in-order, pre-order, and post-order traversal of a binary tree.
// Q.Find the height of a binary tree.
// Q.Check if two binary trees are identical.
// Q.Convert a binary tree into its mirror.
// Q.Find the lowest common ancestor (LCA) of two nodes in a binary tree.
// Q.Check if a binary tree is a binary search tree (BST).
// Q.Find the maximum width of a binary tree.
// Q.Serialize and deserialize a binary tree.
// Q.Print the left view of a binary tree.
// Q.Find the diameter of a binary tree.

// Q.Implement Breadth-First Search (BFS) for a graph.
// Q.Implement Depth-First Search (DFS) for a graph.
// Q.Detect a cycle in a graph (directed and undirected).
// Q.Find the shortest path in an unweighted graph using BFS.
// Q.Implement Dijkstra’s algorithm for the shortest path in a weighted graph.
// Q.Find the Minimum Spanning Tree (MST) using Kruskal’s algorithm.
// Q.Implement Prim’s algorithm for MST.
// Q.Check if a graph is bipartite.
// Q.Topologically sort a directed acyclic graph (DAG).
// Q.Find all strongly connected components (SCC) in a graph.
// Q.Recursion and Backtracking
// Q.Solve the N-Queens problem.
// Q.Find all subsets of a set.
// Q.Solve the rat in a maze problem.
// Q.Find all permutations of a string or array.
// Q.Solve the Sudoku puzzle.
// Q.Generate all valid parentheses combinations of length n.
// Q.Partition a string into all possible palindromic substrings.
// Q.Print all paths from the top-left to the bottom-right of a matrix.
// Q.Find the Kth permutation of a sequence.f
// Q.Implement the word search problem.

// Q.Find the nth Fibonacci number using dynamic programming.
// Q.Solve the Longest Common Subsequence (LCS) problem.
// Q.Solve the Longest Increasing Subsequence (LIS) problem.
// Q.Solve the 0/1 Knapsack problem.
// Q.Find the number of ways to make change for a given amount using coins.
// Q.Find the minimum number of coins required to make a given amount.
// Q.Solve the Matrix Chain Multiplication problem.
// Q.Solve the Partition Equal Subset Sum problem.
// Q.Find the maximum profit in a stock trading problem (at most 2 transactions).
// Q.Solve the Edit Distance problem between two strings.

// Q.Implement the Merge Sort algorithm.
// Q.Implement the Quick Sort algorithm.
// Q.Perform Binary Search on a sorted array.
// Q.Find the Kth largest element in an array.
// Q.Find the peak element in an array.
// Q.Implement Heap Sort.
// Q.Find the square root of a number using binary search.
// Q.Find the minimum number of platforms required for trains at a station.
// Q.Solve the Median of Two Sorted Arrays problem.
// Q.Search for an element in a rotated sorted array.

// Q.Find the only non-repeating element in an array where every other element repeats twice.
// Q.Count the number of 1s in the binary representation of a number.
// Q.Determine if a number is a power of 2.
// Q.Swap two numbers without using a temporary variable.
// Q.Find the XOR of all elements in an array.
// Q.Find two non-repeating numbers in an array where every other number repeats twice.
// Q.Count the number of bits needed to flip to convert one number to another.
// Q.Check if two numbers have opposite signs.
// Q.Find the position of the rightmost set bit in a number.
// Q.Solve the Subset XOR problem.

// Q.Write a function to find the length of the longest substring without repeating characters.
// Example:
// Input: "abcabcbb"
// Output: 3 (substring is "abc")
// Input: "bbbbb"
// Output: 1 (substring is "b")

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ SQL Section ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

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

// ii) Right Join : gets full data of table B with commom data with table A + SELECT * FROM tableA as tbA RIGHT JOIN tableB as tbB ON tableA.col_name = tableB.col_name; + here tableA is right joined with tableB so it will return tableB's full data and tableA's commin data.
// eg: SELECT * FROM students as s RIGHT JOIN courses as c ON s.student_id = c.course_id;

// iii) Full Join : we use UNION between left join query and right join query to get all data of TableA and TableB;
// eg: SELECT * FROM students LEFT JOIN courses ON students.student_id = courses.course_id
//  UNION
// SELECT * FROM students as s RIGHT JOIN courses as c ON s.student_id = c.course_id ;

// Left exculsive join / Right exclusive join : to get unique value in TableA / TableB + to do this we use WHERE command
// eg: SELECT * FROM students LEFT JOIN courses ON students.student_id = courses.course_id WHERE courses.course_id IS NULL;

//////////////////////////////////////////////////////////////  UNION  ///////////////////////

// used to combine 2 data sets + Also removes duplicate values + UNION ALL will give all values including duplicates +  SELECT columns FROM TableA UNION SELECT columns FROM TableB

/////////////////////////////////////////////////////// Sub Queries  //////////////////////////////////////////////

// to write query into query + SELECT column FROM table_name WHERE col_name <operator> (subquery);
// eg: select full_name,marks from students where marks > (select AVG(marks) from students);

///////////////////////////////////////////////  MySQL Views   ///////////////////////////////////

// it is used to restrict column  data to user + CREATE VIEW view1 SELECT rollno, name FROM student;

//////////////////////////////////////////////////////////////////  Questions for Practice  /////////////////////////////////////////

// first create database of company to excute these sql queries.

// CREATE DATABASE CompanyDB;
// USE CompanyDB;

// CREATE TABLE departments (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(100)
// );

// CREATE TABLE employees (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     first_name VARCHAR(50),
//     last_name VARCHAR(50),
//     email VARCHAR(100) UNIQUE,
//     department_id INT,
//     manager_id INT,
//     hire_date DATE,
//     job_title VARCHAR(100),
//     FOREIGN KEY (department_id) REFERENCES departments(id),
//     FOREIGN KEY (manager_id) REFERENCES employees(id)
// );

// CREATE TABLE projects (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(100),
//     start_date DATE,
//     end_date DATE,
//     budget DECIMAL(10, 2)
// );

// CREATE TABLE salaries (
//     employee_id INT PRIMARY KEY,
//     amount DECIMAL(10, 2),
//     effective_date DATE,
//     FOREIGN KEY (employee_id) REFERENCES employees(id)
// );

// CREATE TABLE attendances (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     employee_id INT,
//     date DATE,
//     status ENUM('Present', 'Absent', 'Leave'),
//     FOREIGN KEY (employee_id) REFERENCES employees(id)
// );

// -- Departments
// INSERT INTO departments (name) VALUES
// ('Engineering'), ('HR'), ('Sales'), ('Finance');

// -- Employees
// INSERT INTO employees (first_name, last_name, email, department_id, manager_id, hire_date, job_title)
// VALUES
// ('John', 'Doe', 'john.doe@example.com', 1, NULL, '2020-01-10', 'Engineering Manager'),
// ('Jane', 'Smith', 'jane.smith@example.com', 1, 1, '2021-03-15', 'Software Engineer'),
// ('Mike', 'Taylor', 'mike.taylor@example.com', 2, NULL, '2019-08-01', 'HR Manager'),
// ('Emily', 'Clark', 'emily.clark@example.com', 2, 3, '2022-07-11', 'HR Executive'),
// ('Robert', 'King', 'robert.king@example.com', 3, NULL, '2018-05-25', 'Sales Manager'),
// ('Laura', 'Jones', 'laura.jones@example.com', 3, 5, '2023-01-03', 'Sales Executive');

// -- Projects
// INSERT INTO projects (name, start_date, end_date, budget)
// VALUES
// ('Website Revamp', '2023-01-01', '2023-06-30', 50000.00),
// ('Recruitment Drive', '2023-02-15', '2023-04-15', 10000.00),
// ('Product Launch', '2023-03-01', '2023-07-01', 75000.00);

// -- Salaries
// INSERT INTO salaries (employee_id, amount, effective_date)
// VALUES
// (1, 95000.00, '2023-01-01'),
// (2, 65000.00, '2023-01-01'),
// (3, 80000.00, '2023-01-01'),
// (4, 50000.00, '2023-01-01'),
// (5, 88000.00, '2023-01-01'),
// (6, 47000.00, '2023-01-01');

// -- Attendance
// INSERT INTO attendances (employee_id, date, status)
// VALUES
// (1, '2023-05-01', 'Present'),
// (2, '2023-05-01', 'Absent'),
// (3, '2023-05-01', 'Present'),
// (4, '2023-05-01', 'Leave'),
// (5, '2023-05-01', 'Present'),
// (6, '2023-05-01', 'Present');

//  Beginner Level (1–30)

// List all columns of all employees.

// Show first names and last names of employees.

// What are the distinct department IDs in the employee table?

// Find all employees who work in the 'HR' department.

// List all employees who joined after January 1, 2020.

// Get the employee(s) with a salary greater than 70,000.

// Show all employees ordered by their first names.

// List employees ordered by hire date in descending order.

// How many employees are there in total?

// What is the maximum salary?

// What is the minimum salary?

// What is the average salary?

// What is the total sum of all salaries?

// Find all employees whose job title contains "Manager"

// List all attendances marked as "Absent"

// Find employees with first names either "John" or "Jane".

// Find all employees in department 1 with the job title "Engineer". <===============

// Find employees who have a non-null email.

// Show the first 5 employees in the table.

// Find projects that have no end date.

// Display the id and first_name of all employees with an alias.

// Show the length of each employee's first name.

// Convert all last names to uppercase.

// Convert all email addresses to lowercase.

// Show the year part of the hire date of each employee.

// List employees hired in 2022.

// Show how many days each employee has worked till today.

// Display the current date and time.

// Show only the current date.

// Find employees hired between 2021 and 2023.

// 🧠 Intermediate Level (31–70)
// Count the number of employees in each department.

// Count how many times each attendance status appears.

// Show average salary per job title.

// Show department name with number of employees in each.

// Find projects with a budget between 10,000 and 60,000.

// List employees whose last name starts with 'S'.

// Display employees and their department names using a join.

// Show each employee with their manager's name.

// Display only employees who have managers.

// Find employees earning the highest salary.

// Find employees working in the 'Sales' department.

// List departments where no employee is assigned.

// Show employees that have a salary record.

// Update the email of employee with id = 1.

// Increase employee 2’s salary by 5,000.

// Delete all attendance records marked as "Absent" before 2023.

// Delete projects that ended before 2022.

// Insert a new department named 'Legal'.

// Add a new salary record for a new employee.

// List employees earning more than 60,000 with their salary.

// Calculate the duration of each project in days.

// Show department names with average salary of their employees.

// Show job titles having more than one employee.

// List employees that do not have a salary entry.

// Find employees present on '2023-05-01'.

// Find projects whose budget is above average.

// Count distinct employees in the attendance table.

// Show total number of days each employee has attendance.

// Order employees by length of their first name (longest first).

// Display full names of employees (first + last).

// Find employees whose job title contains either “Engineer” or “Manager”.

// Join employees with their departments and filter only 'Engineering'.

// Show employees hired over 2 years ago.

// List salaries greater than or equal to all other salaries.

// List emails that end with '@example.com'.

// Show most common job titles in the company.

// List employees and their departments using a subquery.

// Show all departments that have more than 1 employee.

// Find the project with the longest duration.

// Get the latest hire date in each department.

// 🚀 Advanced Level (71–100)
// Create a view showing employees and their salary.

// Select all employees from the salary view whose salary > 70,000.

// Create a stored procedure to list employees by department ID.

// Call the stored procedure for department ID = 1.

// Create a trigger that logs salary changes.

// Find employees whose salary increased compared to a previous value.

// Show employee salary rank using RANK() window function.

// Show department-wise average salary using PARTITION BY.

// Get each employee’s salary vs. overall average using window function.

// Get top 2 earners from each department using DENSE_RANK().

// Create a CTE that lists high-earning employees (salary > 70k).

// Use a CTE to count employees per department.

// Show the employee with the longest name.

// Find departments with the highest number of employees.

// List employees with more attendance days than average.

// Write a query to transpose attendance statuses by employee.

// Find average number of days present per department.

// Show employee-manager pairs where both belong to same department.

// List employees who never took leave.

// Find employees working on the most expensive project.

// Calculate the percentage of "Present" days per employee.

// Write a query to find salary difference between manager and reportee.

// Create a function to return full name of employee by ID.

// List top 3 employees with highest salary overall.

// Show departments with less than 2 employees.

// Generate a running total of salaries department-wise.

// Rank projects by budget.

// Show total cost of salaries by department.

// Find employees whose names appear more than once (duplicates).

// Display employees hired in the same year as their manager.
