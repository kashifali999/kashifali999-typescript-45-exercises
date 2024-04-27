/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
//===========================================================================================================================================
function summarizeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (!items.length) {
        console.log("You haven't ordered a sandwich.");
    }
    else {
        console.log("You have ordered a sandwich with:");
        items.forEach(function (item) { return console.log("- ".concat(item)); });
    }
}
summarizeSandwich("bread", "turkey", "cheese");
summarizeSandwich("bread", "ham", "lettuce", "tomato");
summarizeSandwich();
