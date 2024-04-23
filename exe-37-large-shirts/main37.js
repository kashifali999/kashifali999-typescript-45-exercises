/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
//==============================================================================================================================================
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "'I love TypeScript'"; }
    console.log("I am making T-shirts of ".concat(size, " size with a message ").concat(message, " printed on those"));
}
make_shirt("Small", "'I'm a coder'");
