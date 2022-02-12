// 3 types of creating arrays

// 01 Empty Array(we can add or delete values)
var motorBikes = [];

// 02
var airPlanes = new Array("AirBus", "Boeing");

// 03
var cars = ["Toyota", "Nissan", "Honda", 30, true]
cars
cars[2]
// Honda

cars[0]
// Toyota


// Array Properties - length(number of items in the array)
cars.length
motorBikes.length



// Array Methods

// 01 push() ----------> Insert item as a last property
cars.push("Suzuki")
motorBikes.push("Honda")

// 02 pop() -----------> Remove the last item in array
cars.pop()

// 03 shift() ---------> Remove the 1st item in array
cars.shift

// 04 unshift() -------> Insert item to the array as the 1st item
cars.unshift("Toyota")

// 05 indexOf() --------> To search matching item position
cars.indexOf("Nissan")
cars.indexOf("Suzuki")
