/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
//===========================================================================================================================================
function summarizeSandwich(...items: string[]): void{
    if (!items.length)
    {console.log("You haven't ordered a sandwich.")}
    else {console.log("You have ordered a sandwich with:")
      items.forEach((item) => console.log(`- ${item}`))
         }
    }
summarizeSandwich("bread", "turkey", "cheese");
summarizeSandwich("bread", "ham", "lettuce", "tomato");
summarizeSandwich();
  //End