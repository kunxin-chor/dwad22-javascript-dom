// sanity check to ensure that
// script.js has been included correctly
// alert("hello world");

// all HTML files have access to the `document` object
// the document is the Document Object Model (or DOM)

// DOM Manipulation
// 1. select the HTML element (node object) that we want to manipulate
// 2. apply the changes that we want



let btn = document.querySelector("#my-button");

// first parameter: the type of event
// second parameter: the function to execute
// when the event occcurs,
//  - two reasons to  use annoymous functions
//   1) no need of think of a name
//   2) most likely the function is only used for one button
//      so need to write a proper function for it
btn.addEventListener("click", function () {
    let header = document.querySelector("#title");
    header.innerHTML = "Goodbye world";
    header.style.color = "red";

    // use camel case for setting the style rules
    // font-family => fontFamily
    header.style.fontFamily = "Verdana";

    // select by class name (querySelector will only select the first one)
    let firstFruit = document.querySelector(".fruit");
    // in css to change background color is: background-color
    firstFruit.style.backgroundColor = "yellow";

    // what if we want to select all elements with a class
    // it will return an array of elements
    let fruits = document.querySelectorAll(".fruit");
    // fruits will be an array of element that has class .fruit
    
    // we use let...of loop to retrieve one item at a time from the array
    for (let f of fruits) {
        f.style.backgroundColor = "blue";
    }

    // select all the <li> with querySelectorAll
    document.querySelectorAll("li");

    // getElementById allows us to retrieve an element by its id
    let subheading = document.getElementById("subtitle");
    subheading.style.color = "blue";

    // all the other ways of selecting
    // document.getElementById -- select by an id
    // document.getElementsByClassName -- select by a class and will return an array of elements
    // document.getElementsByTagName -- select by tag name


});