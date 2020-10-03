/* Almost everything is an object - EVEN simple variables with a single value

var car = "Ford";

==========================================================================================

But in reality most objects have multiple values
Here a single object is created with 3 name:value pairs 

var car = {type:"Compact", color:"Blue", miles:5000};

==========================================================================================

What if we need to create many objects off the same generic object?  
We can create an Object Type which is essentially a template that you can reuse over and over again.
THIS IS ALSO CALLED A CLASS.  We do not need values in the Object Type because this is our 'template'.  When 
we create new objects off of the Object Type then we will assign values.  The this keyword is the place holder for new object. */

function car(type, color, miles) {
    this.type = type;
    this.color = color;
    this.miles = miles;
}

var car1 = new car("Compact", "blue", 6580);
var car2 = new car("Truck", "red", 397);
var car3 = new car("SUV", "yellow", 9948);

//========================================================================================== 

function changeStyle() {

document.getElementById("para").innerHTML = car1.type + " car with " + car1.miles + " miles.  " + car1.color + " is the color.";
}