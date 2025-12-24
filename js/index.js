// // console.log("Hello, World!");

// // let age = 25;
// // age = 26; // valid

// // const name = "Chetan";

// // let title = "Frontend Bootcamp"; // string
// // let score = 90; // number
// // let isActive = true; // boolean
// // let noValue = null; // null
// // let notSet; // undefined


// // let sum = 10 + 5;
// // let diff = 10 - 5;
// // let mul = 10 * 5;
// // let div = 10 / 5;


// // let marks = 85;

// // if (marks >= 90) {
// //   console.log("A Grade");
// // } else if (marks >= 75) {
// //   console.log("B Grade");
// // } else {
// //   console.log("C Grade");
// // }

// // let role = "admin";

// // switch (role) {
// //   case "admin":
// //     console.log("Full access");
// //     break;
// //   case "user":
// //     console.log("Limited access");
// //     break;
// //   default:
// //     console.log("No access");
// // }

// // function greet() {
// //   console.log("Hello Developer!");
// // }

// // greet();


// // function add(a, b) {
// //   return a + b;
// // }

// // console.log(add(10, 20));

// // const fruits = ["Apple", "Banana", "Mango"];

// // console.log(fruits[0]); 

// // fruits.push("Orange");
// // console.log(fruits);
// // fruits.pop(); 
// // console.log(fruits);
// // fruits.shift(); 
// // console.log(fruits);
// // fruits.unshift("Kiwi"); 
// // console.log(fruits);
// // fruits.includes("Mango"); 
// // console.log(fruits);


// // const student = {
// //   name: "Arjun",
// //   age: 22,
// //   course: "Frontend",
// // };
// // console.log(student);
// // console.log(student.name); 
// // student.age = 23;
// // console.log(student);
// // student.grade = "A";
// // console.log(student);

// // function inEven(b){
// //     console.log("In Event", b);
// // }


// // let a =true;
// // inEven(a);



// // let arr = ["kkr","pk","ipl","rcb","csk"];
// // for(let i=0;i<arr.length;i++){
// //     if(arr[i]=== arr[0] || arr[i]=== arr[4]){
// //         console.log(arr[i]);
// //     }
// // }


// // const car ={
// //     name:"BMW",
// //     model:"X5",
// //     year:2020
// // }

// // car.key="value";
// // console.log(car);

// // for (let i=0;i<51;i++){
// //     console.log(i);
// // }


// const title = document.getElementById("title");
// const btn = document.getElementById("change");
// const baba = document.getElementById("baba");

// btn.addEventListener("click", () => {
//   title.textContent = "Title Changed!";
// });

// title.style.color = "blue";
// title.style.fontSize = "30px";

// title.innerHTML = "<span style='color:red;'>Updated!</span>";
// baba.innerHTML = "<b style='font-size:20px; cursor:pointer;'>Baba Yogi</b>";

// btn.addEventListener("click", () => {
//   console.log("Button clicked!");
// });


// const input = document.getElementById("username");

// input.addEventListener("input", () => {
//   console.log("You typed:", input.value);
// });


// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Parent clicked");
// });

// document.getElementById("child").addEventListener("click", () => {
//   console.log("Child clicked");
// });