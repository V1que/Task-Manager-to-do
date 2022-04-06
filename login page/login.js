// our goal is to ;
// 1. Target the id and classes 
// 2. add the submit eventlistener
// 3. create a function that validates the form 
// 4. test the system
// 5. authenticate by using localStorage

let username = document.getElementById("user");
let password = document.getElementById("pass");
let form = document.getElementById("form")

// The statements above can be more efficiently written by creating a small function to avoid repitition , the function can be written like so: 
// let id = (id)=> document.getElementbyId(id);
// let username = id("username"),
// password = id("password"),
// form = id("form");
// as can be seeen repitition is reduced and it is more efficient to write in this way.
let errorMsg = document.getElementsByClassName("error");
let successIcon = document.getElementsByClassName("success-icon");
let failureIcon = document.getElementsByClassName("failure-icon");

// The statements above can be more efficiently written by creating a small function to avoid repitition , the function can be written like so: 
// let classes = (classes)=> document.getElementsbyClassName(classes);
// let username = classes("username"),
// password = classes("password");
// as can be seeen repitition is reduced and it is more efficient to write in this way.
//STEP 1 OF OUR GOAL IS COMPLETED

// Time to add eventlistener to our submit button so as to get a desired behaviour from the form when the submit button is clicked
form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    // the prevent default for this event e is created to avoid any undesired behaviour like flickering or something else
    if(username.value.trim() === ''){ //trim is to remove whitespaces from the input
        errorMsg[0].innerHTML = 'Username cannot be blank';
        failureIcon[0].style.opacity = "1";
        successIcon[0].style.opacity = "0";
    }
    else{
        errorMsg[0].innerHTML = ''  ;
        failureIcon[0].style.opacity = "0";
        successIcon[0].style.opacity = "1";
    }
                
});

// it is more efficient to create a small function instead of repeat the same codes multiple times. The function called engine(you can give it any name) goes like so
let engine =(id, serial, message) =>{
    if(id.value.trim() === ""){ //trim is to remove whitespaces from the input
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
   }
      
};

// call the function inside the eventlistener function
form.addEventListener("submit", (e) => {
   
    e.preventDefault(); 
    engine(pass, 1, "Password cannot be blank")
           
});
// store data in local storage. the first thing we do is to set item in local storage by using localStorage.setItem(key, value), this parameter takes two arguments the key and the value.
// localStorage.removeItem(key) removes the itemwith that key and value.
// localStorage.getItem(key) is used to retrieve a prticular item from the localstorage .This takes in only the key parameter to return a value as a string
// another way to retrieve data from the localStorage is to use the key method like so:
// localStorage.key(index). the index could be 1 or 2 or any number depending on the position of the data in the local storage 
// For this project we are trying to store inputs from the password field and usernamefield

// first we target the elements that we want and  assign them using the selector
const userName = document.getElementById("user");
const passWord = document.getElementById("pass");
const btnSubmit = document.getElementById("submit");

// We want to call a function on the event of the button being clicked.This function assigns a key and value to the username and password respectively and logs both.
btnSubmit.onclick = function(){
    const key = userName.value;
    const value= passWord.value;
    
    // console.log(key);
    // console.log(value); 
    // [ The above two lines of codes were commented out to make the code cleaner]
    // To avoid storing blanks or whitespaces we check if key and value exist and is true like so 
    if (key && value){
// then we set item like so
localStorage.setItem(key, value);
 
// to populate the localStorage by looping through all the key value pairs 
for(let i=0; i < localStorage.length; i++) {
    // we are using the key method of local storage 
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    // to link the submit button to another page while making sure that the validations are working
    const Click = document.getElementById("submit")
        Click.onclick= function(){
            location.href="../index.html"}
}}}