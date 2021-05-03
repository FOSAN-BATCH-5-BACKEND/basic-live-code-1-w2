/*
INSTRUKSI
=========

Buatlah sebuah function yang bernama jumlahHuruf dimana function tersebut digunakan
untuk menghitung jumlah huruf vokal yang ada didalam sebuah kalimat.

Contoh:
Input: "jawatengah"
Output: 4

Dilarang menggunakan built-in function
*/

function jumlahHuruf(str) {
  // isikan kode anda disini
  // var vocal = ['a','i','u','e','o'];
  // var a = 0;
  // for (let i = 0; i < str.length; i++){
  //     for (let j=0 ; j < vocal.length; j++)
  //     if (str[i] == vocal[j] ){
  //         a++;
  //     }
  // }
  // return a;

  let vokal = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    //   console.log(str);
    if (str[i] == "a") {
      vokal += 1;
    } else if (str[i] == "i") {
      vokal += 1;
    } else if (str[i] == "u") {
      vokal += 1;
    } else if (str[i] == "e") {
      vokal += 1;
    } else if (str[i] == "o") {
      vokal += 1;
    }
  }
  return vokal;
}

console.log(jumlahHuruf("indonesia")); //5
console.log(jumlahHuruf("fosanacademy")); //5
console.log(jumlahHuruf("javascript")); //3
console.log(jumlahHuruf("semarangselatan")); //6
console.log(jumlahHuruf("jawatengah")); //4
