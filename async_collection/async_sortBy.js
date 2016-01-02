
var async = require('async');

var array = [1,3,5,7,2,4,6];

async.sortBy(array, function(num, callback){
	setTimeout(function(){
		if((num%2)===1){
			num *= 5;
		}
		console.log(num);
		callback(null, num+=1)},
		1000/num);
},function(err,results){
	if(err){
		console.log('error: ' + err);
	}
	console.log(results);
})

/*
35
6
25
4
15
2
5
[ 2, 4, 1, 6, 3, 5, 7 ]
*/