// // most functions in JavaScript are
// // sychronous; the effect you see
// // they happen after another in sequential order
// console.log("Hello world");
// console.log("Fetch started");

// // for asynchronous functions,
// // JavaScript execute it in the background
// // and just move to the next line
// // why fetch asynchronous because the
// // JS designers made it so
// fetch("fruits.json");

// // why does fetch ended shows up
// // before fetch("fruits.json") finishes?

// console.log("Fetch ended");


console.log("Before fetch started");
// the first parameter of .then() is a function
// the function will only execute
// when the fetch finishes (also known as a promise)
fetch("fruits.json").then(function(r){
   // the `response` parameter is from the fetch function
   // it is passed to the callback function when fetch finishes
   return r.json(); // response.json() is also asynchronous
}).then(function(data){
    console.log(data);
})

console.log("123456")