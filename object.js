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

