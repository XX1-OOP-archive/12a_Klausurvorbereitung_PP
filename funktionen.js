/* DATENSTRUKTUREN */

/* Primitives */

// let a;  // var - Definition oder Deklaration

// a = true; // boolean (true, false)
// a = "Hallo"; // string
// a = 2; // number

// console.log(a);
// console.log(typeof a);

/* Arrays */
// let arr = new Array();

// let arr;
// arr = [false,true,false];
// arr = ["a","b","c","d"];

// // Index beginnt mit 0
// console.log(arr);
// console.log(arr[0]);
// console.log(arr.length);

// console.log(arr[3]);
// console.log(arr[arr.length -1]);
// console.log(arr[7]);

/* Array -Info, nicht klausurrelevant*/
// let arr = [];
// console.log(arr);
// arr.push("a");
// console.log(arr);
// arr.push("b");
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.pop();
// console.log(arr);

/* Objekte */

// let obj;

// obj = {};
// console.log(obj);

// obj = {x:10, y:"Hallo",z:true};
// console.log(obj);
// console.log(obj.y);

// obj =   {
//             val0: "hello",
//             sub1:{
//                 val1: "hi",
//                 val2: 2
//             }
//         }

// // {{{ }}} ... nested object
// console.log(obj);
// console.log(obj.sub1.val1);
// console.log(obj.sub1.val2);
// console.log(obj.val0);

// DOM  --> Modell der HTMl-Struktur
// DOM --> Document Object Model
// nach dem Parsen / Laden der HTML-Seite 

// console.log(document); // <html>
// console.log(document.body); // <body>
// console.log(document.body.children); // <body>...</body>
// console.log(document.body.children[0]); // h1
// console.log(document.body.children[0].innerHTML); // ...Text
// document.body.children[0].innerHTML = "Hallo";
// console.log(document.getElementById("test")); // <p>
// console.log(document.getElementById("test").innerHTML); 

/* ENTSCHEIDUNGSSTRUKTUREN */

let cond;

cond = (6 > 4);
cond = (6 < 4);
cond = (4 == 4);

console.log(cond);

