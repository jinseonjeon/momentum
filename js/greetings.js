/*
const loginForm = document.getElementById("login-from");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

/*
//로그인버튼을 이용한 로그인 
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    //console.dir(loginInput);
    console.log(loginInput.value);
    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name");
    } else if (username.length > 15) {
        alert("It's too long!!");
    }
}

loginButton.addEventListener("click", onLoginBtnClick);
*/

//submit
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //기본동작이 실행되는것을 막음 
    //console.log(event);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}

function handleLinkClick(event) {
    alert("clicked");
    event.preventDefault();
    //console.dir(event);
}

link.addEventListener("click", handleLinkClick);

function paintGreetings(username) {
    greeting.innerText = `HELLO!! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//console.log(savedUsername);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

//Math.floor(math.random()*a.length);