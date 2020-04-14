// All About Me
// instantiate and assign the following variables with information about yourself:
//     firstName should hold a string of your first name
// lastName should hold a string of your last name
// age should hold a number of your age
// likesTravel should hold a boolean representing whether or not you like to travel
// // Log each variable to the console.

// var firstName = "Sarah"
// var lastName = "Brooks"
// var age = 30
// var likesTravel = false;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(likesTravel);

// In your JavaScript file, instantiate and assign a variable called movieArray.This variable should hold an array of your favorite movie titles.(Don 't go overboard- two or three is fine).
//         Log each movie in the array to the console.

// var movieArray = ["Star Wars:The Last Jedi", "The Little Mermaid", "Cinderella (2015)", "White Christmas"]

// console.log(movieArray)
// console.log(movieArray[0])
// console.log(movieArray[1])
// console.log(movieArray[2])
// console.log(movieArray[3])

// Lightning Exercise 3
// Instead of storing the data from your first lightning exercise in separate variables, store them in an object.Your object should have a property of firstName, lastName, age, likesToTravel.It should also have a property called favoriteMovies, which should hold the array of your favorite movies you created in the last lightning exercise.

// var sarah = {
//     firstName: "Sarah",
//     lastName: "Brooks",
//     age: 30,
//     likesToTravel: false,
//     movieArray: ["Star Wars: The Last Jedi", "Cinderella (2015)", "GOTG vol 1"],
// }
// console.log(sarah)

// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.
// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(wardrobe.height)
// console.log(wardrobe.manufacturer)
// console.log(wardrobe.contents[0])
// console.log(wardrobe.contents[2])
// console.log(wardrobe.contents[3])
// console.log(wardrobe.contents[4])
// console.log(wardrobe.contents[1])
// console.log(wardrobe.depth)
// console.log(wardrobe.width)

// Lightning Exercises
// Time to practice dot and square - bracket notation.Use the following object to complete the lightning exercises below.
// const empireStateBuilding = {
//         stories: 103,
//         height: 1453,
//         address: "350 Fifth Avenue, Manhattan, New York 10118",
//         squareFeet: 2768591,
//         constructionDate: 1931,
//         cost: 40948900,
//         owner: "Empire State Realty Trust",
//         eastWestLength: 424,
//         northSouthLength: 187,
//         architect: "Shreve, Lamb & Harmon"
//     }
// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console.Create 5 variables first with the keys as their values.Use those variables to look up the values.
// var one = "address"
// console.log(empireStateBuilding.stories)
// console.log(empireStateBuilding.height)
// console.log(empireStateBuilding.squareFeet)
// console.log(empireStateBuilding.eastWestLength)
// console.log(empireStateBuilding.northSouthLength)
// console.log(empireStateBuilding["address"])
// console.log(empireStateBuilding["constructionDate"])
// console.log(empireStateBuilding["cost"])
// console.log(empireStateBuilding["owner"])
// console.log(empireStateBuilding["architect"])


// const beatles = {
//     albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
//     history: {
//         formed: 1960,
//         disbanded: 1970
//     },
//     members: [{
//             name: "George Harrison",
//             birth: 1943,
//             death: 2001
//         },
//         {
//             name: "Paul McCartney",
//             birth: 1942,
//             death: null
//         },
//         {
//             name: "John Lennon",
//             birth: 1940,
//             death: 1980
//         },
//         {
//             name: "Ringo Starr",
//             birth: 1940,
//             death: null
//         }
//     ]
// }
// console.log(`${beatles.members[1].name}was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]}.`)
// Output the following value to the console.

// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album

// Create a new project in the workspace / javascript / exercises / githubobjects directory.
// Create a file named github_data.js
// Copy the contents of github_data.js here in the course to your local file.
// Your task it to use your knowledge of accessing property values and array indices to output the commit message
// for the push event with an id of 8030403992.

// Start with this
// console.log(githubData[ ? ].)

// In your JavaScript file, declare a new variable called likesToTravel and set it equal to true or false.
// If likesToTravel is true, log "Bon voyage!"
// to the console.If not, log "Enjoy your couch!"
// to the console.


var likesToTravel = true

if (likesToTravel === true) {
    console.log("Bon Voyage")
} else {
    console.log("Enjoy your couch!")
}

// Fried Pickles are the Best
// In your JavaScript file, declare a new variable called favoriteFood and set it equal to your favorite food.
// Write a conditional that checks to see
// if the favoriteFood variable is equal to "fried pickles"
// OR "pepperoni rolls".If so, log "Congratulations! You have excellent taste!"
// to the console.Otherwise, log "Clearly you have not tried fried pickles or pepperoni rolls."
// to the console.

var favoriteFood = "fried pickles"

if (favoriteFood === "fried pickles") {
    console.log("Congrats you have great taste")

} else if (favoriteFood === "pepperoni rolls") {
    console.log("Congrats you have great taste")
} else {
    console.log("ew gross you have bad taste")
}

// Psychotic Bird
// In your JavaScript file, write a
// while loop that outputs the phrase "TWEET TWEET"
// 100 times to the console.

for (var i = 0; i < 100; i++) {
    console.log("TWEET TWEET MOTHERFUCKERS")
}

// Days of the Week
// In your JavaScript, create a new variable called weekArray.It should store an array of strings representing seven days of the week
// Loop through the array and print each day to the console.

var weekArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

for (var i = 0; i < weekArray.length; i++) {
    console.log(weekArray[i])
}