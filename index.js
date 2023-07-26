// 1. Ways to print in javascript
// console.log("Hello world");
// alert("me");
// document.write("this is documnet write")


// 2. JavaScript Console API
// console.log("Hello World!!")
// alert("Click Me");
// document.write("This is document");
// console.warn("This is a warning");
// console.error("This is error");

// 3. Javascript Variables
// what are variables? -- container to store data values.
// var number1 = 34;
// var number2 = 45;
// console.log(number1 + number2);

// Data types in Javascript
// Numbers
// var num1 = 23;
// var num2 = 43;

// String
// var str1 = "This is string";
// var str2 = "This is also a string"

// Objects
// var marks = {
//     Saif: 99,
//     Yaqoob: 65,
//     Kashif: 61
// }
// console.log(num1 + num2);
// console.log(marks);
// console.log(str1);
// console.log(str2);

//  Booleans
// var a = true;
// var b = false;
// console.log(a, b);

// var und = undefined;
// console.log(und);

// var n = null;
// console.log(n);

/*
At a very high level , there are two types of data types in javascript 
1. Primitive Data types -- undefined , null, numbers , string , boolean , symbol
2. Rference Data types -- Arrays and Objects
*/

// var arr = [1, 2, "Saif", 4, "Yaqoob"]
// console.log(arr);

/*
Operators in javascript 
1. Arithmetic operator
*/
// var a = 43;
// var b = 23;
// console.log("The value of a + b is", a+b);
// console.log("The value of a - b is", a-b);
// console.log("The value of a * b is", a*b);
// console.log("The value of a / b is", a/b);

// 2. Assignment Operator
// var c = b;
// c = b+2;
// c = b-4;
// c = b*5;
// c = b/5;

// console.log(c);

// Comaparision Operator

// var x = 24;
// var y = 54;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical Operator
// 1. Logical And Operator
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);
// 2. Logical Or Operator
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// 3. Logical Not Operator
/*
console.log(!false);
console.log(!true);

// Function in Javascript
// DRY = Do not Repeat Yourself
function avg(a, b){
    c = (a+b)/2;
    return c;

}
c1 = avg(4, 6);
c2 = avg(23, 27);
// console.log(c1, c2);

// Conditionals in Javascript
// 1. Single if statement
var age = 19;
if(age > 18){
    console.log("You can drink water or any thing");
}
// 2. If else statement
var age = 34;
if(age > 18){
    console.log("You can drink water or any thing");
}
else{
    console.log("You cannot drink water or any thing");
}

// 3. If-else ladder statement
if(age > 35){
    console.log("you are not a kid");

}
else if(age > 32){
    console.log("Bachhe nahi rahe");
}
console.log("End of ladder");
*/


// Loops in javascript

// var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//    if(i==2){
//     // break;
//     continue;
//    }
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
// do{
//     console.log(arr[j]);
//     j++;
// }while(j <arr.length);

// let myArr = ["fan", "Watch", 34, null, true];
// Arrays methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Saif");
// myArr.shift();
// console.log(myArr.unshift("Saif"));
// const newLen = myArr.unshift("Saif");
// console.log(newLen);
// console.log(myArr);
// myArr.toString()
// myArr.sort()
//  let d = [12,42,54,24,44];
// console.log(d.sort());

//  String Methods in JavaScript
// // let myLovelyString = "Saif is a good boy good";
// // console.log(myLovelyString.length);
// // console.log(myLovelyString.indexOf("boy"));
// // console.log(myLovelyString.lastIndexOf("good"));
// // console.log(myLovelyString.slice(3,10));
// // console.log(myLovelyString.replace("Saif", "Yaqoob"));
// // console.log(myLovelyString.replace("good", "bad"));
// // let myDate = new Date();
// // console.log(myDate);
// // console.log(myDate.getDate());
// // console.log(myDate.getDay());
// // console.log(myDate.getTime());

// // DOM Manipulation
// let elem = document.getElementById('click');
// // console.log(elem);

// let elemclass = document.getElementsByClassName('container');
// // console.log(elemclass);
// // elemclass[0].style.background = "yellow" ;
// elemclass[0].classList.add("bg-primary")
// elemclass[0].classList.add("text-success")
// // console.log(elem.innerHTML);
// // console.log(elem.innerText);
// // console.log(elemclass[0].innerHTML);
// // console.log(elemclass[0].innerText);
// tn = document.getElementsByTagName("div")
// // console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created paragraph";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created Bold";
// tn[0].replaceChild(createdElement2, createdElement);
// // removeChild(element) ---> remove the element 

// // Selecting using Query 
// sel = document.querySelector('.container')
// // console.log(sel);
// sel = document.querySelectorAll('conatiner')
// // console.log(sel);

// // // Events in javascript
function clicked(){
//     // console.log('The button was clicked');
}
// window.onload = function(){
//     console.log('The page was loaded');

// }
// firstContainer.addEventListener('click', function(){
//     // document.querySelectorAll('.container')[1].innerHTML = "<b> We have Clicked </br>"
// //     console.log("Clicked on container");
// })
// // firstContainer.addEventListener('mouseover', function(){

//     // console.log('Mouse on a container');
// // })

// // firstContainer.addEventListener('mouseout', function(){
// //     console.log("Mouse is out from a conatiner");
// // })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up on the conatiner");
// })
// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<br> We have clicked</br>"
//     console.log("Mouse down on tha conatiner");
// })
// Arrow function
// function sum(a,b){
//     return a+b;
// }

sum = (a,b)=>{
    return a+b;
}
logkaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval Fired </br>"

    console.log("I am Your Log")
}
// SetTimeout and setinterval 

// setTimeout(logkaro, 2000);


// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

clr = setInterval(logkaro, 2000);
// JavaScript LocalStorage

localStorage.setItem('name', 'Saif')
// localStorage
// localStorage.clear()
// localStorage.getItem
// localStorage.removeItem('name');
// console.log(localStorage);
// localStorage.clear();
// JSON ---> JavaScript object Notation

obj = {name: "Saif Khan", length: 1, a: {this: 'tha\t'}}
jso = JSON.stringify(obj);
console.log(jso)
console.log(typeof jso)
console.log(typeof obj)

parsed = JSON.parse(`{"name":"Saif Khan","length":1,"a":{"this":"that"}}`)
console.log(parsed);
// tempelate literals -- Backticks

a = 23;
console.log(`This is my ${a}`);
