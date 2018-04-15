// const person = {
//     name: "Nikita",
//     age: 16,
//     location:{
//         city:"Krasnoyarsk",
//         temp: 2
//     }
// }

// const { name:firstName = "Anonymous", age, location } = person;
// const { city, temp:temperature } = person.location;

// console.log(`${firstName} is ${age}`);
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {

//     }
// }

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

// const address = ["1299 s Juniper Street", "Philadelphia", "Pennsylvania", "19147"];
// const [ , city, state = "New York" ] = address;

// console.log(`You are in ${city} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [ coffee, , price ] = item;

console.log(`A medium ${coffee} costs ${price}`);