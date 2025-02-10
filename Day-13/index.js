// window.onload = function Greet () {alert("Welcome! User get 1% better everyday ⚡")}


function login() {
    const names = document.getElementById("names").value;
    console.log("names :", names);
    localStorage.setItem("names",names)

    document.getElementById("user").innerHTML = `Welcome! ${names}`;

    // const parent = document.querySelector(".parent");

    // parent.appendChild(h1);
}
