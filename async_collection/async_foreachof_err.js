
var async = require('async');

var array = [1,2,3,4,5,6,7];

async.forEachOf(array, function(value, key, callback){
	if(value>5){
		callback('too big');
	}
	setTimeout(function(){
		console.log('key: ' + key + ' value:' + value);
		callback();},100/value);
},function(err){
	if(err){
		console.log('error: ' + err);
	}
});

/*
error: too big
key: 4 value:5
key: 3 value:4
key: 6 value:7
/Users/zhengyuanjie/node_modules/async/lib/async.js:43
            if (fn === null) throw new Error("Callback was already called.");
*/