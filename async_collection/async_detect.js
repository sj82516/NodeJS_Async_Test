
var async = require('async');

var array = [1,2,3,4,5,6,7];

async.detect(array, function(num, callback){
	setTimeout(function(){
		callback((num%2)===0)},
		100/num);
},function(result){
	console.log(result);
})

/*
6
*/