const student = {
    // key : value
    name: "Nghia",
    "first-name": "Pham", // boi vi co chua dau - nen phai de trong ""
    age: 22,
    male: true,
    hi: function() {
        console.log("Nghia say hello");
    }
};

// console.log(student.name);
// console.log(student["first-name"]); // boi vi co chua dau -
student.name = "Hieu";

// delete field from object
// delete student["first-name"];

// for in
// for(let key in student){
//     console.log(`${key} : ${student[key]}`);
// }

// clone object 
const user = {
	userName : "Nghia",
	school: {
		name: "ITMO",
		class: {
			name: "P3321",
			course: 3
		}
	}
};
// console.log(user);

const newUser = {...user};  // spread operator
const newUser2 = Object.assign({}, user);  // assign method
const newUser3 = JSON.parse(JSON.stringify(user)); // Object(JSON) -> string -> Object
newUser.password = 1234;   // add field
newUser2.password = 12345; // add field

console.log(newUser);   
console.log(newUser2); 
console.log(newUser3);
