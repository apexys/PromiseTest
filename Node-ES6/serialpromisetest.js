

var urlproto = "http://localhost:8000/files/"
var i = 0;
var array = [];
for(var i = 0; i < 500; i++){
    array.push(urlproto + i);
}
let items = 0;
var request = require('request');
var makeReq = (url) => new Promise((resolve, reject)=>{
    request(url, function (error, response, body) {
	 if(error){
		console.log("Error at request " + url + ": " + error);
		resolve("ERROR");
		return;
	 }
         console.log("Got " + url + "(" + response.statusCode + ")") ;
         items ++;
	 console.log(items);
         resolve(response.statusCode);
    });
});

array = array.map(makeReq);
var helpers = require('./helpers.js');
helpers.PromiseSerialAll(array).then((ar) => console.log("finished: " + items));
