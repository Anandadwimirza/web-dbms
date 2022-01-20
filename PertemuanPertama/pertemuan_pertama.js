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

let a = "Saya Globe Scope" //* GLOBE SCOPE INI BISA DIGUNAKAN DIMANAPUN
function tugas(){
    console.log(a)
    let b = "Saya Local Scope" //* LOCAL SCOPE INI BISA DIPANGGIL DI FUNCTION INI AJA
    console.log(b)
    if(true){
        let c = "Saya Block Scope" //* BLOCK SCOPE INI BISA DIGUNAKAN DI BLOCK INI SAJA
        console.log(c)
    }


}

tugas()


