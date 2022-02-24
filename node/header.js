/**
 * header http 
 * 
 * Http Header permintaan memberikan informasi tentang permintaan respon. atau badan transmisi lainnya
 * 
 * Pada bagian ini akan memperkenalkan header respon http tertentu.
 * belajar menerima otentikasi
 */



const http = require('http');

const server = http.createServer((req, res) => {

    let dataHeader, // akan menampung objek header request
    dataAutorization, // akan berisi property dari objek header 
    splitData, // permisah atau pembatas antara value autorization 
    dataUser, // kode dengan base64 to user
    dataResponse;

    res.setHeader("Content-Type", "application/json");

    // ini untuk mendapatkan hasil respon berupa json
    dataHeader = req.headers;

    console.log(dataHeader);

    // get data otorisasi
    dataAutorization = dataHeader.authorization

    // jika authorizationnya tidak terkirim maka akan menghasilkan :

    if (!dataAutorization) {
        dataResponse ={
            data: "undefined Authorization"
        }

        // send ke client dan return agar berhenti
        return res.end(JSON.stringify(dataResponse))
    }

    splitData = dataAutorization.split("")

    dataUser = splitData[1];

    userPass = buffer.from(dataUser, 'base64').toString();

    // create respon berisi nilai dan user pass 
    dataResponse = {
        token: dataHeader.authorization,
        userPass,
    }

    return res.end(JSON.stringify(dataResponse))

})

server.listen(5000)
