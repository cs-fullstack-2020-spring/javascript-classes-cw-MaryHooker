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

// // ***************************************************

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
//     changeRating() {
//         let newRating = prompt("Enter a new rating:") // !! NICE, happy you managed to get this in before I pulled
//         this.rating = newRating;
//     }
//     //Define method that changes the release date
//     changeRelease() {
//         let newRelease = prompt("Enter a new release:") // !! NICE, happy you managed to get this in before I pulled
//         this.yearReleased = newRelease;
//     }
// }
// //Create an object to be added to the class
// let bestMovie = new Movie("Hook", "100%", "1991");
// //test print current object properties
// console.log(bestMovie);
// //Change rating using the method inside of class
// bestMovie.changeRating();
// //Print in console to see the change
// console.log(bestMovie);
// //Change release date using the method inside of class
// bestMovie.changeRelease();
// //Print in console to see change
// console.log(bestMovie);

// //**************************************************** 

// ### Problem 3:
// Create a Student class with the following properties : studentName, codeSchoolCohort, and grades(grades should be an array of objects and each object should have the properties assignemtName and assignemtnScore). Create a method that accepts a student name and updates the studentName of an instance of your Student Class. Create a method that accepts an assignment name and assignment score and adds a grade object to the grades array. Create two instances of this class with empty grade arrays. Update the name of one instance of the Student Class using the class method. Add one grade object to each instance of the Student Class grade array using the class method.

// HINT : use object literal notation to create a grade object in the grade array for each instance of the Student Class

//Create a class called Student
class Student {
    constructor(studentName, codeSchoolCohort, grades) {
        this.studentName = studentName;
        this.codeSchoolCohort = codeSchoolCohort;
        this.grades = grades;
    }

    //Create method that accepts a student name from user and replaces the value of studentName
    acceptsAName() {
        let newName = prompt("Enter a name");
        this.studentName = newName;
    }

}
//Create an object to be added to the class
let newStudent = new Student("Mary", "4", "90")
//test that the new object prints in the console
console.log(newStudent);
//Use the method acceptsAName to initiate the prompt and save it inside the previous object
newStudent.acceptsAName();
//Print the new object property values
console.log(newStudent);

//***********************************************************
