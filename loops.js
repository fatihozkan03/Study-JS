for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Loop completed!");

let Sehirler = ["Ankara", "İstanbul", "İzmir", "Bursa", "Adana"];

console.log(Sehirler[1])

for (let i = 0; i < Sehirler.length; i++) {
    console.log(Sehirler[i]);
}

let i = 1;
while (i<=10){
    console.log(i);
    i++;
}

let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 10) 

    let sehirler2= ["Ankara", "İstanbul", "İzmir", "Bursa", "Adana"];

    sehirler2.forEach(function(a, b) {
        console.log(a.length + ": " + b);
    })