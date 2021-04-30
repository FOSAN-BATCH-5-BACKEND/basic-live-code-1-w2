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
    let ganjil = [];
    let genap = [];
    let a = 0 ;
    for (let i=0; i <= stringAngka.length ; i++){
        if (stringAngka % 2 == 0){
        return genap.push(stringAngka[i]);
        }else {
            return ganjil.push(stringAngka[i]);

        }    
    }
          
  
}

//Test case
console.log(penampilAngka('12345678')) // '1357'
console.log(penampilAngka('1346789')) // '1379'
console.log(penampilAngka('1298967')) // '1997'
console.log(penampilAngka('43447453')) // '3753'
console.log(penampilAngka('46824')) // ''