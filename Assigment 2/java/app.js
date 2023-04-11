// Question 1

/*
function parent (a) {
        console.log(a + a)
};
parent(56);

*/

// Question 2

/*
let arr =  [1, 2, 3, 4, 5];
  function find (ab) {
  if(arr === ab){
     return  true
  }
}

 var a = find(55);

console.log(a)

*/

// Question 3

/*
document.getElementById("p").onclick = print();

function print (){
    return function  () {
    let a  = document.getElementById("p-inp").value;
    const paragraph = document.createElement("p");
    paragraph.id = "para";
    document.body.appendChild(paragraph);
    document.getElementById("para").innerHTML = a;
    }
};
*/

// Question 4

/*
document.getElementById("btn").onclick = chk();
 
function chk (){
      return function  () {
            let a  = document.getElementById("my").value;
            let li = document.createElement("li");
            li.className = "li-item";
            document.body.appendChild(li);
            document.querySelector(".li-item").innerText = a;
        }
}
*/

// Question 5

/*
function color (a,b){
     document.body.style.backgroundColor = a;
    document.body.style.color = b;
    return
}

color("red","green");
*/

// Question 6

/*
let prevStudents = localStorage.getItem("students"); 
let students = prevStudents ? JSON.parse(prevStudents) : [];
function provideStudent() {
    let a = prompt(" ");
    let std = {
    a : prompt("Enter " + a),
};
console.log(a)
  students.push(std);
  console.log(students);
  let stringify = JSON.stringify(students); 
  localStorage.setItem("students", stringify); 
}
*/

// Question 7

/*
let before = localStorage.getItem("students"); 
let students = before ? JSON.parse(before) : [];
function provideStudent() {
    let a = prompt(" ");
    let std = {
    a : prompt("Enter " + a),
};
console.log(a)
  students.push(std);
  console.log(students);
  let stringify = JSON.stringify(students); 
  localStorage.setItem("students", stringify); 
}
*/

// Question 8

/*
let before = localStorage.getItem("students"); 
let students = before ? JSON.parse(before) : [];
function provideStudent() {
    let a = prompt(" ");
    let std = {
    a : prompt("Enter " + a),
};
console.log(a)
  students.push(std);
  console.log(students);
  let stringify = JSON.stringify(students); 
  localStorage.setItem("students", stringify); 
}
*/
