var person = {
    firstname: 'Rodrigo',
    lastname: 'Vallades',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;        
    }
}

var person2 = {
    firstname: 'John',
    lastname: 'Doe'    
}

var logToConsole = function(arg1, arg2) {
    // the getFullName() is not acessible in the global scope,
    // so this will result in an eror
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + arg1 + ' ' + arg2);
    console.log('---------');
}

// bind()
//
// bind() creates a copy of the function. It does not invoke it.
// It also points the 'this' keyword to the object passed, so when th execution context is created, is points to the object passed.
// Now logToConsole can borrow 'person' methods
// bind() also accepts arguments. This is useful for 'currying'
var logPerson = logToConsole.bind(person);
console.log('bind()');
logPerson('frontend', 'developer');

// call()
//
// call() invokes the funcion,
// the first argument is the 'this' keyword
// the rest of the arguments are regular parameters
console.log('call()');
logToConsole.call(person, 'product', 'manager');

// apply()
//
// apply() also invokes the funcion,
// the difference is that it only accepts an array of arguments
console.log('apply()');
logToConsole.apply(person, ['understanding', 'the "this" keyword']);

// currying
//
// Since bind() also accepts arguments, i can 'fix' the arguments. This is called 'currying'
console.log('currying:');
var logPersonCurrying = logToConsole.bind(person, 'backend');
logPersonCurrying('is boring');

// function borrowing
// Just setting the 'this' keyword of a function using apply() or call()
console.log('Funcion borrowing:');
console.log(person.getFullName.apply(person2));

// this will result in an error, because it won't find getFullName()
logToConsole('this will result in an error, because it wont find getFullName()');
logToConsole('frontend', 'developer');