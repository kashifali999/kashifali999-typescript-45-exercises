// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//=================================================================================================================
var guestList = ["Rashid", "Shoaib", "Ahmad"];
var deletedGuest = "Ahmad";
var newGuest = "Abdullah";
console.log(deletedGuest + " is deleted from list");
console.log(newGuest + " is added new guest to list");
guestList[guestList.indexOf(deletedGuest)] = newGuest;
guestList.map(function (invitedGuests) { return (console.log("Dear, ".concat(invitedGuests, " I would like to invite you for dinner tonight"))); });
