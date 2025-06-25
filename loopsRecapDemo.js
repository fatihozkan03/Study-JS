let usernames = [
  { email: "abc@gmail.com", pass: "123" },
  { email: "asd@gmail.com", pass: "456" },
];

let tweets = [
  { nickname: "John", tweet: "Today.." },
  { nickname: "Rambo", tweet: "Yesterday.." },
  { nickname: "Rambo", tweet: "Tuesday.." },
  { nickname: "Rambo", tweet: "Wednesday.." },
];

let email = prompt("Enter your email");
let password = prompt("Enter your password");

function kullaniciVarMi(email, password) {
  for (const element of usernames) {
    return !!(email == element.email && password == element.pass);
  }
}

function login() {
  if (kullaniciVarMi(email, password)) {
    console.log(tweets[0].nickname + ": " + tweets[0].tweet);
  } else {
    console.log("Login failed! Please check your email and password.");
  }
}

login();
