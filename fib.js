(function(){
	var fib = function(length){
		var i = 0;
		var j = 1;
		var a = [i,j];
		while(a.length < length){
			a.push(a[i]+a[j]);
			i++;
			j++;
		}
		console.dir(a);
		return a;
	}
	var r = fib(10);
	$('#fib').html(r.join(','));
})()