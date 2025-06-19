var sayi = 10;
while (sayi >= 0) {
    console.log("Sayi: " + sayi);
    sayi--;
}

for (var i = 1; i <= 10; i++) {
    console.log("Sayi: " + i);
}

function sayiUret(UstLimit = 49) {
    return Math.ceil(Math.random() * UstLimit);
}

for (var i = 1; i <= 6; i++){
    console.log("Loto"+i + " " + "Sayi: " + sayiUret());
}

for (var i = 1; i<=8; i++) {
    console.log(i + ". Loto Çekilişi");
    for (var j = 1; j <= 6; j++) {
        console.log("Loto"+i + " " +j + ". Sayi: " + sayiUret());
                }
            }