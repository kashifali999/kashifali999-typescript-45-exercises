/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
//=========================================================================================================================================
var current_users = ["admin", "Rashid", "Shoaib", "Ahmad", "Abdullah", "Kashif"];
var new_users = ["Qamar", "Umar", "Aamir", "Ahmad", "ABDULLAH", "Asim"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var isAvailable = true;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (new_user.toLowerCase() === current_user.toLocaleLowerCase()) {
            console.log("Username \"".concat(new_user, "\" is already taken, please chose another username."));
            isAvailable = false;
            break;
        }
    }
    if (isAvailable) {
        console.log("This username \"".concat(new_user, "\" is available."));
    }
}
// const currentUsers: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
// const newUsers: string[] = ["Emma", "Bob", "Fred", "AliceinWonderland", "George"];
// for (const newUser of newUsers) {
//   const newUserLower = newUser.toLowerCase();  // Convert to lowercase for case-insensitive comparison
//   const isUsernameTaken = currentUsers.some(user => user.toLowerCase() === newUserLower);
//   if (isUsernameTaken) {
//     console.log(`Username '${newUser}' is already taken. Please choose another one.`);
//   } else {
//     console.log(`Username '${newUser}' is available.`);
//   }
// }
