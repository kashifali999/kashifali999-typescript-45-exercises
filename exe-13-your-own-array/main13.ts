// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//========================================================================================================================
// Method # 01
let favoriteTransportations1:string[] = ["motorcycle", "scooter", "car", "bus", "train", "plane"]
console.log(`I would like to own a ${favoriteTransportations1[0]}`)
console.log(`I would like to own a ${favoriteTransportations1[1]}`)
console.log(`I would like to own a ${favoriteTransportations1[2]}`)
console.log(`I would like to own a ${favoriteTransportations1[3]}`)
console.log(`I would like to own a ${favoriteTransportations1[4]}`)
console.log(`I would like to own a ${favoriteTransportations1[5]}`)

// Method # 02
let favoriteTransportations2:string[] = ["motorcycle", "scooter", "car", "bus", "train", "plane"]
favoriteTransportations2.map((Vehicles)=>(console.log(`I would like to own a ${Vehicles}`)))