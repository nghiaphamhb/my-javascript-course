// 1. Copy mang
function copyArray(a){   // default empty array
    let answer = [];
    for(let i = 0; i < a.length; i++) {
        answer.push(a[i]);
    }
    return answer;
}

const a = [1, 2, 3, 4, 5];
let copied = copyArray(a);
console.log(copied);


// 2. Dao nguoc string
function revertStr(str){
    let revAns = "";
    for(let i = str.length -1; i >= 0; i--){
        revAns += str[i];
    }
    return revAns;
}

const str = "I love u";
console.log(revertStr(str));