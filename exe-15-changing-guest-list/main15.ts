// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//=================================================================================================================
let guestList:string[] = ["Rashid", "Shoaib", "Ahmad"]
let deletedGuest:string = "Ahmad"
let newGuest:string = "Abdullah"

console.log(deletedGuest + " is deleted from list")
console.log(newGuest + " is added new guest to list")

guestList[guestList.indexOf(deletedGuest)] = newGuest
guestList.map((invitedGuests)=>(console.log(`Dear, ${invitedGuests} I would like to invite you for dinner tonight`)))