/*
This is a sanity check, just so I know the problem is not in my part of the program.
So what it does is, it generates a list of URLs and requests headers for them and just reports the status code.
The catch is it does this in parallel, or at least as parallel and with as much connection reuse as the system will permit.
The server hit is ycombinators hacker news site, which should be able to take the load without any problem.
The whole process is practically analogous to what happens in modules.js#replaceModuleTagsInDoc, which doesn't work.
As a workaround, I built a function which processes requests in serial, forcing node to use (and reuse) one connection.
That doesn't work either.
*/

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
Promise.all(array).then((ar) => console.log("finished: " + items));
