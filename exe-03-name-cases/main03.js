"use strict";
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//==============================================================================================================================
let personName = "eric";
console.log(personName); // Normal
console.log(personName.toLowerCase()); // Upper cased
console.log(personName.toUpperCase()); // Lower cased
// For title case, personName is to be be written in small letters
// console.log(personname.charAt(0))                                                //Print a charecter by address
// console.log(personname.charAt(0).toLocaleUpperCase())                            //Print by address to desired case type
// console.log(personname.slice(1, 6))                                              //Cut before and after limits
console.log(personName.charAt(0).toLocaleUpperCase() + personName.slice(1, 6)); //Concatenate above three logics 
