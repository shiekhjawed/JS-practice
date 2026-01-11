// // console.dir(document.body);dir specail object ki properties and method ko print krwanay ka work krta hy
// //when id element does not exist then null print
// let btn=document.getElementById("btn");
// console.dir(btn)
// //return html collection when class element does not exist then empty html collection
// let heading=document.getElementsByClassName("heading");
// console.dir(heading)
// console.log(heading)
// // let para=document.getElementsByTagName("p")
// // console.dir(para)
// // //another way to access a element which is called query selector it pass alll id class and tag selector if we write in class write with dot in id #
// let firstEl=document.querySelector("p");//firstelement 
// console.dir(firstEl);
//  let allEl=document.querySelectorAll("p");//return nodelist
//  console.dir(allEl)
//back/nmeans nextline
// let div=document.querySelector("div");
// console.dir(div)
// create a h2 heading element with text welcome to append "to my portal" to this text using js question solve
// let h2=document.querySelector("h2")
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+"to my portal"//two string concatenate
//second question
//  let divs=document.querySelectorAll(".box");
// // console.dir(divs);
// for (div of divs){
// console.log(div.innerText);
// }

// console.log(div)
// divs[0].innerText="welcome to my ideas "
// divs[1].innerText="welcome to my portal "
// divs[2].innerText="welcome to my home "
// let idx=1;
// for (div of divs){
//     div.innerText=`welcome to my portal ${idx}`;
//     idx++
// }
// let div = document.querySelector("div");
// div.style.backgroundColor= "green";
// div.innerText= "welcome";
// div.style.fontSize= "27px";
// div.style.visibility="hidden"






//this is manaheel jameel code

// var userData=prompt("enter your age")
//  if (userData >= 18){
//     console.log("welcome to my site you are allowed")
//  } else{
//      console.log("you are not allowed")
//  }
// correct answer
// var userName=prompt("what is your name");
// var age=prompt("what is your age");
// var grade=prompt("what is your grade");
// alert("your name is " + userName + " your age is " + age + " your grade is " + grade);
// console.log("your name is " + userName + " your age is " + age + " your grade is " + grade);

//  var userData = prompt("whats your age ????")
// if (userData <= 20){
//     alert("you are not allowed")
//     console.log ("welcome to my site you are allowed")
//  } else{
//         alert("you are allowed")
//     console.log("you are not allowed")
//  }
//  var userData = prompt("whats your age ????")
// if (userData >= 18){
//     alert("you are not passed")
//     console.log ("welcome to my site you are allowed")
//  } else{
//         alert("you are passed")
//     console.log("you are not allowed")

//  }
// Array aik variable hai jo multiple data ya ek se zyada values ko store karta hai

// Array aik variable hai jo ek se zyada values store karta hai

// splice add method question solve splice original ko change krta hy
var fruits = ["Apple", "Banana", "Orange"];
fruits.pop(); // remove last element
console.log(fruits);
// ["Apple", "Banana"]output
var fruits = ["Apple", "Banana"];
fruits.push("Mango"); // add element at the end
console.log(fruits);
// ["Apple", "Banana", "Mango"]output
var fruits = ["Apple", "Banana", "Orange"];
fruits.shift(); // remove first element
console.log(fruits);    
// ["Banana", "Orange"]output
var fruits = ["Banana", "Orange"];
fruits.unshift("Apple"); // add element at the beginning
console.log(fruits);
// ["Apple", "Banana", "Orange"]output  
var studentName=["ali","umer","asad","ahmed" ,"saim"];
studentName.splice(5, 0, "hassan");
 console.log(studentName);
 var studentName=["ali","umer","asad","ahmed" ,"saim" ,"hamza"];
 studentName.splice(2, 3, "salaar","hassan");
console.log(studentName);
var students = ["Ali", "Sara", "John"];
students.splice(1, 0, "Ahmed", "Fatima"); // add names

console.log(students);
// ["Ali", "Ahmed", "Fatima", "Sara", "John"]output
//splice remove method question solve splice original ko change krta hy
var students = ["Ali", "Ahmed", "Sara", "John"];
students.splice(1, 1); // remove "Ahmed"

console.log(students);
// ["Ali", "Sara", "John"]output
//splice replace method question solve splice original ko change krta hy
var students = ["Ali", "Ahmed", "Sara"];
students.splice(2, 1, "Ayesha"); // replace "Sara"

console.log(students);
// ["Ali", "Ahmed", "Ayesha"]output
// slice method question solve slice original ko change nhi krta hy
var students = ["Ali", "Ahmed", "Sara", "John", "Ayesha"];
var newStudents = students.slice(1, 4);

console.log(newStudents);
// ["Ahmed", "Sara", "John"]otput
//from 2nd index to last index copy
var students = ["Ali", "Ahmed", "Sara", "John"];
var lastStudents = students.slice(2);

console.log(lastStudents);
// ["Sara", "John"]output
//copy entire array
var students = ["Ali", "Ahmed", "Sara"];
var copyStudents = students.slice();

console.log(copyStudents);
// ["Ali", "Ahmed", "Sara"]output
var students = ["Ali", "Ahmed", "Sara", "John", "Ayesha"];
var newStudents = students.slice(1, 4);

console.log(newStudents);
//["Ahmed","sara","john"]outputstart index include end index exclude
// let a = 6;
// console.log(++a)//7 pre increment
// console.log(a++)//7 post increment

// console.log(--a) //7pre decrement
// console.log(a--)  //7post decrement
// let a= 23;
// console.log(a++)//23
// console.log(++a)//25
// console.log(a--)//25
// console.log(--a)//23
// let a=8
// b=5
// console.log(a++)//8
// console.log(--b)//4
// console.log(--a)//8
// console.log(++a)//9
// b=a
// console.log(a++)//9
// console.log(b++)//9
// console.log(a,b)//10 10
// for (var i=1;  i<=10; i++){ 
//     console.log(13*i);
// }
// var userName=["sara","sana","dua",",irha"]
// var lastName="SMIT"
// for(var i=0;i<userName.length;i++){
//     console.log(userName[i] +lastName)
// }
// var userName="shiekhamberjawed";

//     console.log(userName.toUpperCase())

//     var num=prompt("enter a number to check even or odd");
//     if(num%2==0){
//         console.log("this is even number");
//         alert("this is even number");
//     }
//     else{
//         console.log("this is odd number");
//         alert("this is odd number");
//     }
//     var userName=["sharukh","salman","akshay","hrithik" ,"ajay"]
// var lastName=["khan","khan","khanna","roshan" ,"devgn"]
// var fullName=[]
// for(var i=0;i<userName.length;i++){
//     fullName[i]=userName[i] + " " + lastName[i]
//     console.log(fullName[i])
// }
// var userData="sheikh amber jawed";
// var data=prompt("what is your name");
// var updatedData=data.toUpperCase();
// if(updatedData==="Amber Shiekh Jawed"||updatedData==="shiekh amber jawed"||updatedData==="Jawed shiekh amber"
// ){
//     alert("your allowed");
// }else{
//     alert("your not allowed");
// }
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) break;
//   console.log(i);
// }
// var name="                 shiekh                         "
// console.log(name.trim())
// let total = 100;

// total -= 20;   // discount
// total += 10;   // tax
// console.log(total)//90

// var color=["red","blue","green","yellow"]
// var rabdomColor=color[Math.floor(Math.random()*color.length)]
// console.log(rabdomColor)
// includes method

var text="hello world"
console.log(text.includes("world"))

// arrays length method
var myName = "Aiman";
console.log(myName.length);



var studentsName = ["Veeda", "Manahil", "Farwa", "Mahnoor"];
console.log(studentsName.length);
// slice method in string
var city = "karachi";
console.log(city);
var firstChar = city.slice(0, 1);
console.log(firstChar);
var upper = firstChar.toUpperCase();
console.log(upper);
var otherChar = city.slice(1);
console.log(otherChar);
var combine = upper + otherChar;
console.log(combine);
// slice method in array index start include hota hy end exclude hota hy
var fruits = ["Orange", "Pineapple", "mango", "Guava"];
var threeFruits = fruits.slice(0, 3)
console.log(threeFruits);
// indexOf and lastIndexOf
// strings
var text = "i love js, js is easy";
var findingIdx = text.indexOf("js");
console.log(findingIdx);


var findingLastIdx = text.lastIndexOf("js");
console.log(findingLastIdx);

// arrays
var vegetables = ["Brinjal", "Onion", "Potato", "Onion"];
var first = vegetables.indexOf("Onion");
console.log(first);


var first = vegetables.lastIndexOf("Onion");

//case sensitive
console.log(first);
var city = "karachi";
console.log(city);


var capital = city.toUpperCase();
console.log(capital);


var city2 = "LAHORE";
console.log(city2);


var small = city2.toLowerCase();
console.log(small);
// charAt
var colorName = "goodgoodies";
var idk = colorName.charAt(3);
console.log(idk);
// replace method

var para = "i like the tweet, tweet, tweeting of the birds";

// first instance change
 var newPara = para.replace("tweet", "buzz");
console.log(newPara);

// global chnge
var newPara = para.replace(/tweet/g, "buzz").replace(/birds/g, "bees");
console.log(newPara);
// Math.round 
var num = 34.5;
var numRound = Math.round(num);
console.log(numRound);


// Math.floor removes decimal part
var num2 = 34.5;
var numFloor = Math.floor(num2);
console.log(numFloor);


// Math.ciel increases number and removes decimal part
var num3 = 34.1;
var numCiel = Math.ceil(num3);
console.log(numCiel);


// Math.random()
var colors = ["red", "blue", "green"];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randomColor);


var fruits = ["apple", "mango", "orange"];
var ranFr = fruits[Math.floor(Math.random()*fruits.length)];
console.log(ranFr);


for (let i = 1; i <= 3; i++) {      // Outer loop
  for (let j = 1; j <= 3; j++) {  // Inner loop
    if (j == 2) {
      break;
    }
    console.log(i, j);
  }
}










