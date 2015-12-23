/*
To implement the Sieve of Eratosthenes, you need to add each prime you find to an array, and then test the next candidate prime against every prime you've found so far. If the candidate is not divisible by any of the primes in the array, then it's prime, and you can add it to your array of primes.
*/
(function(){
    var prime = function(val){  
        var array = [2, 3];
        for (var i = 5; i <= 100; i += 2) {
            if (array.every(function(p) { return i % p; })) {
                array.push(i);
            }
        }
        var result = array.join(",");
        document.getElementById("prime").innerHTML = result;
    }

    prime();

})()