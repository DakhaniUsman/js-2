// DOM => Document Object Model
// A tree of whole document where every element is considered to be a node
// Every node can be accessed modified and removed from the DOM using JS this is known as DOM Manipuliation

// Accessing element thorugh JS

console.log(document.getElementById("headingTwo"));
console.log(document.getElementsByClassName("myPara")); // return a node list
console.log(document.querySelector(".myPara")); // return a node list

console.log(document.getElementsByTagName("span"));

// modifying element through JS

document.getElementById("heading-two").innerHTML =
  "Hello! (Everyone)=> this text is updated through JS  ";

// styling element through JS

document.getElementById("styles-js").style.color = "#00eeff";

document.getElementById("styles-js").style.fontSize = "44px";

// const parentContainer = document.getElementById("parentDiv");

// creating an element through JaavScript
const h1 = document.createElement("h1");
h1.innerHTML = "This element is created through JavaScript";

console.log(h1);

// appending

const parentContainer = document.getElementById("parentDiv");
// console.log(parentContainer)

const childPara = document.createElement("p");
childPara.innerHTML =
  "This child element is created through JS and is appended to the parent container";
parentContainer.appendChild(childPara);

// parentContainer.removeChild(childPara)

// childPara.remove()

document.querySelector(".event-handling").style.border = "2px solid black";
document.querySelector(".event-handling").style.width = "100%";
document.querySelector(".event-handling").style.height = "auto";
// document.querySelector(".event-handling").style.padding = "30px";

const eventPara = document.getElementById("my-para-event");
eventPara.style.border = "1px solid red";
console.log(eventPara);

// element.addEventListener("event", function(){})


eventPara.addEventListener("click", function () {
  console.log("Event para is clicked!");
});

eventPara.addEventListener("copy", function () {
  alert("Don't copy me!");
});

const parentEventHandling = document.querySelector(".event-handling");
console.log(parentEventHandling)

parentEventHandling.addEventListener("click", function () {
  console.log("parentelement clicked");
});
// eventPara.removeEventListener("copy",function(){
//     alert("Don't copy me!")
// })

// event deligation

// when
