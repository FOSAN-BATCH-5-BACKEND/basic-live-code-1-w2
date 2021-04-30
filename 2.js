/*
INSTRUKSI
=========

Buatlah sebuah function penampilAngka yang menjalankan proses menampilkan angka-agka bernilai ganjil.
function tersebut menerima 1 parameter berupa string yang setiap karakternya mewakili 1 angka

Contoh:
Input: '98765432'
Output : '9753'
 */

function penampilAngka(stringAngka){
 let hasil = "";
 for (let i = 0; i < stringAngka.length ; i++) {  
    //  console.log(stringAngka[i]);
    if(stringAngka[i] == "1"){
        hasil += "1"  
    }else if(stringAngka[i] == "3") {
        hasil += "3" 
    }else if(stringAngka[i] == "5") {
        hasil += "5"
    }else if(stringAngka[i] == "7") {
        hasil += "7"
    }else if(stringAngka[i] == "9") {
        hasil += "9"
    }
}return hasil;
    
}


//Test case
console.log(penampilAngka('12345678')) // '1357'
console.log(penampilAngka('1346789')) // '1379'
console.log(penampilAngka('1298967')) // '1997'
console.log(penampilAngka('43447453')) // '3753'
console.log(penampilAngka('46824')) // ''