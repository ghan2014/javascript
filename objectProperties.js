//javascript objects, also triverse the prototype chain
//Object.keys() - object's own enumerable properties
//Object.getOwnPropertyNames()
(function(){
	var obj = {
		'make':'ford',
		'model':'mus',
		'year':'1991'
	};
	var objName = 'car';
	var findProperties = function(obj, objName){
		var result = '';
		for (var i in obj){
			if(obj.hasOwnProperty(i)){
				result += objName + '.' + i + '=' + obj[i] + ' ';
			}
		}
		return result;
	}
	
	$('#properties').html(findProperties(obj, objName));
})()