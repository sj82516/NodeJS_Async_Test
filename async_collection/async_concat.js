
var async = require('async');

var array = [1,2,3,4,5,6,7];

async.concat(array, function(num, callback){
	setTimeout(function(){
		var arr = [];
		for(var i=0; i<num; i++){
			arr.push(num);
		}
		console.log(arr);
		callback(null, arr)},
		100/num);
},function(err, results){
	if(err){
		console.log(err);
	}
	console.log(results);
})

/*
[ 7, 7, 7, 7, 7, 7, 7 ]
[ 6, 6, 6, 6, 6, 6 ]
[ 5, 5, 5, 5, 5 ]
[ 4, 4, 4, 4 ]
[ 3, 3, 3 ]
[ 2, 2 ]
[ 1 ]
[ 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1 ]
*/