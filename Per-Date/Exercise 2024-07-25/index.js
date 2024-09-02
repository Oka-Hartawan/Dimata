/* -----------MEMBUAT SEGITIGA DENGAN ANGKA ANGKA--------- */
/* 
1. Buat function dengan nama sesuka hati dengan parameter height.
2. Deklarasikan num dengan menggunakan let dan beri nilai awal 1.
3. Loop baris (i) berfungsi untuk mengatur jumlah baris yang dicetak.
4. Loop kolom (j) berfungsi untuk mengatur jumlah angka yang akan dicetak pada baris (i).
5. Tambahkan angka ke dalam row dengan format dua digit.
*/
function createTriangle(height) {
  let num = 1; // Inisialisasi angka mulai dari 1
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      // Tambahkan angka ke dalam row, format dengan dua digit
      row += num.toString().padStart(2, "0") + " ";
      num++; // Increment angka
    }
    console.log(row.trim());
  }
}

/* -----------CONSOLE.LOG ANGKA DENGAN KONDISI TERTENTU--------- */
/* 
1. Buat function dengan parameter n.
2. Loop dari 0 hingga n.
3. Jika angka adalah kelipatan 3 dan 5, console.log "TIGA LIMA".
4. Jika angka adalah kelipatan 3, console.log "TIGA".
5. Jika angka adalah kelipatan 5, console.log "LIMA".
6. Jika tidak, console.log angka itu sendiri.
*/
function logNumberSeries(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("TIGA LIMA");
    } else if (i % 3 === 0) {
      console.log("TIGA");
    } else if (i % 5 === 0) {
      console.log("LIMA");
    } else {
      console.log(i);
    }
  }
}

/* -----------MENGHITUNG BODY MASS INDEX (BMI)--------- */
/* 
1. Buat function dengan parameter weight dan height.
2. Hitung BMI menggunakan formula: BMI = weight / (height * height).
3. Jika BMI < 18.5, return "berat kurang".
4. Jika BMI >= 18.5 dan <= 24.9, return "ideal".
5. Jika BMI >= 25.0 dan <= 29.9, return "kelebihan berat badan".
6. Jika BMI >= 30.0 dan <= 34.9, return "sangat kelebihan berat badan".
7. Jika BMI > 34.9, return "obesitas".
*/
function calculateBMI(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "berat kurang";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "kelebihan berat badan";
  } else if (bmi >= 30.0 && bmi <= 34.9) {
    return "sangat kelebihan berat badan";
  } else {
    return "obesitas";
  }
}

/* -----------MENGHAPUS ANGKA GANJIL DALAM ARRAY--------- */
/* 
1. Buat function dengan parameter arrayOfNumber.
2. Gunakan filter untuk menyaring angka genap.
3. Return array baru yang berisi angka genap saja.
*/
function filterOddNumbers(arrayOfNumber) {
  return arrayOfNumber.filter((num) => num % 2 === 0);
}

/* -----------MENGUBAH STRING MENJADI ARRAY OF STRING--------- */
/* 
1. Buat function dengan parameter string.
2. Gunakan method split untuk memisahkan string berdasarkan spasi.
3. Return array yang terbentuk.
*/
function convertStringToArray(string) {
  return string.split(" ");
}

// Contoh penggunaan
console.log("1. Segitiga Angka:");
createTriangle(4);

console.log("2. Log Angka:");
logNumberSeries(15);

console.log("3. BMI:");
console.log(calculateBMI(70, 1.75));

console.log("4. Remove Odd Numbers:");
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6]));

console.log("5. String to Array:");
console.log(convertStringToArray("Hello World"));
