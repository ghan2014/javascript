//web worker demo
var prime = new worker('prime.js');
var workerCallback = function(e){console.log(e.date;)}
prime.addEventListener('message', workerCallback, false);
prime.postMessage(10000);
