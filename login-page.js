var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/DesnyDB.db');
const ipc = require('electron').ipcRenderer;
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "pharma" && password === "pharma") {
        ipc.sendSync('Login')
    } else {
        loginErrorMsg.style.opacity = 1;
    }

})