
var async = require('async');

var array = [1,2,3,4,5,6,7];

async.map(array, function(num, callback){
	if(num>5){
		callback('too big');	
	}
	setTimeout(function(){
		console.log(num+1);
		callback(null, num+1)},
		100/num);
},function(err,results){
	if(err){
		console.log('error: ' + err);
	}
	console.log(results);
})

/*
error: too big
[ , , , , , undefined ]
6
5
4
8
*/