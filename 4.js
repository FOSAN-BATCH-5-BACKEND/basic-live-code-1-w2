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
let a = 0; 
let i = 0;
let u = 0;
let e = 0;
let o = 0;
jumlah = str.length; //u/ tau jumlah huruf dari(str)

  for (let i = 0; i < jumlah; i++){ //perulangan untuk cari x dan o pake if 
    if (str[i] === 'a'){
      a++;
    } 
    if (str[i] === 'i'){
      i++;
    }
    if (str[i] === 'u'){
        u++;
      }
    if (str[i] === 'e'){
        e++;
      }
    if (str[i] === 'o'){
        o++;
      }
  }
  return a + i + u + e + o;
}

console.log(jumlahHuruf("indonesia")); //5
console.log(jumlahHuruf("fosanacademy")); //5
console.log(jumlahHuruf("javascript")); //3
console.log(jumlahHuruf("semarangselatan")); //6
console.log(jumlahHuruf("jawatengah")); //4