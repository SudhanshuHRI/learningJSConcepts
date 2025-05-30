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
// Q.Find the intersection point of two linked lists.
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
