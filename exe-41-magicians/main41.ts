/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
//=============================================================================================================================================
let magicians : string [] = ["Naseer", "Kashif", "Jamal"]

function show_magicians(magicianList : string[]):void

{magicianList.forEach((magicians) => {console.log(magicians)})}

show_magicians(magicians);
