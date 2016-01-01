
var async = require('async');

var array = [1,2,3,4,5,6,7];

async.filter(array, function(num, callback){
	setTimeout(function(){
		callback((num%2)===0)},
		100/num);
},function(results){
	console.log(results);
})

/*
[ 2, 4, 6 ]
*/