//ways to create objects
//literal
//constructor
/*Object.create
 it allows you to choose the prototype object for the object you want to create, without having to define a constructor function
*/
(function(){
	var literal = {
		name : 'hey'
	};

	// function is object so has _proto_
	// construct function also has prototype property, instance shallow copy func.prototype when new
	//function also has function _proto_ which has all the build in function methods
	function funcConstruct(){
		this.name = 'function constructor';
	}
	funcConstruct.prototype.say = function(){console.log('say some thing')}
	//f_proto_ point to funcConstruct.prototype
	var f = new funcConstruct();

	// Animal properties and method encapsulation
	var Animal = {
	  type: "Invertebrates", // Default value of properties
	  displayType : function(){  // Method which will display type of Animal
	    $('#obj').html(this.type);
	  }
	}

	// Create new animal type called animal1 
	// anaimal1 has no own propoties, but the prototype is point to Animal object
	var animal1 = Object.create(Animal);
	animal1.displayType(); // Output:Invertebrates

	// Create new animal type called Fishes
	var fish = Object.create(Animal);
	fish.type = "Fishes";
	fish.displayType(); // Output:Fishes
})()