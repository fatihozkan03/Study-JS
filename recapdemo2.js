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

let username = prompt("Enter your email");
let password = prompt("Enter your password");

function login(email, pass) {
    for (const element of usernames) {
        if (element.email === email && element.pass === pass) {
            return true;
        }
    }
    return false;
}

//login fonksiyonunu çağır
if (login(username, password)) {
    console.log("Login successful!");
    // Tweetleri göster
    for (const element of tweets) {
        console.log(element.nickname + ": " + element.tweet);
    }
} else {
    console.log("Login failed! Please check your email and password.");
}


