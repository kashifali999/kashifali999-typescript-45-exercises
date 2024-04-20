// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//==================================================================================================================
// Method # 01
let friendArray1:string [] = ["Rashid", "Shoaib", "Ahmad", "Abdullah"]
console.log(`Dear, ${friendArray1[0]} I am sending you warm greetings and good vibes for a fantastic day ahead!`)
console.log(`Dear, ${friendArray1[1]} I am sending you warm greetings and good vibes for a fantastic day ahead!`)
console.log(`Dear, ${friendArray1[2]} I am sending you warm greetings and good vibes for a fantastic day ahead!`)
console.log(`Dear, ${friendArray1[3]} I am sending you warm greetings and good vibes for a fantastic day ahead!`)

// Method # 02
let friendArray2:string [] = ["Rashid", "Shoaib", "Ahmad", "Abdullah"]
let message1:string = "Dear,"
let message2:string = "I am sending you warm greetings and good vibes for a fantastic day ahead!"
console.log(message1 +" "+ `${friendArray2[0]}` +" "+ message2)
console.log(message1 +" "+ `${friendArray2[1]}` +" "+ message2)
console.log(message1 +" "+ `${friendArray2[2]}` +" "+ message2)
console.log(message1 +" "+ `${friendArray2[3]}` +" "+ message2)