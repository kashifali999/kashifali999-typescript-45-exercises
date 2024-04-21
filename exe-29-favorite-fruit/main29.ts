/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
//=============================================================================================================================================
let favoriteFruits:string[] = ["Mango", "Apple", "Banana"]

if(favoriteFruits.includes("Mango")){console.log(`You really like ${favoriteFruits[0]}`)}

if(favoriteFruits.includes("Apple")){console.log(`You really like ${favoriteFruits[1]}`)}

if(favoriteFruits.includes("Banana")){console.log(`You really like ${favoriteFruits[2]}`)}

if(!favoriteFruits.includes("Cherry")){console.log(`This in not your favorite fruite`)}

if(!favoriteFruits.includes("Strawburry")){console.log(`This in not your favorite fruite`)}







