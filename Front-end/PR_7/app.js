const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
}).listen(8080);

// const mainFun = require("./Task1");
// mainFun(() => { console.log("call1"); }, () => { console.log("call2"); });

// const mainFun2 = require("./Task2");
// mainFun2().then(result => {
//     console.log(result());
// });

// const mainFun3 = require('./Task3');
// mainFun3('1').then(param => {
//     console.log(param());
// });
// mainFun3(1).then(result => {
//     console.log(result());
// });
// mainFun3(2).then(result => {
//     console.log(result());
// });

const makeBreakfast = require("./Task4");
const Supply = require('./Supply');
const supply = new Supply(true, true, true, true, true, true, true);
makeBreakfast(supply);

new Promise(resolve => {
    resolve("done");
}).then(value => {
    console.log(value);
});
