(function(){
	var isPalindrome = function (string) {
	    if (string == string.split('').reverse().join('')) {
	        return true;
	    }
	    else {
	        return false;
	    }
	}
	document.getElementById('palindrome').innerHTML = isPalindrome('abccba');
})()
