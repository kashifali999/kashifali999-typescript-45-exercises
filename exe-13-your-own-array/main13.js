// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//========================================================================================================================
// Method # 01
var favoriteTransportations1 = ["motorcycle", "scooter", "car", "bus", "train", "plane"];
console.log("I would like to own a ".concat(favoriteTransportations1[0]));
console.log("I would like to own a ".concat(favoriteTransportations1[1]));
console.log("I would like to own a ".concat(favoriteTransportations1[2]));
console.log("I would like to own a ".concat(favoriteTransportations1[3]));
console.log("I would like to own a ".concat(favoriteTransportations1[4]));
console.log("I would like to own a ".concat(favoriteTransportations1[5]));
// Method # 02
var favoriteTransportations2 = ["motorcycle", "scooter", "car", "bus", "train", "plane"];
favoriteTransportations2.map(function (Vehicles) { return (console.log("I would like to own a ".concat(Vehicles))); });
