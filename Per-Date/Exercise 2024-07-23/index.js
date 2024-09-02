// 1. luas persegi panjang
/*
    pseudo code:
    1. deklarasikan var panjang persegi
    2. deklarasikan var lebar persegi
    3. deklarasikan var luas dengan operasi artimatika var panjang * var lebar
    4. print luas
*/
let panjang = 10;
let lebar = 5;
let luas = panjang * lebar;
console.log(luas);

// 2. keliling persegi panjang
/*
    pseudo code:
    1. deklarasikan var panjang persegi
    2. deklarasikan var lebar persegi
    3. deklarasikan var keliling dengan operasi artimatika 2*(var panjang2 + var lebar2)
    4. print luas
*/
let panjang2 = 20;
let lebar2 = 10;
let keliling = 2 * (panjang2 + lebar2);
console.log(keliling);

// 3. diameter, keliling, luas lingkaran
/* Diameter
    pseudo code:
    1. deklarasikan var r (jari-jari)
    2. deklarasikan var d (diameter) dengan operasi artimatika 2*r
    3. print diameter
*/
let r = 7;
let d = 2 * r;
console.log(d);

/* keliling
    pseudo code:
    1. deklarasikan var pi
    1. deklarasikan var dLingkaran (diameter)
    2. deklarasikan var kLingkaran (keliling lingkaran) dengan operasi artimatika pi*dLingkaran 
    3. print diameter
*/
let pi = 3.14;
let dLingkaran = 14;
let kLingkaran = pi * dLingkaran;
console.log(kLingkaran);

/* Luas
    pseudo code:
    1. deklarasikan var pi
    2. deklarasikan var luasLingkaran dengan operasi artimatika pi2*r2*r2
    3. print diameter
*/
let pi2 = 3.14;
let r2 = 4;
let luasLingkaran = pi2 * r2 * r2;
console.log(luasLingkaran);

// 4. cari sudut segitiga jika diketahui 2 sudut
/*
    pseudo code:
    1. deklarasikan var sudut1 yang diketahui
    2. deklarasikan var sudut2 yang diketahui
    3. deklarasikan var sudut3 yang tidak diketahui dengan operasi artimatika 180-(var sudut1 + var sudut2)
    4. print sudut3
*/
let sudut1 = 30;
let sudut2 = 90;
let sudut3 = 180 - (sudut1 + sudut2);
console.log(sudut3);

// 5. perbedaan tanggal pada hari
/*
    pseudo code
    1. Deklarasikan var tanggalAwal
    2. Deklarasikan var tanggalAkhir
    3. Deklarasikan var bedaWaktu dengan tanggalAwal.getTime() - tanggalAkhir.getTime();
    4. Deklarasikan var bedaHari dengan bedaWaktu / (1000 * 3600 * 24);
    5. print Perbedaan hari antara ${tanggalAwal.toDateString()} dan ${tanggalAkhir.toDateString()} adalah ${bedaHari} hari.
*/
const tanggalAwal = new Date("2023-01-01");
const tanggalAkhir = new Date("2023-12-31");
const bedaWaktu = tanggalAwal.getTime() - tanggalAkhir.getTime();
const bedaHari = bedaWaktu / (1000 * 3600 * 24);
console.log(
  `Perbedaan hari antara ${tanggalAwal.toDateString()} dan ${tanggalAkhir.toDateString()} adalah ${bedaHari} hari.`
);

// 6. convert hari ke tahun, bulan
/*
    pseudo code:
    1. deklarasikan var hari
    2. deklarasikan var bulan dengan Math.round(hari / 30), Math.round untuk membulatkan hasil
    3. deklarasikan var tahun dengan hari / 365;
    4. print bulan
    5. print tahun
*/
let hari = 365;
let bulan = Math.round(hari / 30);
let tahun = hari / 365;
console.log(bulan);
console.log(tahun);
