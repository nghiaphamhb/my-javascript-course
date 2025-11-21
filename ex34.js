// basic closure
function sayHello(message)  {
    return function yourName(name) {
        alert(`${message} ${name}`);
    }
}

const message = prompt("Enter message", "");
const yourName = prompt("Enter your name", "");

let hello = sayHello(message);  // return function(name)
hello(yourName);