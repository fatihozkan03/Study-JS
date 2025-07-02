let selamFonksiyon = function(){
    console.log("Merhaba, bu bir fonksiyon!");
}

selamFonksiyon();

let selamFonksiyon2 = () =>{
    console.log("Merhaba, bu bir ok fonksiyonu!");
}

const selamFonksiyon3 = (mesaj) =>{
    console.log(mesaj);
}
selamFonksiyon3("Merhaba, bu bir ok fonksiyonu! 3");

var toplama = (sayi1, sayi2) => {
    return sayi1 + sayi2;
}

let  sonuc = toplama(10,66);

console.log("Toplama Sonucu: " + sonuc);