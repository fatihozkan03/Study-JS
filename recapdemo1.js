let usernames = [
    {email : "abc@gmail.com",pass : "123"},
    {email : "asd@gmail.com",pass : "456"},
]

let tweets = [
    {nickname : "John", tweet:"Today.." },
    {nickname : "Rambo", tweet:"Yesterday.." },
    {nickname : "Rambo", tweet:"Tuesday.." },
    {nickname : "Rambo", tweet:"Wednesday.." }

]

let email = prompt("Enter your email");
let password = prompt("Enter your password");

function login(){
    if((email == usernames[0].email && password == usernames[0].pass) ||
    (email == usernames[1].email && password == usernames[1].pass)){
        console.log(tweets[0].nickname + ": " + tweets[0].tweet);
    }
    else {
        console.log("Login failed! Please check your email and password.");
    }
}

login();

