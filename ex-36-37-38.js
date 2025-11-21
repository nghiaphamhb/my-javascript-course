// 36
function compare(a, b) {
    if(typeof a !== "number" || typeof b != "number") { // "typeof" return string
        return "Wrong type of data";
    }
    return a >= b ? "a is bigger than b" : "b is bigger than a";
}

// alert(compare(100, "1000"));

// 37
function capitalize(word = "") {
    let newFisrtChar = word.toLowerCase().charAt(0).toUpperCase();
    let newOtherChar = word.toLowerCase().slice(1);
    return `${newFisrtChar}${newOtherChar}`;
}
// let message = "";
// // message = "TUAN";
// // message = "tHANH";
// message = "trang";

// alert(capitalize(message));

// 38
function useCallBack(a, b, callback) {
    let max = compare(a, b);
    callback(max);
}

function printMax(value) {
    alert(`The answer: ${value}`);
}

useCallBack(100, 1000, printMax);