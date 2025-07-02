const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const kareDizisi = [];

dizi.forEach(sayi => {
    kareDizisi.push(sayi * sayi);
})

console.log("Kare Dizisi: ", kareDizisi);

// MAP

const mapDizi =  dizi.map(sayi => sayi * 3)
console.log("Map Dizi: ", mapDizi);

// FILTER

const filterDizi = dizi.filter(sayi => sayi >= 5);
console.log("Filter Dizi: ", filterDizi); 

const filterDizi2 = dizi.filter(sayi => { return sayi >= 5 && sayi <= 8; });
console.log("Filter Dizi 2: ", filterDizi2);

//reduce

const reduceDizi = dizi.reduce((acc, sayi) => {
    return acc + sayi;
},45)
console.log("Reduce Dizi: ", reduceDizi);
