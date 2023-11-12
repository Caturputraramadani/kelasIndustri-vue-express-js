//  buat server http server
// require = import
const http = require('http');

// comon Js atau ESN Ecmascript
const {testFunction, newFunction} = require('./function');
const { resolve } = require('path');

// promise
const printAgakTelat = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('Sudah Sampai!');
        // reject('infalid`');
        }, 1000 * 5);
    });
}

var server = http.createServer(async (req, res) => {
    switch (req.url) {
    case "/about":
        console.log("Saya otw!");
        const value = await printAgakTelat();
        console.log(value);
        console.log("ngopi");
        res.write('ini adalah halaman about');
        res.end();
        break;
    case '/home':
        res.write('ini adalah halaman home');
        res.end();
        break;
    case '/contact':
        res.write('ini adalah halaman contact');
        res.end();
        break;
    default:
        res.write('404 Not Found');
        res.end();
        break;
    }
});

const port = 3000;
server.listen(port);
console.log(`Server Jalan di http://localhost: ${port}`);