
var async = require('async');

var array = [1,2,3,4,5,6,7];

async.each(array, function(num, callback){
	setTimeout(function(){
		console.log(num+1);
		callback()},
		100/num);
},function(err){
	if(err){
		console.log('error');
	}
})

/*
Console:
8
7
6
5
4
3
2
*/