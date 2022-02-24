/**
 * membuat server menggunakan module http 
 * */ 

const http = require('http');

const server = http.createServer((req, res) => {

    //insisiasi variabel yang akan digunakan
    let data;

    console.log(req);

    /**
     * object request itu banyak, tapi yang dipakai itu cuma 3
     * method, url, headers
     */

    // create object yang berisi url, method, dan header

    data = {
        url : req.url,
        method : req.method,
        headers : req.headers
    }

    // ini akan mengubah set response menjadi berupa data json
    res.setHeader("Content-Type" , "application/json")

    res.end(JSON.stringify(data));

})

server.listen(3000);