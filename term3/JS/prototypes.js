// writing custom prototypes

// capitalize
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

let name = "tyler"

console.log(name.capitalize())
console.log("anna".capitalize())




// prototype or constructor : pascal case
function Person(name, age) {
    // this refers to function Person in here
    this.name = name;
    this.age = age;
    this.awesome = true;
}

// creating an instance : using constructor syntax
let student1 = new Person("Nick", 20);
console.log(student1);

// how to attach country to function Person
Person.prototype.country = "Australia";
console.log(student1.country); // "Australia"
// note: this only updates the Person object, not variable objects

// student1 variable can be updated by altering the value
student1.country = "New Zealand"
console.log(student1);




function Hero(name, level) {
    this.name = name;
    this.level = level;

    // attach a function right here instead of a prototype
    // DOESNT WORK!!
    // this.shout = function() {
    //     return  `My name is ${this.name}`
    // }
}

// attach a function later
Hero.prototype.shout = function() {
    return  `My name is ${this.name}`
}

let superman = new Hero("Superman", 100);
let batman = new Hero("Batman", 60);

superman.shout()
batman.shout()

console.log(superman.shout());
console.log(batman.shout());






function Dog(name, location) {
    this.name = name
    this.location = location
}

//add a property speak : woof my name is dogName and my location is locationName
Dog.prototype.speak = function() {
    return `Woof! My name is ${this.name} and I am from ${this.location}`
}

let dog1 = new Dog("Jeff", "America");
console.log(dog1.speak())

// always attach a prototype method to a constructor function and not to the instances

Dog.prototype.setLocation = function(loc) {
    this.location = loc
}
dog1.setLocation("Sydney");
console.log(dog1.speak())





function Human() {
    this.legs = 2;
    this.arms = 2;
    this.head = 1;
}

Human.prototype.walk = function() {
    return `Taking a stroll with my ${this.legs} legs`
}

// function inherits from parent Human
function Man(name) {
    Human.call(this) // pass the reference of this object to the human object constructor
    this.name = name
}

// let tyler = new Man("Tyler")
// console.log(tyler);

// console.log(tyler.walk()); // this does not work when it comes to inheritance

Man.prototype = Object.create(Human.prototype) // need to create this first.
let tyler = new Man("Tyler")
console.log(tyler);
console.log(tyler.walk());




// classes
// functions are hoisted, classes are not
// syntactic sugar for programmers from other languages to ease into JS 
class Shape {
    // similar to initialize in ruby
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height
    }
}

Shape.prototype.color = "Red"

// create an instance
let square = new Shape(10, 10)
console.log(square.area());
console.log(square.color);




class House {
    static unlock(secretPassphrase) {
        if (secretPassphrase == "please") {
            return "Ok, I'll open"
        }
        return "Not allowed"
    }
}

// dont need an instance to call a class method : use case of static
console.log(House.unlock("please"));