/**
 * 
 * Request Body
 * 
 * kita akan menampilkan cara untuk membaca request body pada server
 *  
 * terdapat 2 bentuk transaksi data antara client dan server :
 * upload: mengirim data dari client ke server 
 * download: menerima data dari server ke klien
 * 
 * stream yaitu kegiatan transaksi dari awal sampe selesai, meliputi :
 * 1. mulai inisiasi data ke tujuan
 * 2. chunk : pemisahan data yang dikirim menjadi bagian kecil 
 * 3. pengiriman data berbentuk chunk ke tujuan disebut buffering
 * 4. kalau done dibuffer semua, proses data agar utuh lagi
 */

const http = require('http')
const querystring = require('querystring')
const server = http.createServer((req, res) => {
    let urlReq,
        method, 
        dataReq

    const chunkArr = [];
    const dataResponse = {} 
    
    res.setHeader("Content-Type", "application/json")

    urlReq = req.url
    methodReq = req.method?? "get"

    if(urlReq.toLowerCase() === "/login"){
        if (methodReq.toLowerCase() === "get") {
            dataResponse.data = "ini adalah halaman login"
        }else if (methodReq.toLowerCase() === "post"){
            req.on("data" , (chunk)=>{
                chunkArr.push(chunk) // maka akan menambahkan data chunck ke chunckArr
            })
        }else{
            dataResponse.data = "Ubah Method ke get atau post"
        }
    }else{
        dataResponse.data = "Gunakan endpoint /login"
    }

    req.on("end", () => {
        if(chunkArr.length !== 0){
            dataReq = Buffer.concat(chunkArr).toString()
            console.log(dataReq)

            let requestObj = querystring.parse(dataReq);

            dataResponse.data = requestObj;
        }
        return res.end(JSON.stringify(dataResponse))
    })
})
server.listen(5000)