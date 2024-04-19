// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//============================================================================================================================================
// "\t" for new tab and "\n" for new line
let firstName: string = "\t Kashif Ali \t"
let secondName: string = "\n Rashid Ali \n"
let thirdName: string = "\n \t Shoaib Ali \t \n"

console.log("Name with white spaces")
console.log(firstName)
console.log(secondName)
console.log(thirdName)

console.log("Name after stripping white spaces")
console.log(firstName.trim())
console.log(secondName.trim())
console.log(thirdName.trim())