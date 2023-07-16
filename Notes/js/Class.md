# JAVASCRIPT

### Run local server in a directory using below commands 
```python 
python -m http.server 5000
```

## Classes
Classes are a template for creating objects. Classes are in fact "special functions". 
- class expression
- class declaration
Imp Points
- Like function expressions, class expressions may be anonymous, or have a name that's different from the variable that it's assigned to. However, unlike function declarations, class declarations have the same temporal dead zone restrictions as let or const and behave as if they are not hoisted.


## Function 
Can be declared by two ways 
-  **function expressions** 
-  function declarations,

## Prototype
In JavaScript, the prototype is an inherent property of every object that allows objects to share methods and properties. **It is a mechanism that enables object inheritance, where objects can inherit properties and behavior from other objects.**

Every object in JavaScript has an internal property called `[[Prototype]]` (denoted by `__proto__` in some JavaScript environments). This `[[Prototype]]` property references another object, which is the prototype of the current object. The prototype object itself can have its own prototype, forming a prototype chain.

When you access a property or method on an object, JavaScript first checks if the property exists on the object itself. If it doesn't find the property, it then looks up the prototype chain to find the property on the prototype object. This chain continues until the property is found or the end of the chain (the `Object.prototype`) is reached.

The prototype mechanism is particularly useful for implementing inheritance in JavaScript. By setting an object's prototype to another object, the first object inherits the properties and methods of the prototype object. This allows for code reuse and the creation of object hierarchies.

Here's an example that demonstrates the use of prototypes in JavaScript:

```javascript
// Constructor function
function Person(name) {
  this.name = name;
}

// Prototype method
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

// Create objects
var person1 = new Person("Alice");
var person2 = new Person("Bob");

// Call prototype method
person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob
```

In this example, we define a `Person` constructor function that sets the `name` property on each instance of `Person`. The prototype of the `Person` function is defined using `Person.prototype`, where we add a `greet` method. This method is shared among all instances of `Person` through the prototype chain.

We then create two instances of `Person` using the `new` keyword. Each instance has its own `name` property, but they share the same `greet` method inherited from the prototype.

By leveraging prototypes, we can add methods or properties to objects without duplicating them in each instance. This helps save memory and promotes code reuse and inheritance in JavaScript. 

## Strict mode 
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
Declared inside a function, it has local scope. 

In JavaScript, strict mode is a feature that allows you to opt into a stricter set of rules and behaviors for writing JavaScript code. It was introduced in ECMAScript 5 (ES5) to help developers write more reliable and maintainable code by catching common mistakes and preventing the use of certain error-prone language features.

Here are some benefits and use cases of using strict mode in JavaScript:

1. Catching silent errors: In non-strict mode, JavaScript can be forgiving and silently ignore certain mistakes or problematic code constructs. Strict mode helps catch and highlight such errors by generating exceptions or showing warnings. This can help identify potential issues early in the development process.

```javascript
// Non-strict mode
function add(a, a) {
    return a + a;
}

console.log(add(5, 10)); // Output: 20 (silent error, duplicate parameter name)

// Strict mode
"use strict";

function addStrict(a, a) {
return a + a;
}

console.log(addStrict(5, 10)); // Output: Uncaught SyntaxError: Duplicate parameter name not allowed in this context
```

2. **Avoiding global scope pollution**: In non-strict mode, variables that are not explicitly declared become implicitly global, which can lead to naming collisions and unexpected behavior. Strict mode requires you to explicitly declare variables with `var`, `let`, or `const`, helping to prevent accidental global scope pollution.

```
"use strict"
x = 20;  // index.js:2 Uncaught ReferenceError: x is not defined, not error if we don't use strict mode
```

3. **Disabling deprecated features**: Strict mode disables certain deprecated features and behaviors of JavaScript, promoting the use of modern and standardized language constructs. This ensures better cross-browser compatibility and reduces the risk of relying on outdated or non-standard behavior.
```javascript
// Non-strict mode
function useDeprecatedFeature() {
    arguments.callee; // deprecated feature: reference to the current function
  }
  
  useDeprecatedFeature();
  
  // Strict mode
  "use strict";
  
  function useDeprecatedFeatureStrict() {
    arguments.callee; // Error: Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions
  }
  
  useDeprecatedFeatureStrict();
```

4. Enhancing security: Strict mode helps in mitigating security vulnerabilities by preventing the usage of potentially unsafe features. For example, it disables the ability to assign values to the `this` keyword in functions that are not constructors, reducing the risk of accidental modification of the global object.
```javascript
// Non-strict mode
function modifyThis() {
    this.message = "Hello, world!";
  }
  
  modifyThis();
  
  console.log(window.message); // Output: Hello, world! (global object pollution)
  
  // Strict mode
  "use strict";
  
  function modifyThisStrict() {
    this.message = "Hello, world!";
  }
  
  modifyThisStrict();
  
  console.log(window.message); // Output: undefined (prevents modification of the global object)
                               // Uncaught TypeError: Cannot set properties of undefined (setting 'message') at modifyThisStrict 
```

To enable strict mode in JavaScript, you can add the following statement at the beginning of your script or a specific function:

```javascript
"use strict";
```

Once strict mode is enabled, it applies to the entire script or the function where it is defined and any nested functions within that scope.

It's worth noting that strict mode is supported by all modern browsers and is recommended for use in new JavaScript projects. Enabling strict mode helps improve code quality, catch potential issues, and promote best practices in JavaScript development.

## Constructor
The constructor method is a special method for creating and initializing an object created with a class. 
```javascript
Uncaught SyntaxError: A class may only have one constructor (at index.js:6:5)
```
- A constructor can use the super keyword to call the constructor of the super class.

## Static initialization blocks
In JavaScript, there is no direct equivalent of static initialization blocks as found in languages like Java. However, you can achieve similar behavior by using a **self-invoking function or a module pattern to execute code during the initialization of a module or object**.

Here's an example that demonstrates the concept of static initialization using a self-invoking function:

```javascript
var MyClass = (function() {
  // Static variables
  var staticVariable1 = "Hello";
  var staticVariable2 = "World";

  // Static initialization block
  (function init() {
    console.log("Static initialization block");
    // Perform any initialization tasks here
    console.log("Static variables: " + staticVariable1 + " " + staticVariable2);
  })();

  // Public methods
  return {
    publicMethod: function() {
      console.log("Public method");
    }
  };
})();

// Usage
MyClass.publicMethod();
```

In this example, we use an **immediately-invoked function expression (IIFE)** to encapsulate the static variables and the static initialization block. The static initialization block is executed immediately when the IIFE is invoked. **Inside the initialization block, you can perform any necessary setup tasks or initialization logic for the static variables.**

After the static initialization block, we define and return an object that represents the public interface of the `MyClass`. This allows access to the public methods and hides the internal implementation details.

When you run this code, you will see the output:
```
Static initialization block
Static variables: Hello World
Public method
```

Note that this approach provides a way to achieve similar behavior to static initialization blocks by executing code during the initialization of a module or object. However, it's important to keep in mind that JavaScript does not have a built-in concept of static variables like some other languages. The example above demonstrates how to achieve a similar effect using JavaScript patterns.


## Methods
Methods are defined on the prototype of each class instance and are shared by all instances. Methods can be plain functions, async functions, generator functions, or async generator functions.

```javascript
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    *getSides() {
      yield this.height;
      yield this.width;
      yield this.height;
      yield this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100
  console.log([...square.getSides()]); // [10, 10, 10, 10]
  
```

## Methods are defined on the prototype of each class instance. What does that mean with details example 
In JavaScript, methods are typically defined on the prototype of each class instance rather than directly on the instance itself. This means that the method is shared among all instances of the class, reducing memory consumption and allowing for efficient code reuse.

Let's illustrate this with a detailed example:

```javascript
// Person constructor function
function Person(name) {
  this.name = name;
}

// Method defined on the prototype
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

// Create two instances of Person
var person1 = new Person("Alice");
var person2 = new Person("Bob");

// Call the greet method
person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob
```

In this example, the `Person` constructor function is defined to create instances of a person object. The `name` property is set on each instance using the `this` keyword inside the constructor function.

The interesting part is the `greet` method. Instead of defining it directly inside the constructor function, we define it on the prototype of the `Person` function using `Person.prototype.greet = ...`. This means that all instances of `Person` will share the same `greet` method through the prototype chain.

When we create `person1` and `person2` using the `new` keyword, they both have access to the `greet` method defined on the prototype. The method is not duplicated for each instance; rather, both instances reference the same method in memory.

This approach provides memory efficiency since the shared method is not duplicated for each instance. It also allows for code reuse and enables dynamic polymorphism. If we modify the `greet` method on the prototype, the change will be reflected in all instances of `Person` since they share the same method through the prototype chain.

By defining methods on the prototype, JavaScript optimizes memory usage while providing flexibility and extensibility through shared behavior across instances.

## Static methods and fields
- The static keyword defines a static method or field for a class. 
- Static properties (fields and methods) are defined on the class itself instead of each instance. 
- Static methods are often used to create utility functions for an application, whereas static fields are useful for caches, fixed-configuration, or any other data that don't need to be replicated across instances.

```javascript 
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static displayName = "Point";
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  p1.displayName; // undefined
  p1.distance; // undefined
  p2.displayName; // undefined
  p2.distance; // undefined
  
  console.log(Point.displayName); // "Point"
  console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

## How class and function are related in javascript ? 
In JavaScript, classes and functions are closely related. **In fact, classes in JavaScript are primarily syntactical sugar over constructor functions.**

Before the introduction of the class syntax in ECMAScript 2015 (ES6), JavaScript used constructor functions to define objects and implement object-oriented programming concepts. Constructor functions are regular functions that are invoked with the `new` keyword to create new instances of objects.

Here's an example of a constructor function in JavaScript:

```javascript
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
```

In this example, we define a constructor function called `Rectangle`. When the `Rectangle` function is invoked with the `new` keyword, it creates a new instance of the `Rectangle` object and sets the `width` and `height` properties on the newly created instance using `this`.

We can also define methods for the `Rectangle` object by adding them to the `Rectangle.prototype`. The `getArea` method is defined on the prototype, which allows all instances of `Rectangle` to share the same method.

With the introduction of the class syntax in ES6, JavaScript provides a more convenient and readable way to define classes. Under the hood, classes are still based on constructor functions and prototypes.

Here's the equivalent example using the class syntax:

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}
```

In this class syntax, we define the `Rectangle` class using the `class` keyword. The constructor is defined within the class using the `constructor` method, and the `getArea` method is defined directly within the class body.

The class syntax offers a more intuitive and concise way to define classes in JavaScript, but it is important to understand that classes are still based on constructor functions and prototypes behind the scenes. The class syntax makes the connection between functions and classes more explicit and provides a clearer syntax for working with object-oriented concepts in JavaScript.

## Constructor Function 
In JavaScript, a constructor function is a special type of function that is used to create and initialize objects. It serves as a blueprint for creating multiple instances of objects with similar properties and behavior.

When a constructor function is invoked with the `new` keyword, it creates a new object and sets the newly created object as the value of `this` within the function. The constructor function typically contains code to initialize the object's properties or perform other setup tasks.

Here's an example of a constructor function in JavaScript:

```javascript
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

// Create a new instance using the constructor function
var rect = new Rectangle(5, 10);
```

In this example, we define a constructor function called `Rectangle`. The function takes two parameters, `width` and `height`, which are used to set the properties of the object being created. The `this` keyword refers to the newly created object within the constructor function.

To create a new instance of `Rectangle`, we use the `new` keyword followed by the constructor function and provide the necessary arguments. This invocation creates a new object with the specified width and height, assigning it to the `rect` variable.

The constructor function allows us to define the initial state of an object and provide a template for creating multiple instances of objects with similar characteristics. It encapsulates the logic for object creation and initialization, making it convenient to create new objects based on the defined blueprint.

It's worth noting that constructor functions in JavaScript are a convention and not a strict language feature. They are regular functions that are intended to be used with the `new` keyword to create objects. By convention, constructor functions are capitalized to distinguish them from regular functions and other variables.

## If a function is not using this keyword, then can we say that it is a simple function 

Yes, if a function does not use the `this` keyword within its body, it can be considered a simple or regular function rather than a constructor function or a method.

Functions that do not use `this` typically operate on their parameters and local variables, perform calculations, or produce some output. They do not have an implicit connection to any specific object or instance.

Here's an example of a simple function that does not use the `this` keyword:

```javascript
function multiply(a, b) {
  return a * b;
}

var result = multiply(5, 10);
console.log(result); // Output: 50
```

In this example, the `multiply` function takes two arguments, `a` and `b`, and returns their product. It does not use `this` to reference any specific object or instance. It is a standalone function that performs a calculation based on its inputs and returns the result.

Simple functions like this are commonly used for code organization, modularization, and performing specific tasks or computations. They can be called directly without the need for object instantiation or using them as methods within objects.

On the other hand, constructor functions and methods typically use the `this` keyword to refer to the current object or instance they are being invoked on. They have a connection to the object's state and behavior, allowing them to interact with the object's properties and perform operations specific to that object.

In summary, if a function does not use `this`, it is generally considered a simple or regular function that operates independently of any specific object or instance.

## Field declarations
- Class fields are similar to object properties, not variables, so we don't use keywords such as const to declare them. 
- In JavaScript, private features use a special identifier syntax, so modifier keywords like public and private should not be used either.
- As seen above, the fields can be declared with or without a default value. Fields without default values default to undefined.
-  By declaring fields up-front, class definitions become more self-documenting, and the fields are always present, which help with optimizations.

```javascript
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```
## Private class features 
- It's an error to reference private fields from outside of the class; they can only be read or written within the class body.
-  By defining things that are not visible outside of the class, you ensure that your classes' users can't depend on internals, which may change from version to version.
- Private fields can only be declared up-front in a field declaration. They cannot be created later through assigning to them, the way that normal properties can.
- With the introduction of private class fields in ECMAScript 2019 (ES2019), JavaScript now provides a native way to declare private fields within a class using the # symbol.
```javascript
class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  getArea() {
    return this.#width * this.#height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.#width);  // Error: SyntaxError: Private field '#width' must be declared in an enclosing class
console.log(rect.getArea());  // Output: 50
```

## How private fields are declared in constructor function ? 

In JavaScript, private fields are not directly supported in constructor functions like they are in classes. However, you can achieve a similar level of privacy in constructor functions by using closures or naming conventions.

Here's an example that demonstrates how to create private fields in a constructor function using closures:

```javascript
function Rectangle(width, height) {
  var _width = width;
  var _height = height;

  this.getArea = function() {
    return _width * _height;
  };
}

var rect = new Rectangle(5, 10);
console.log(rect._width);  // Output: undefined (private field)
console.log(rect.getArea());  // Output: 50
```

In this example, the `Rectangle` constructor function defines two private fields, `_width` and `_height`, using the `var` keyword inside the constructor function. These variables are not accessible from outside the constructor function, effectively creating private fields.

The `getArea` method is defined as a property of the constructed object using the `this` keyword. Inside the `getArea` method, it has access to the private fields `_width` and `_height`, allowing it to calculate and return the area of the rectangle.

When we create an instance of the `Rectangle` constructor function and try to access the private fields using `rect._width`, it returns `undefined` because the private fields are not directly accessible outside the constructor function.

By using closures, we create a private scope within the constructor function, where the private fields are stored and can only be accessed by the methods defined inside the constructor function.

It's important to note that the naming convention with the underscore prefix (`_width` and `_height`) is commonly used to indicate that a field or property is intended to be private. However, this convention does not enforce the privacy of the field; it's more of a convention followed by developers to signal the intention of privacy.

## Closures

In JavaScript, closures are a powerful concept that allows functions to retain access to variables from their outer (enclosing) lexical scope, even after the outer function has finished executing. In simple terms, a closure is a function bundled together with its lexical environment (the variables that were in scope at the time of creation).

Closures are created when an inner function references variables from its outer function. The inner function "closes over" those variables and maintains a reference to them, even if the outer function has already returned or finished executing.

Here's an example that demonstrates closures in JavaScript:

```javascript
function outer() {
  var outerVariable = "Hello";

  function inner() {
    console.log(outerVariable); // Accessing the outerVariable from the outer scope
  }

  return inner; // Returning the inner function
}

var closure = outer(); // The outer function is invoked, and the inner function is returned

closure(); // Invoking the inner function

// Output: Hello
```

In this example, the `outer` function defines an `outerVariable` and declares an inner function called `inner`. The inner function has access to the `outerVariable` from its outer scope. Even after the `outer` function has finished executing and returned the `inner` function, the `inner` function maintains a reference to the `outerVariable` through closure.

When we invoke the `closure` function, it still has access to the `outerVariable` from the outer scope of the `outer` function. Thus, it logs "Hello" to the console.

Closures are useful in various scenarios, such as encapsulating data, creating private variables or functions, and implementing function factories or currying. They provide a way to retain and access variables even when their enclosing scope is no longer active, making them a fundamental concept in JavaScript.

## Give me a example on how scope are used to create private variable 
Certainly! Here's an example that demonstrates how closures and lexical scope can be used to create private variables in JavaScript:

```javascript
function createCounter() {
  var count = 0; // Private variable

  function increment() {
    count++;
    console.log("Count: " + count);
  }

  function decrement() {
    count--;
    console.log("Count: " + count);
  }

  return {
    increment: increment,
    decrement: decrement
  };
}

var counter = createCounter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1
```

In this example, the `createCounter` function creates a counter object with private variables `count`. The `increment` and `decrement` functions are defined within the `createCounter` function and have access to the private `count` variable due to closure.

When we invoke `createCounter`, it returns an object that contains references to the `increment` and `decrement` functions. These functions maintain a reference to the `count` variable through closure, allowing them to increment or decrement the counter value and log the updated count.

Since the `count` variable is not directly accessible from outside the `createCounter` function, it acts as a private variable. The returned object provides a way to interact with the counter by invoking the `increment` and `decrement` functions, but the internal state of the counter (`count`) remains hidden.

By utilizing closures and lexical scope in this way, we create a module-like structure where private variables can be encapsulated and accessed only through the exposed public interface of the returned object. This helps in creating more robust and maintainable code by controlling access to internal data.







References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
- 

