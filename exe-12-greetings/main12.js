// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//==================================================================================================================
// Method # 01
var friendArray1 = ["Rashid", "Shoaib", "Ahmad", "Abdullah"];
console.log("Dear, ".concat(friendArray1[0], " I am sending you warm greetings and good vibes for a fantastic day ahead!"));
console.log("Dear, ".concat(friendArray1[1], " I am sending you warm greetings and good vibes for a fantastic day ahead!"));
console.log("Dear, ".concat(friendArray1[2], " I am sending you warm greetings and good vibes for a fantastic day ahead!"));
console.log("Dear, ".concat(friendArray1[3], " I am sending you warm greetings and good vibes for a fantastic day ahead!"));
// Method # 02
var friendArray2 = ["Rashid", "Shoaib", "Ahmad", "Abdullah"];
var message1 = "Dear,";
var message2 = "I am sending you warm greetings and good vibes for a fantastic day ahead!";
console.log("".concat(message1, " ").concat(friendArray2[0], " ").concat(message2));
console.log("".concat(message1, " ").concat(friendArray2[1], " ").concat(message2));
console.log("".concat(message1, " ").concat(friendArray2[2], " ").concat(message2));
console.log("".concat(message1, " ").concat(friendArray2[3], " ").concat(message2));
