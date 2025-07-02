class Personel{
    constructor(ad,soyad){
        this.ad = ad;
        this.soyad = soyad;
    }
    kaydet(){
        console.log(`Personel kaydedildi: ${this.ad}  ${this.soyad}`);
    }
}

const nesne = new Personel("Fatih", "Yılmaz");
nesne.kaydet();

nesne.ad = "Ahmet";
console.log(nesne.ad);