
var async = require('async');

var array = [1,2,3,4,5,6,7];

async.forEachOf(array, function(value, key, callback){
	setTimeout(function(){
		console.log('key: ' + key + ' value:' + value);
		callback();},100/value);
},function(err){
	if(err){
		console.log('error: ' + err);
	}
});

/*
Console:
key: 6 value:7
key: 5 value:6
key: 4 value:5
key: 3 value:4
key: 2 value:3
key: 1 value:2
key: 0 value:1
*/