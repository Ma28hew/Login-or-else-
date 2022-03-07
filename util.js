let searchBtnElement = document.getElementById("btn");
let usernameInEl =  document.getElementById("username");
let passwordInEl = document.getElementById("password");
let outputEl = document.getElementById("result");



searchBtnElement.addEventListener("click", login);
function login(){
    let username = usernameInEl.value;
    let password = passwordInEl.value;

    if (username === "admin" && password === "1234") {
        outputEl.innerHTML = "login successful"
    } else if (username !== "admin" && password === "1234") {
        outputEl.innerHTML = "Username is incorect"
    } else if (username === "admin" && password !== "1234") {
        outputEl.innerHTML = "Password is incorect" 
    } else { 
        outputEl.innerHTML = "Username and Password are incorect" }
    }








