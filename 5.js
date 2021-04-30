/*
INSTRUKSI
=========

Buatlah sebuah function binaryGenerator yang berfungsi untuk merubah angka dibawah ini.
Diberikan sekelompok angka, ubahlah angka input tersebut sehingga angka dibawah 5 menjadi 0
dan angka 5 keatas menjadi 1.

Contoh:
Input: 45385593107843568
Output: '01011110001100111'

Hanya diperbolehkan menggunakan 1 built-in function (toString)
Dilarang menggunakan built-in function selain yang diperbolehkan.
*/

function binaryGenerator(angka) {
    let string = angka.toString();
    let penampungBinarry = '';
    for(let i = 0; i < string.length; i++){
        // console.log(string[i])
        if(string[i] >= 5) /*|| string[i] == 6 || string[i] == 7 || string[i] == 8 || string[i] == 9)*/{
            penampungBinarry += 1
        }
        if(string[i] <= 4) /*|| string[i] == 3 || string[i] == 2 || string[i] == 1 || string[i] == 0)*/{
            penampungBinarry += 0;
        }
    }
    return penampungBinarry
}

console.log(binaryGenerator(45385593107843568));
//'01011110001100111
console.log(binaryGenerator(509321967506747));
//'101000111101101'
console.log(binaryGenerator(366058562030849490134388085)); 
// 011011110000101010000011011