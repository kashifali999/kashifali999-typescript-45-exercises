/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
//================================================================================================================================
let prevoiusGuests:string[] = ["Rashid", "Shoaib", "Ahmad", "Abdullah", "Kashif", "Umar"]
console.log("Now I can invite only two guests due to non-availability of bigger dinner table")
while(prevoiusGuests.length > 2){
    let deletedGuest = prevoiusGuests.pop()
    console.log(`Dear ${deletedGuest} you are not invited to dinner party.`)    
}
prevoiusGuests.map((remaining)=>(console.log(`Dear, ${remaining} you are still invited`)))
while(prevoiusGuests.length = 0){
    let deletedGuest = prevoiusGuests.pop()
}
console.log(prevoiusGuests);



