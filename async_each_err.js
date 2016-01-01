
var async = require('async');

var array = [1,2,3,4,5,6,7];

async.each(array, function(num, callback){
	if(num>5){
		callback('something wrong');
	}
	setTimeout(function(){
		console.log(num+1);
		callback()},
		100/num);
},function(err){
	if(err){
		console.log('error: ' + err);
	}
})

/*
Console :
error: something wrong
6
5
8
/Users/zhengyuanjie/node_modules/async/lib/async.js:43
            if (fn === null) throw new Error("Callback was already called.");
*/
