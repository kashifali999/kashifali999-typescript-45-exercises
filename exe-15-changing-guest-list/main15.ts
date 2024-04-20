/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
//=================================================================================================================
let guestList:string[] = ["Rashid", "Shoaib", "Ahmad"]
console.log(guestList + " are prevoius list of invited guests")

let deletedGuest:string = "Ahmad"
let newGuest:string = "Abdullah"

console.log(deletedGuest + " is deleted from list")
console.log(newGuest + " is added new guest to list")

guestList[guestList.indexOf(deletedGuest)] = newGuest

console.log(guestList + " are new list of invited guests")
guestList.map((invitedGuests)=>(console.log(`Dear, ${invitedGuests} I would like to invite you for dinner tonight`)))