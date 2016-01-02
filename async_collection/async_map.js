
var async = require('async');

var array = [1,2,3,4,5,6,7];

async.map(array, function(num, callback){
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
8
7
6
5
4
3
2
[ 2, 3, 4, 5, 6, 7, 8 ]
*/