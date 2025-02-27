//----------------Question 1------------------------
let score = 75;
let grade;
if (score >= 90) {
 grade = "A";
} else if (score >= 80) {
 grade = "B";
} else if (score >= 70) {
 grade = "C";
} else if (score >= 60) {
 grade = "D";
} else {
 grade = "F";
}
console.log(grade);
if (grade !== "F" ? score > 80 : false) {
 console.log("Excellent performance");
} else {
 console.log("Keep working hard");
}
//output:
//C
//Keep working hard
//Reason:
//score = 75 falls in the "C" grade category.
//Since score is not greater than 80, it does not print "Excellent performance", instead prints "Keep working hard".



//-----------------------Question 2--------------------------------
let authenticated = true;
let premium = false;
let admin = false;
console.log(authenticated && (premium || admin) ? "Full Access" : "Limited Access");
//output:Limited Access
//Reason: console.log: "Limited Access" because authenticated is true, but neither premium nor admin is true.
authenticated = false;
console.log(authenticated && (premium || admin) ? "Full Access" : "Limited Access");
//output:Limited Access
//Reason:console.log: "Full Access" because authenticated is true and premium is true.
authenticated = true;
premium = true;
console.log(authenticated && (premium || admin) ? "Full Access" : "Limited Access");
//output: Fill Access
//Reason: console.log: "Full Access" again because the values remain unchanged.

//--------------------Question 3-----------------------
let temperature = 25;
let humidity = 80;
let precipitation = 60;
let result;
if (temperature > 30) {
 if (humidity > 90) {
 result = "Stay indoors";
 } else if (precipitation > 80) {
 result = "Take an umbrella";
 } else {
 result = "Enjoy the warm weather";
 }
} else if (temperature > 20) {
 if (humidity > 70 && precipitation > 50) {
 result = "Expect rain soon";
 } else if (humidity <= 70 && precipitation <= 50) {
 result = "Perfect weather";
 } else {
 result = "Changeable conditions";
 }
} else {
 result = "Bring a jacket";
}
console.log(result);
//output: Except rain soon
//Reason:
//The temperature > 20 condition is true.
//The humidity > 70 && precipitation > 50 condition is also true.
//So, "Expect rain soon" is a result.

//-------------------------Question 4---------------------
let userAge = 19;
let hasParentalConsent = false;
let isSubscribed = true;
let message;
if (userAge >= 18) {
 message = "Adult content accessible";
} else if (userAge >= 13) {
 if (hasParentalConsent) {
 message = "Teen content accessible with consent";
 } else {
 message = "Parental consent required";
 }
} else {
 message = "Content not accessible";
}
if (isSubscribed) {
 if (userAge < 18 && !hasParentalConsent) {
 message = "Subscribe status pending parental approval";
 } else {
 message += " with premium features";
 }
}
console.log(message);
//output: Adult content accessible with premium features

//--------------------Question 5-----------------------------
let a = 5, b = 10, c = 15;
let result2 = "";
if (a < b) {
 if (b < c) {
 a = b;
 if (a < c) {
 b = c;
 if (b > a) {
 result2 += "Path 1 ";
 c = a;
 }
 }
 } else {
    result2 += "Path 2 ";
    c = a;
    }
   } else {
    result2 += "Path 3 ";
    a = c;
   }
   if (a == 10 && b == 15) {
    result2 += "Condition X met";
   } else if (a == 5 && c == 5) {
    result2 += "Condition Y met";
   } else {
    result2 += "No conditions met";
   }
   console.log(`a=${a}, b=${b}, c=${c}`);
   console.log(result2);
 //output:
 //a=10 b=15 c=10
 //Path 1 Condition X met


 //-----------------------Question 6------------------------
 let num1 = 25; // First number
let num2 = 40; // Second number

let greatest = num1 > num2 ? num1 : num2 > num1 ? num2 : "Both numbers are equal";
console.log('The greatest number is: ${greatest}');
//output: The greatest number is: ${greatest}

//-----------------------Question 7----------------------------
// let num11 = Number(prompt("Enter the first number:"));
// let num12 = Number(prompt("Enter the second number:"));
// let num13 = Number(prompt("Enter the third number:"));
// let greatest1 = Math.max(num11, num12, num13);
// console.log(`The greatest number is: ${greatest1}`);
//output:
//Enter the first number:1
//Enter the second number:2
//Enter the third number:3
//The greatest number is:3


//-------------------------Question 8----------------------------
// let age = Number(prompt("Enter your age:"));
// if (age > 18 && age < 90) {
//     console.log("Eligible to Vote");
// } else {
//     console.log("Not Eligible to Vote");
// }
//output:
// Enter your age:24
//Eligible to Vote

//-----------------------------------Question 9--------------------------------
// undefined is when we dont want to initialize the value. 
// null is defined as when we dont want to initialize the value but have to give some value then use null.



//------------------------------------Question 11------------------------------
let age1 = 20; 
let hasLicense = true; 
if (age1 > 18 && hasLicense) {
    console.log("The person can drive");
} else {
    console.log("The person cannot drive");
}
//output: The person can drive




//------------------------Question 12 and Question 14----------------------------
let scored  = 85;
let attendance = 75;
let extraCredit = true;

if ((scored > 80 && attendance > 80) || extraCredit) {
    console.log("Student Passes ");
} else {
    console.log("Student Fails ");
}
//output: Student Passes

//-----------------------------Question 13------------------------------------
let age = 24;

if (age < 13) {
    console.log("You are a Child");
} else if (age >= 13 && age <= 19) {
    console.log("You are a Teenager");
} else {
    console.log("You are an Adult");
}
//output: You are an Adult

//----------------------------Question 15------------------------------
let temperature1 = 35;
let isHot = temperature1 > 30;
console.log(isHot); // Output: true
