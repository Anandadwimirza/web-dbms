// identifier

/**
 * identifier adalah penamaan variabel, fungsi ataupun parameter
 * karakter pertamanya hanya bisa huruf a-z, atau A-Z, dan simbol underscore atau dolar
 * tidak boleh menggunakan angka di depan. 
 * tidak boleh menggunakan bahasa yang sudah ada di js
 */

//statement
/**
 * statement adalah suatu pernyataan Jscript yang paling dasar dan memiliki tugas tertentu 
 */

// let name = "Hello world" //statement dasar/biasa
// console.log(name)

//expression
/**
 * expression merupakan ekspresi js yang berfungsi untuk menghasilkan nilai tertentu 
 */

// let first = 1 
// let second = 2
// let result = first + second

// if(result > 1){
//     console.log(result)
// }

//! Scope 
/**
 * cakupan kode agar bisa mengakses atau membatasi
 */
//! Global Scope
/**
 * global scope merupakan cangkupan di seluruh file
 */

// var a = 'halo rekan rekan'

// function first(){
//     console.log(a)
// }

// function second(){
//     a = 'nilainya sudah diubah'
//     console.log(a)
// }

// first()
// second()

// let a = 'mobil'
// function kendaraan(){

//     a = 'UBAH'
//     console.log(a)
//     if(true){
//        const b = 'motor'
//        console.log(b)
//     }
    
// }
// kendaraan()



//! VAR GABISA BLOCK SCOPE 

// let a = "Saya Globe Scope" //* GLOBE SCOPE INI BISA DIGUNAKAN DIMANAPUN
// function tugas(){
//     console.log(a)
//     let b = "Saya Local Scope" //* LOCAL SCOPE INI BISA DIPANGGIL DI FUNCTION INI AJA
//     console.log(b)
//     if(true){
//         let c = "Saya Block Scope" //* BLOCK SCOPE INI BISA DIGUNAKAN DI BLOCK INI SAJA
//         console.log(c)
//     }


// }

// tugas()


//* Closure 
/**
 * closure adalah cara mengakses variable dari parent scope di dalam child scope parent
 */

// function hello(sapa) {
//     var text = 'Assalamualaikum'  +sapa
//     return function(){
//         console.log(text)
//     }
// }
// var nama = hello('Fin')
// nama()

// function nama(namakalian, kelas) {
//     var nama = 'nama : '  + namakalian
//     var kelas = 'kelas : ' + kelas

//     return function(){
//         console.log(nama)
//         console.log(kelas)
//     }
// }

// var hasil = nama('nanda','xrpla')
// hasil()

// * tipe data adalah karakteristik dari nilai sebuah data di js terdapat 
/* 7 
 * null , undefined, boolean, number, bigInt, string, dan symbol (es68)
 *
 * loosely typed
 *  - yaitu variable tidak menentukan sebuah tipe data tapi
 * nilai yang menentukan tipe data
 */

// let a = 'saya'
// let c = 2 

// console.log(typeof a)

//* fungsi let */
// let a 

// function first(){
//     a = "ini function pertama"
//     console.log(a)
// }

// function second(){
//     a = "ini function kedua"
//     console.log(a)
// }

// first()
// second()

/**
 * tipe data nulle
 * tipe data primitf yang nilainya itu kosonh atau null
 */

// let a = null;
// console.log(typeof a)

/** 
 * number
 * Rentang nilai yang bisa ditampung oleh tipe data number yakni antara (2pangkat53 ...1)
*/

/** 
 * NaN atau Not a Number
 * NaN merupakan nilai numeric yang memberitahu bahwa nialinya itu invalid number atau bukan number
*/

// console.log('hello'/2)

// let kata = 'helloworld'
// for (let i = 0; i < kata.length; i++){
//     console.log(kata[i])
// }

//* Boolean = sebuah tipe data yang menentukan kebenaran dan hanya memiliki 2 nilai yaitu true dan false

// let belajar = true;
// if(belajar){
//     console.log("kelas ini sudah belajar")
// }

//* Object
//* Object ini merupakan tipe data yang berisi props */

// let object = {a}

// let identitas = {
//     firstName : 'dias',
//     lastName : 'robot',
//     email : 'dias@robot.com',
//     instagram : 'utssr',
//     linkedin : 'diashatirobot',
//     phone :'(021) 192301',
//     address : {
//         streetAddress :'a',
//         city : 'bekasi',
//         number : '17'
//     }
// }

// console.log('nama saya : ' + identitas.firstName + ' ' + identitas.lastName)
// console.log('saya tinggal di : '+ identitas.address.streetAddress)
 
// Memanggil object menggunakan array
// console.log('nama saya : ' + identitas['firstName'])

let transportasi = {
    kendaraan : {
        mobil : 'peugeot',
        motor : 'v-xion',
        sepeda : 'united'
    },
    jalan : 'Jalan berkah',
    kota : 'bekasi',
    platNomor : 'jabodetabek',
    kereta : {
        namaKa : 'argo bromo anggrek',
        tujuan : 'senen-pasar turi'
    }

}
console.table(transportasi)

