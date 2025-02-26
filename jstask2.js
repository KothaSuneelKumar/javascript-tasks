//------------------Question 1--------------------------



// var:var is a global and function scope it can be reassigned and redeclared.
//let:let can be reinitialized but cannot be redeclared and blocked scoped.
//const: const is a blocked scoped and it cannot be redeclared also cannot be reinitalized.


// var
function w()
{
var Name12="Suneel";
console.log(Name12);
var Name132="Kotha";
console.log(Name132);
}
w();
var Name11="Suneel";
console.log(Name11);

// let
function q(){
    let N="ma";
    // let N="am" //already initialized
    console.log(N);
}
q();
let N="am"
console.log(N);

// const
function u()
{
    const A="high"
    console.log(A);
    // const A="high"
}
u();
const A="high"
console.log(A)

//--------------Question 2------------------------------
//number,string,boolean are primitive datatypes
// array,object,function are non-primitive datatypes
//difference : primitive is immutable they cannot change value when we assign 
//where as non primitive  change the value when we assign.
//primitive data type example
let str = "Good";
let str11 = str; 
str11 = "Morning"; 
console.log(str); 
console.log(str11); 
// non primitive datatype example
let array=[100,200,300];
let array1=array;
array=[400,500,600] 
 console.log(array);
 console.log(array1);



//---------------Question 3------------------------------
let result = 3 + 4 * 5 - 6 / 2 && 10 || 5;
//output=10

//------------------Question 4----------------------------
// undefined is when we dont want to initialize the value 
// null is defined as when we dont want to initialize the value but have to give some value then use null




//----------------Question 5-----------------------------
 let a1=5;
 let b1=10;
 a1=a1+b1; //using arithematic operations
 b1=a1-b1;
 a1=a1-b1;
 console.log(a1);
 console.log(b1);
 
 
//--------------------Question:6------------------------------
let result1 = "5" + 3;
console.log(result1);
console.log(typeof result1);
// result1:53  
// datatype:string
let result2 = "5" - 3;
console.log(result2);
console.log(typeof result2);
// result2:2   
// datatype:number
let result3 = "5" * "3"; 
console.log(result3);
console.log(typeof result3);
// result3:15 
// datatype:number
let result4 = 10 / "2"; 
console.log(result4);
console.log(typeof result4);
// result4:5 
// datatype:number
let result5 = 8 * null; 
console.log(result5);
console.log(typeof result5);
// result5:0 
// datatype:number
let result6 = "five" * 2; 
console.log(result6);
console.log(typeof "result6");
// result6:NaN 
// datatype:number
let result7 = "5" == 5;  
console.log(result7);
console.log(typeof result7);
// result7:true 
//datatype:boolean
let result8 = "5" === 5; 
console.log(result8);
console.log(typeof result8);
// result8:false 
// datatype:boolean

//----------------------Question 7-----------------------
let str1 = "Hello";
let str2 = "World";
let num1 = 5;
let num2 = 10;
console.log(str1+" "+str2);
console.log((num1+num2)/2);
let str3 =str1.length>str2.length;
console.log(str3);
let num3=num1+num2;
let num4="10"+5;
let ans=num3.length>num4.length;
console.log(ans);

//-----------------------Question 8---------------------
// let number = parseInt(prompt("Enter a number: "))
// if (number % 2 == 0 && number % 3 == 0){
//     console.log("The number is divisible by both 2 and 3.")}
// else if (number % 2 == 0 || number % 3 == 0){
//     console.log("The number is divisible by either 2 or 3.")}
// else{
//     console.log("The number is divisible by neither 2 nor 3.")}





//--------------------Question:9------------------------

let a = 10;
console.log(a);
// output:10
let b = 3;
console.log(b);
// output:3
let addition = a + b;
console.log(addition);
// output:13
let subtraction = a - b;
console.log(subtraction);
// output:7
let multiplication = a * b;
console.log(multiplication);
// output:30
let division = a / b;
console.log(division);
// output:3.3333333333335
let modulus = a % b;
console.log(modulus);
// output:1
let exponentiation = a ** b;
console.log(exponentiation);
// output:1000
let increment = a++;
console.log(increment);
// output:10
let decrement = --b;
console.log(decrement);
// output:2

//--------------------Question:10-------------------------
let p11= true;
let q11 = false;
console.log(p11 && q11);
//output:false
console.log(p11 || q11);   
//output:true
 console.log(!p11);
 //output:false
console.log(!q11);
// //output:true
console.log(p11 && !q11);
//output:true

//---------------------Question 11-----------------------
let name1= "Alex";
console.log(name1);
let favoritecolor= "blue";
console.log(favoritecolor);
let numerickey= 123;
console.log(numerickey);
let city ="Techville";
console.log(city);
let country="codeland";
console.log(country);
let age=25;
console.log(age);







//-------------------------Question 12-------------------
let x = 5;
let y = x++;
console.log(x);
console.log(y);
//output : x=6 because it is incremented
//         y=5 ,because x=5 here postfix increment happen

let p1 = 5;
let q1 = ++p1;
console.log(p1);
console.log(q1);
//output : p1= 6 because here prefix increment happen
//         q1= 6 because here p is incremented 



//-------------------------Question 13--------------------
let num = 10;
num += 5;
num *= 2;
num -= 7;
num /= 3;
num %= 4; 
console.log(num);
//output:3.666666666666667


//-----------Question 14----------------------

let greeting = "Hello";
let name5 = "JavaScript";
console.log(greeting + " " + name5);
greeting += "!";
console.log(greeting);
//output:Hello Javascript
//       Hello!

//-----------Question 15--------------------------------
let result11 = 2 + 3 * 4;
console.log(result11); //output:14
let result12 = (2 + 3) * 4;
console.log(result12); //output:20
let result13 = 20 / 4 - 2;
console.log(result13);//output:3
let result14 = 20 / (4 - 2);
console.log(result14);//output:10
let result15 = 5 + 10 / 2 * 3 - 1;
console.log(result15);//output:19





