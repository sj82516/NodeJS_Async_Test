
var async = require('async');

var array = [1,2,3,4,5,6,7];

async.reduce(array, 0, function(memo, num, callback){
	setTimeout(function(){
		console.log('memo: ' + memo + ' num: ' + num);
		process.nextTick(function(){
        	callback(null, memo + num)
    	})
	},100/num);
},function(err,result){
	if(err){
		console.log(err);
	}
	console.log('result: ' + result);
})

/*
memo: 0num: 1
memo: 1num: 2
memo: 3num: 3
memo: 6num: 4
memo: 10num: 5
memo: 15num: 6
memo: 21num: 7
result: 28
*/