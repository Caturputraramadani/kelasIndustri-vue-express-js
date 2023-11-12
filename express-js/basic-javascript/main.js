let bilanganBulat = 43;
let bilanganPecahan = 3.14;

let teks1 = 'Hello World';
let teks2 = 'Harry Potter';

let benar = true;
let salah = false;

let tidakAdaNilai = null;

// perbedaan
let nilai1 = ""; // ada isinya
let nilai2 = null; // kosong

let variabelBelumDiisi;

const simbolUnik = Symbol('deskripsi simbol');
console.log(simbolUnik);

let angka = [1, 2, 3, 4, 5];
console.log(angka[2]);

function tambah(a, b) {
    return a + b;
}

console.log(tambah(10, 20));

// object (json)

let mahasiswa = {
    nama: 'Harry',
    kelas: 11,
    jurusan: 'PPLG'
};

console.log(mahasiswa);

let angka1 = 5;
angka1 += 2; //angka1 = angka1 + 2
angka1 -= 2;
angka1 *= 2;
angka1 /= 2;
angka1 %= 2;

let hasil = angka1 == 1
hasil = angka1 != 1
hasil = angka1 > 1
hasil = angka1 >= 1
hasil = angka1 <= 1

console.log(angka1);
console.log(hasil);

let hasil2 = 3+5 == 7 && 4+5 == 9 || true

console.log(hasil2)

let perbandingan = true && false
let perbandingan1 = true || false

let umur = 17;
let status = (umur >= 18) ? 'Dewasa' : 'Dibawah umur';
console.log(status);

if (umur >= 18) {
    status = 'dewasa';
} else if (umur <= 18) {
    status = 'remaja';
} else {
    status = 'anak';    
}

console.log(status);

// switch statement must be string
let warna = "violet";
let warnaApa
switch(warna){
    case "blue":
        warnaApa = "warna blue";
        break;
    case "violet":
        warnaApa = "warna violet";
        break;
    default:
        warnaApa = "Tidak terdeteksi";
        break;
}
console.log(warnaApa)


function sapa(nama){
    console.log(`Halo ${nama}`);
}
sapa('Luna')

// pure function
function calculate (productPrice){
    return productPrice * 0.05;
}
console.log(calculate(15))

// arrow function
let sum = (a,b) => {
    return a + b;
}
// alert(sum(1,2))

// first-class function
const greet = function(name, kelas){
    console.log(`Halo ${name}, Kelas ${kelas}`)
}
const sayHello = greet;
sayHello('Harry', 11);

// default value
function sapa1(nama = "Pengunjung"){
    console.log(`Halo ${nama}`)
}
sapa1() //argumen kosong
sapa1('Harrys') //argumen terisi

// default value - mengatasi
let jumlah = 10;
let hargaSatuan = 5; // Definisikan hargaSatuan sesuai kebutuhan
let total = jumlah +(hargaSatuan || 0)

// operator ternary
let hargaSatuan2 = 5; // Definisikan hargaSatuan sesuai kebutuhan
let harga2 = hargaSatuan2 !== undefined ? hargaSatuan2 : 0
console.log(harga2)

// nullish
let harga3 = hargaSatuan ?? 0
console.log(harga3)

const numbers =[1,2,3,4]
// fungsi map ini dikalikan sama yang ada di const numbers
const doubles = numbers.map((numbers) => numbers * 2)
console.log(doubles)

// filter
const numbers1 = [1,2,3,4,5]
const evenNumbers = numbers1.filter((number) =>number % 2 === 0)
console.log(evenNumbers)

// reduce
const _numberReduce = [1,2,3,4,5];
const _sumReduce = _numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0 )
console.log(_sumReduce)

// foreach
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit) => console.log(fruit));

//sort 
const fruits1 = ['apple', 'banana', 'cherry'];
fruits1.sort()
console.log(fruits1)

// find
const numbers2 = [1,2,3,4,5];
const resultFind = numbers2.find((numbers2) => numbers2 == 3)
console.log(resultFind)
