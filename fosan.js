/*
INSTRUKSI
=========

Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

function poinCalculator(string) {
  let nilaiG = 0;
  let nilaiS = 0;
  let nilaiB = 0;

  let jumlahG = 0;
  let jumlahS = 0;
  let jumlahB = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == "G") {
      nilaiG += 1;
      jumlahG += 2;
    } else if (string[i] == "S") {
      nilaiS += 1;
      jumlahS += 1;
    } else if (string[i] == "B") {
      nilaiB += 1;
      jumlahB += 0.5;
    }
  }
  let jumlahTotal = jumlahG + jumlahS + jumlahB;
  return `Jumlah Gold: ${nilaiG}, jumlah Silver: ${nilaiS}, jumlah Bronze: ${nilaiB}. Dan totalnya adalah: ${jumlahTotal}`;
}

console.log(poinCalculator("GSB"));
// jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
console.log(poinCalculator("GGG"));
// jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
console.log(poinCalculator("SSB"));
// jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
console.log(poinCalculator("BBGSSGB"));
// jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
console.log(poinCalculator(""));
// jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0
