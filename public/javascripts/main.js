
"use strict";
let deposit = document.getElementById(`deposit`);

let withdraw = document.getElementById(`withdraw`);

let bal = document.getElementById(`balance`);

let trans = document.getElementById(`transfer`);

let log = document.getElementById(`login`);

let balance = Number(1500);

let withdrawAmt, depositAmt, transferAmt, name, password;



withdraw.addEventListener("click", function () {
    withdrawMoney();
});

deposit.addEventListener("click", function () {
    depositMoney();
});

bal.addEventListener("click", function () {
    checkBal();
});

trans.addEventListener("click", function () {
    transfer();
});

log.addEventListener("click", function () {
    login();
});






function withdrawMoney() {
    withdrawAmt = window.prompt(`how much money would you like to withdraw?`);
    balance = balance - withdrawAmt;
    window.alert(`your balance is ${balance} dollars`);
}

function depositMoney() {
 depositAmt = Number(window.prompt(`how much money would you like to deposit?`));
    balance = balance + depositAmt;
    window.alert(`your balance is ${balance} dollars`);
}

function checkBal() {
    window.alert(`Your balance is ${balance} dollars`);
}

function transfer() {
    transferAmt = window.prompt(`how much money would you like to transfer?`);
    balance = balance - transferAmt;
    window.alert(`your balance is ${balance} dollars`);
}

function login() {
    name = window.prompt(`whats your name?`);
    password = window.prompt(`please enter your password`);
     if (password !== `easypassword` || password !== `freeBobbyShmerda`){
         window.alert(`goodbye`);
         window.close()
     }
}