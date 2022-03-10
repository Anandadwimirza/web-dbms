require("dotenv").config()
const express = require('express');
const app = express();




// app.listen(port, function(){
    //     console.log(`currently listening on server port ${port} `);
    // });
    
    
    app.get('/', (req, res) => {
        let status = process.env.PORT == 8000 ? "Production" : "Development";
        res.send(`hello anda sedang di halaman ${status} page`);
    })

    app.listen(process.env.PORT, function(){
        console.log(`server is listening on ${process.env.PORT}`);
    })
    
    
    