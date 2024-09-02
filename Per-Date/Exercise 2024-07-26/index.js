// Bagian A

// 1. Fungsi untuk mendapatkan nilai terendah, tertinggi, dan rata-rata dalam array dengan fungsi sort
function getStatsWithSort(arr) {
  arr.sort((a, b) => a - b);
  let min = arr[0];
  let max = arr[arr.length - 1];
  let avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return { min, max, avg };
}

// 1. Fungsi untuk mendapatkan nilai terendah, tertinggi, dan rata-rata dalam array tanpa fungsi sort
function getStatsWithoutSort(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
  }
  let avg = sum / arr.length;
  return { min, max, avg };
}

// Test A1
let arr1 = [5, 3, 9, 1, 7];
console.log(getStatsWithSort(arr1)); // { min: 1, max: 9, avg: 5 }
console.log(getStatsWithoutSort(arr1)); // { min: 1, max: 9, avg: 5 }

// 2. Fungsi yang mengambil array kata dan mengembalikan string dengan menggabungkan kata-kata dalam array, dipisahkan dengan koma dan - kata terakhir - dengan 'dan'
function combineWords(words) {
  if (words.length === 0) return "";
  if (words.length === 1) return words[0];
  let allButLast = words.slice(0, -1).join(", ");
  return `${allButLast} dan ${words[words.length - 1]}`;
}

// Test A2
let words = ["satu", "dua", "tiga"];
console.log(combineWords(words)); // satu, dua dan tiga

// 3. Fungsi untuk membagi string dan mengubahnya menjadi array kata
function stringToArray(str) {
  return str.split(" ");
}

// Test A3
let str = "Halo Dunia";
console.log(stringToArray(str)); // ["Halo", "Dunia"]

// 4. Fungsi untuk menghitung setiap elemen dalam posisi yang sama dari dua array bilangan bulat
function sumArrays(arr1, arr2) {
  return arr1.map((num, index) => num + arr2[index]);
}

// Test A4
let arrA = [1, 2, 3];
let arrB = [3, 2, 1];
console.log(sumArrays(arrA, arrB)); // [4, 4, 4]

// 5. Fungsi yang menambahkan elemen ke akhir array jika belum ada dalam array
function addUniqueElement(arr, element) {
  if (!arr.includes(element)) {
    arr.push(element);
  }
  return arr;
}

// Test A5
let uniqueArray = [1, 2, 3];
console.log(addUniqueElement(uniqueArray, 4)); // [1, 2, 3, 4]
console.log(addUniqueElement(uniqueArray, 3)); // [1, 2, 3, 4]

// Bagian B

// 1. Fungsi untuk menghapus semua angka ganjil dalam array dan mengembalikan array baru yang hanya berisi angka genap
function removeOdds(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Test B1
let mixedArray = [1, 2, 3, 4, 5, 6];
console.log(removeOdds(mixedArray)); // [2, 4, 6]

// 2. Fungsi untuk memasukkan beberapa integer yang diberikan ke dalam array dengan ukuran maksimum
function insertIntoArray(maxSize, ...ints) {
  return ints.slice(0, maxSize);
}

// Test B2
console.log(insertIntoArray(5, 5, 10, 24, 3, 6, 7, 8)); // [5, 10, 24, 3, 6]

// 3. Fungsi yang akan menggabungkan 2 array menjadi satu array
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// Test B3
let arr1B = [1, 2, 3];
let arr2B = [4, 5, 6];
console.log(mergeArrays(arr1B, arr2B)); // [1, 2, 3, 4, 5, 6]

// 4. Fungsi untuk menemukan nilai duplikat dalam array
function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();
  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  return Array.from(duplicates);
}

// Test B4
let arrayWithDuplicates = [1, 2, 3, 1, 2, 4];
console.log(findDuplicates(arrayWithDuplicates)); // [1, 2]

// 5. Fungsi untuk menemukan perbedaan dalam 2 array yang diberikan
function findDifferences(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let difference = new Set(
    [...set1]
      .filter((x) => !set2.has(x))
      .concat([...set2].filter((x) => !set1.has(x)))
  );
  return Array.from(difference);
}

// Test B5
let arr1Diff = [1, 2, 3];
let arr2Diff = [2, 3, 4];
console.log(findDifferences(arr1Diff, arr2Diff)); // [1, 4]

// Bagian C

// 1. Fungsi yang hanya mengembalikan tipe data primitif dari array
function getPrimitiveTypes(arr) {
  return arr.filter(
    (item) => (item !== Object(item) && item !== null) || item === null
  );
}

// Test C1
let mixedTypeArray = [1, "string", null, false, undefined, 2, "yes", undefined];
console.log(getPrimitiveTypes(mixedTypeArray)); // [1, 'string', null, false, undefined, 2, 'yes', undefined]

// 2. Fungsi untuk mengembalikan angka terkecil kedua dari array angka yang diberikan
function getSecondSmallest(arr) {
  let uniqueSortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);
  return uniqueSortedArr[1];
}

// Test C2
let numbers = [10, 20, 30, 10, 20, 40];
console.log(getSecondSmallest(numbers)); // 20

// 3. Fungsi untuk mengembalikan jumlah semua angka dari array tipe data campuran
function sumNumbers(arr) {
  return arr
    .filter((item) => typeof item === "number")
    .reduce((a, b) => a + b, 0);
}

// Test C3
console.log(sumNumbers(mixedTypeArray)); // 3

// 4. Fungsi untuk mengembalikan jumlah nilai duplikat dari array angka
function countDuplicates(arr) {
  let counts = {};
  let duplicateCount = 0;
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] === 2) {
      duplicateCount++;
    }
  }
  return duplicateCount;
}

// Test C4
let duplicateNumbersArray = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(countDuplicates(duplicateNumbersArray)); // 1

// 5. Fungsi permainan batu, gunting, kertas yang akan mengembalikan 'Menang' atau 'Kalah'
function rockPaperScissors(playerChoice) {
  const choices = ["batu", "gunting", "kertas"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log(`Player choice: ${playerChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  if (playerChoice === computerChoice) {
    return "Seri";
  }

  if (
    (playerChoice === "batu" && computerChoice === "gunting") ||
    (playerChoice === "gunting" && computerChoice === "kertas") ||
    (playerChoice === "kertas" && computerChoice === "batu")
  ) {
    return "Menang";
  } else {
    return "Kalah";
  }
}

// Test C5
console.log(rockPaperScissors("batu")); // Menang or Kalah or Seri (depends on random choice)
