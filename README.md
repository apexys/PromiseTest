# PromiseTest
Experiments with ES6-Promises and similar concepts

Promises in Node don't work properly with http requests, or at least not as far as I can see right now.

To start the experiment you'll need some kind of server to throw requests against. Run `node createfiles.js` in `testserver` to create 1000 files with just their name in them and start some kind of http server in there, I used `python3 -m http.server`.

To run the vanilla-ES6-solution, go into `Node-ES6`, `npm install request` and run `node promisetest.js`.

In my case, this failed after around 220 requests and seemed to have garbage collected itself (see https://twitter.com/apexys/status/807202752011059200).

To run the C#-solution, go into `C#`, compile with `mcs promisetest.cs` and run `mono promisetest.exe`. It's a bit slow, but for me, it finished after around 20 seconds.

Further tests as I write them.
