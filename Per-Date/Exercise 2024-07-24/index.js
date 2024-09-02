// 1. Konversi Celsius ke Fahrenheit
/*
    Pseudocode:
    1. Ekstrak nilai numerik dari string Celsius.
    2. Konversi nilai yang diekstrak ke Fahrenheit menggunakan rumus (Celsius * 9/5) + 32.
    3. Cetak nilai Fahrenheit.
*/
let celsius = "20°C";
let celsiusNumber = parseFloat(celsius); // Ekstrak bagian numerik dari string
let fahrenheit = (celsiusNumber * 9) / 5 + 32;
console.log(`${celsius} adalah ${fahrenheit.toFixed(2)}°F`);

// 2. Memeriksa apakah sebuah angka ganjil atau genap
/*
    Pseudocode:
    1. Periksa apakah angka modulo 2 sama dengan 0.
    2. Jika benar, angka tersebut adalah genap; jika tidak, angka tersebut adalah ganjil.
    3. Cetak hasilnya.
*/
let number = 7;
let result;
if (number % 2 === 0) {
  result = "Genap";
} else {
  result = "Ganjil";
}
console.log(`${number} adalah ${result}`);

// 3. Memeriksa apakah sebuah angka adalah bilangan prima
/*
    Pseudocode:
    1. Jika angka kurang dari atau sama dengan 1, kembalikan false.
    2. Loop dari 2 hingga akar kuadrat dari angka.
    3. Jika angka habis dibagi dengan angka dalam loop, kembalikan false.
    4. Jika tidak ditemukan pembagi, kembalikan true.
*/
let num = 29;
let primeResult = true;
if (num <= 1) {
  primeResult = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      primeResult = false;
      break;
    }
  }
}
console.log(
  `${num} adalah ${primeResult ? "bilangan prima" : "bukan bilangan prima"}`
);

// 4. Temukan jumlah angka dari 1 hingga N
/*
    Pseudocode:
    1. Inisialisasi variabel total dengan nilai 0.
    2. Loop dari 1 hingga N, tambahkan setiap angka ke total.
    3. Kembalikan total.
    4. Cetak hasilnya.
*/
let n = 5;
let total = 0;
for (let i = 1; i <= n; i++) {
  total += i;
}
console.log(`Jumlah angka dari 1 hingga ${n} adalah ${total}`);

// 5. Temukan faktorial dari sebuah angka
/*
    Pseudocode:
    1. Jika angka adalah 0 atau 1, kembalikan 1.
    2. Inisialisasi variabel hasil dengan nilai 1.
    3. Loop dari 2 hingga angka, kalikan hasil dengan setiap angka.
    4. Kembalikan hasil.
    5. Cetak hasilnya.
*/
let factNum = 5;
let factResult = 1;
if (factNum === 0 || factNum === 1) {
  factResult = 1;
} else {
  for (let i = 2; i <= factNum; i++) {
    factResult *= i;
  }
}
console.log(`Faktorial dari ${factNum} adalah ${factResult}`);

// 6. Cetak N angka Fibonacci pertama
/*
    Pseudocode:
    1. Jika N kurang dari atau sama dengan 0, kembalikan array kosong.
    2. Jika N adalah 1, kembalikan array dengan satu elemen 0.
    3. Inisialisasi array dengan dua angka Fibonacci pertama [0, 1].
    4. Gunakan loop untuk menghasilkan angka Fibonacci berikutnya hingga panjang array adalah N.
    5. Kembalikan array.
    6. Cetak hasilnya.
*/
let fibNum = 10;
let fibSequence = [];
if (fibNum <= 0) {
  fibSequence = [];
} else if (fibNum === 1) {
  fibSequence = [0];
} else {
  fibSequence = [0, 1];
  while (fibSequence.length < fibNum) {
    let nextFib =
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
    fibSequence.push(nextFib);
  }
}
console.log(`Angka Fibonacci pertama ${fibNum} adalah: ${fibSequence}`);
