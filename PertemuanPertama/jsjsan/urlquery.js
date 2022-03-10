/**
 * URL Query String
 * 
 * pasangan antara key - value yang ada di URL
 * 
 * contoh : URL google.com
 * 
 * awal = https://www.google.com/
 * 
 * ketika searching = https://www.google.com/search?q=gatebox
 * 
 * tanda tanya (?) adalah pemisah antara url dengan query (DALAM KASUS DIATAS)
 * 
 * q = key 
 * gatebox = value
 * 
 * fungsi disini adalah untuk mengirim data ke server dengan method GET
 */

const http = require('http');
const querystring = require('querystring');
const url = require('url');

const server = http.createServer( (req, res) => {
    let urlRequest, //berisi path url di request 
        urlObj, // berisi url yang sudah diproses
        urlQuery, // berisi object dari query
        dataResponse // object query

        res.setHeader("Content-Type", "application/json")

        urlRequest = req.url
        // ubah string urlRequest jadi bentuk object URL
        // parse nya berfungsi untuk mengurai jadi kita bisa panggil propertynya nanti ngerti kan
        urlObj = url.parse(urlRequest)
        console.log(urlObj)

        urlQuery = urlObj.query

        if(!urlQuery){
            dataResponse = { 
                data: "Query string not found"
            }
            return res.end(JSON.stringify(dataResponse));
        }
        //kirim responesnya dari hasil parsing urlQuery
        dataResponse = querystring.parse(urlQuery)
        return res.end(JSON.stringify(dataResponse));

})

server.listen(3000);