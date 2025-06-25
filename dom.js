// document.getElementById("bio").innerHTML =  document.getElementById("bio").innerText +" And I modify the DOM!";

let intro1 = document.getElementById("intro1");

let messsage = document.getElementById("mesaj");

messsage.innerHTML = "Hello, " + intro1.innerText + "!";

let allLists = document.getElementsByTagName("ul");


let sehirler = allLists[0].getElementsByTagName("li");

for (const element of sehirler) {
    element.style.color = "red";
    element.style.fontSize = "20px";
    element.style.fontWeight = "bold";
    element.style.textDecoration = "underline";
    element.style.backgroundColor = "yellow";
    
    alert(element.innerText);
}