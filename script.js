// // ### Problem 1:
// // Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code. Create a function that prints all properties. Create an object of the class and use the function.

// //Create GitHubRepository class and give 4 params in constructor
// class GitHubRepository {
//     constructor(userName, fileName, descriptionOfRepository, code) {
//         this.userName = userName;
//         this.fileName = fileName;
//         this.descriptionOfRepository = descriptionOfRepository;
//         this.code = code;
//     }
//     //Create method that will print on properties in console
//     printAllProperties() {
//         console.log(`User name: ${this.userName}\nFile Name: ${this.fileName}\nDescription: ${this.descriptionOfRepository}\nCode: ${this.code}`)
//     }
// }
// //Create a new object in the class
// let Repository = new GitHubRepository("Mary", "Classwork", "Work from class", "Javascript");
// //Use method inside of the class to print out all properties of object that I made
// Repository.printAllProperties();

//***************************************************

// // ### Problem 2:
// // Create a Movie class with the following properties: movieName, rating, and yearReleased. Create a method to change the rating and another one to change the yearReleased properties using prompt. Create an object of the class and use the two methods you created.

// //Create class called Move and give three properties inside of the constructor
// class Movie {
//     constructor(movieName, rating, yearReleased) {
//         this.movieName = movieName;
//         this.rating = rating;
//         this.yearReleased = yearReleased;
//     }
//     //Define method that changes the rating
//     changeRating(newRating) {
//         this.rating = newRating;
//     }
//     //Define method that changes the release date
//     changeRelease(newRelease) {
//         this.yearReleased = newRelease;
//     }
// }
// //Create an object to be added to the class
// let bestMovie = new Movie("Hook", "100%", "1991");
// //test print current object properties
// console.log(bestMovie);
// //Change rating using the method inside of class
// bestMovie.changeRating("99%");
// //Print in console to see the change
// console.log(bestMovie);
// //Change release date using the method inside of class
// bestMovie.changeRelease("1891");
// //Print in console to see change
// console.log(bestMovie);

//**************************************************** 