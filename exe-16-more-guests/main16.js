/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
//========================================================================================================================================
var prevoiusGuests = ["Rashid", "Shoaib", "Ahmad"];
// New guests are Abdullah, Kashif and Umar respectively
console.log("Previous guests are " + prevoiusGuests);
var firstGuest = "Abdullah";
prevoiusGuests.unshift(firstGuest);
console.log("After adding first, guests are " + prevoiusGuests);
var middleGuest = "Ksashif";
var middlePosition = prevoiusGuests.length / 2;
prevoiusGuests.splice(middlePosition, 0, middleGuest);
console.log("After adding middle, guests are " + prevoiusGuests);
var lastGuest = "Umar";
prevoiusGuests.push(lastGuest);
console.log("After adding last, guests are " + prevoiusGuests);
prevoiusGuests.map(function (Invitation) { return (console.log("Dear, ".concat(Invitation, " you are invited on a dinner party tonight"))); });
