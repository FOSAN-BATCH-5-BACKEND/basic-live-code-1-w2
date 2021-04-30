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
    var jumlah_vokal = 0;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' ||
                str.charAt(i) == 'i' ||
                str.charAt(i) == 'u' ||
                str.charAt(i) == 'e' ||
                str.charAt(i) == 'o') {
            jumlah_vokal++;
        }
    }
    return jumlah_vokal;
	}



console.log(jumlahHuruf("indonesia")); //5
console.log(jumlahHuruf("fosanacademy")); //5
console.log(jumlahHuruf("javascript")); //3
console.log(jumlahHuruf("semarangselatan")); //6
console.log(jumlahHuruf("jawatengah")); //4