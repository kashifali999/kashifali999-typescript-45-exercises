/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
//============================================================================================================================================
// let magicians : string [] = ["Naseer", "Kashif", "Jamal"]

// function make_great(magicianList : string[]):void

// {magicianList.forEach((magicians) => {console.log(`${magicians} the great`)})}

// make_great(magicians)
//-------------------------------------------------------------------------------------------------------------

let magicians: string[] = ["Naseer", "Kashif", "Jamal"];

function make_great(magicianList: string[]): string[]
{return magicianList.map((magician) => `the Great ${magician}`)}

function show_magicians(magicianList: string[]): void
{magicianList.forEach((magician) => {console.log(magician)})}

const great_magicians = make_great([...magicians])

console.log("Original Magicians:")
show_magicians(magicians)

console.log("\nGreat Magicians:")
show_magicians(great_magicians)
//End