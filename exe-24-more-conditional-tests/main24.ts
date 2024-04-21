/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
//=======================================================================================================================================
// Tests for equality and inequality with strings
const str1:string = "hello"
const str2:string = "world"

console.log("Equality with strings")
console.log(str1 === "hello")
console.log(str2 === "hello")

console.log("Inequality with strings")
console.log(str1 !== "world")
console.log(str2 !== "world")

// Tests using the lower case function
const str3:string = "HELLO"
const str4:string = "WORLD"

console.log("Tests using the lower case function:")
console.log(str3.toLowerCase() === "hello")
console.log(str4.toLowerCase() === "hello")

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1:number = 10
const num2:number = 20

console.log("Numerical equality and inequality:")
console.log(num1 === 10)
console.log(num2 === 10)

console.log("Numerical greater than and less than:")
console.log(num1 < num2)
console.log(num2 < num1)

console.log("Numerical greater than or equal to, and less than or equal to:")
console.log(num1 <= 10)
console.log(num2 <= 10)
console.log(num2 >= 20)
console.log(num1 >= 20)

// Tests using "and" and "or" operators
const condition1 = true
const condition2 = false

console.log("Tests using 'and' operator:")
console.log(condition1 && condition1)
console.log(condition1 && condition2)

console.log("Tests using 'or' operator:")
console.log(condition1 || condition2)
console.log(condition2 || condition2)

// Test whether an item is in an array
const array1 = [1, 2, 3, 4, 5]

console.log("Test whether an item is in an array:")
console.log(array1.includes(3))
console.log(array1.includes(10))

// Test whether an item is not in an array
console.log("Test whether an item is not in an array:")
console.log(!array1.includes(10))
console.log(!array1.includes(3))