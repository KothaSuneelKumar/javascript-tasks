//Easy;


// Question 1
function welcome(name = "Guest") {
    console.log("Welcome " + name + " !");
}
welcome("Suneel");
welcome();

// Question 2
const calculateArea = function(width, height) {
    console.log(width * height);
}
calculateArea(7,8);

//  Question 3
function isEven(number) {
    console.log(number % 2 === 0);
}
isEven(6);
isEven(9);

// Question 4
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Question 5
function reverseString(str) {
    console.log(str.split('').reverse().join(''));
}
reverseString("Achiever");

// Question 6
function double(num) {
    console.log(num * 2);
}
double(6);

// Question 7
function quadruple(num) {
    console.log(num * 4);
}
quadruple(9);

// Question 8
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(7));

//Medium

// Question 1
function math(operator, number1, number2) {
    let result;

    switch (operator) {
        case "add":
            result = number1 + number2;
            console.log("Addition: " +number1+"+"+number2+"="+result);
            break;
        case "sub":
            result = number1 - number2;
            console.log("Subtraction: "+number1+ "-" +number2 +"="+result);
            break;
        case "multiply":
            result = number1 * number2;
            console.log("Multiplication:" + number1 + "*" + number2 + "=" + result);
            break;
        case "divide":
            if (number2 !== 0) {
                result = number1 / number2;
                console.log("Division:" + number1 + "/" + number2 + "=" + result);
            } else {
                console.log("we cannot divide by zero");
            }
            break;
       
    }
}

math("add", 7, 2); 
math("sub",12,5);
math("multiply", 2, 4);
math("divide",4 ,8);
  

// Question 2
(function() {
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
})();

// Question 3
function createUser(username, role = "user") {
    return {
        userName: username,
        role: role
    };
}
console.log(createUser("Suneel kumar","developer"));


// Question 4
function operator(obj, num1, num2) {
    obj.result = num1 + num2;
    console.log(obj.result);
    return null;
}
let secondobj ={};
operator(secondobj,6,8);
console.log(secondobj.result);


// Question 5
(() => {
    const num1 = 6;
    const num2 = 9;
    console.log(num1 * num2);
})();