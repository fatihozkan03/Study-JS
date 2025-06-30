document.getElementById("bio").innerHTML =  document.getElementById("bio").innerText +" And I modify the DOM!";

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

let classAtribute = document.getElementsByClassName("intro1");

alert(classAtribute[0].innerHTML);

let queryItems = document.querySelectorAll("p.intro1");
alert(queryItems.length)

let nameElement = document.getElementsByName("musteriAdi");
alert(nameElement[0].value);

let inputName = document.getElementById("input1").addEventListener("click", input1Event);

function input1Event() {
    document.getElementById("agac").style.color = "red";
    document.getElementsByName("musteriAdi")[0].value = "Gürkan";
}

let inputName2 = document.getElementsByClassName("intro1")[0].addEventListener("mouseover", input1Event2);

function input1Event2() {
    document.getElementById("p2").style.backgroundColor = "green";
    document.getElementById("p2").innerHTML = "Degistirdim !!! ";
}

let baslik = document.createElement("h2");
let textnode = document.createTextNode("Bu bir başlıktır");
baslik.appendChild(textnode);

let div1 = document.getElementById("div1");
let p2 = document.getElementById("p2");

div1.insertBefore(baslik, p2);

alert("p2 siliniyor...");
div1.removeChild(p2)

// 2 saniye delay ekle
setTimeout(function() {
    alert("degistiriliyor..");
    div1.replaceChild(baslik, document.getElementById("p1"));
}, 2000);
