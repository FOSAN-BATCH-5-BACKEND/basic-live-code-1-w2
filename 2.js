/*
INSTRUKSI
=========

Buatlah sebuah function penampilAngka yang menjalankan proses menampilkan angka-agka bernilai ganjil.
function tersebut menerima 1 parameter berupa string yang setiap karakternya mewakili 1 angka

Contoh:
Input: '98765432'
Output : '9753'
 */

function penampilAngka(stringAngka) {
  let ganjil = "";
  for (let i = 0; i < stringAngka.length; i++) {
    // hanya bisa dipakai kalau datanya cuman 1-10
    if (stringAngka[i] == "1") {
      ganjil += "1";
    } else if (stringAngka[i] == "3") {
      ganjil += "3";
    } else if (stringAngka[i] == "5") {
      ganjil += "5";
    } else if (stringAngka[i] == "7") {
      ganjil += "7";
    } else if (stringAngka[i] == "9") {
      ganjil += "9";
    }
  }
  return ganjil;

  //     if (stringAngka[i] % 2 != 0){
  //         ganjil += stringAngka[i]
  //     }
  // }
  // return `'${ganjil}'`
}

//Test case
console.log(penampilAngka("12345678")); // '1357'
console.log(penampilAngka("1346789")); // '1379'
console.log(penampilAngka("1298967")); // '1997'
console.log(penampilAngka("43447453")); // '3753'
console.log(penampilAngka("46824")); // ''
