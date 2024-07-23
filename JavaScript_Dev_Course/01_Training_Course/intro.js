/*
 * 1. Introduction to JavaScript
 * 2. JavaScript is a high-level, interpreted programming language
 * 3. JavaScript is a multi-paradigm language
 * 4. JavaScript is a dynamic language
 * 5. JavaScript is a prototype-based language
 * 6. JavaScript is a weakly typed language
 * 7. JavaScript is a case-sensitive language
 * 8. JavaScript is a client-side language
 * 9. JavaScript is an object-oriented language
 * 
 * 
*/

//The console.log() method is used to log or print messages to the console. It can also be used to print objects and other info.

console.log("Hello World");
console.log(123);
console.log(true);
var greeting = "Hello";
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});
console.error("This is an error message");
//console.clear();
console.warn("This is a warning message");
console.time("Hello");
console.log("Hello World");

console.log(40 + 3.5);
console.log(2024 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);

console.log('Hello' + 'World');
console.log('Hello' + ' ' + 'World');
console.log('Teaching the world how to code'.length);
console.log('Codecademy'.toUpperCase());
console.log('    Remove whitespace   '.trim());

console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

/*Let’s take one more glance at the concepts we just learned:

    Data is printed, or logged, to the console, a panel that displays messages, 
    with console.log().
    
    We can write single-line comments with // .
    
    There are 8 fundamental data types in JavaScript: numbers, BigInts, 
    strings, booleans, null, undefined, symbol, and object.
    
    Numbers are any number without quotes: 23.8879
    
    Strings are characters wrapped in single or double quotes: 'Sample String'
    
    The built-in arithmetic operators include +, -, *, /, and %.
    Objects, including instances of data types, can have properties, 
    stored information. The properties are denoted with a . after the 
    name of the object, for example: 'Hello'.length.
    
    Objects, including instances of data types, can have methods which 
    perform actions. Methods are called by appending the object or instance 
    with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().
    
    We can access properties and methods by using the ., dot operator.
    
    Built-in objects, including Math, are collections of methods and 
    properties that JavaScript provides.
*/
