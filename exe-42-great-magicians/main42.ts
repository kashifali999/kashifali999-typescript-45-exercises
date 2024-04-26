/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
//===========================================================================================================================================
let magicians : string [] = ["Naseer", "Kashif", "Jamal"]

function show_magicians(magicianList : string[]):void

{magicianList.forEach((magicians) => {console.log(`${magicians} the great`)})}

show_magicians(magicians);