// 1. Cho 1 mảng gồm nhiều giá trị [1,1000, false, null, "evondev", "", undefined, "javascript", [1,2,3]]. 
// Viết chương trình loại bỏ các giá trị là falsy ra khỏi mảng chỉ giữ lại giá trị truthy. 
// Gợi ý giá trị falsy là 0 null undefined false "" NaN
const firstArr = [1,1000, false, null, "evondev", "", undefined, "javascript", [1,2,3]];
const trueArr = firstArr.filter(item => Boolean(item));
// console.log(trueArr);


// 2. Cho 1 mảng phức tạp [[1,2,3, [false, null]], [1,5,6, ["javascript"]], [888,666, [90]]]. 
// Và kết quả mong muốn là [1,2,3,false,null,1,5,6,"javascript",888,666,90]
const secondArr = [[1,2,3, [false, null]], [1,5,6, ["javascript"]], [888,666, [90]]];
const result = secondArr.flat(2);  // flattern array
// console.log(result);

// 3. Đảo ngược số nguyên. Ví dụ 1234 -> 4321, -567 -> -765
function reverseInteger(num) {
    let value = num.toString().split('').reverse().join('');  
    console.log('Number to reverted string: ' + value);   // 765-
    value = parseInt(value);
    console.log('Reverted string to number: ' + value);  // 765
    value = value * Math.sign(num);
    return value;  // -765
}

// console.log(reverseInteger(-567));

// 4. Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 cho tới số nguyên đó 
// rồi kiểm tra nếu có số chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì in ra chữ "Buzz", 
// nếu chia hết cho 2 và 3 thì in ra "FizzBuzz"
function fizzBuzz(n) {
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0 && i % 3 === 0){
            console.log("FizzBuzz");
        }
        else if(i % 2 === 0){
            console.log("Fizz");
        } else if(i % 3 === 0){
            console.log("Buzz");
        } 
    }
}

// fizzBuzz(15);

// 5. Cho 1 chuỗi bất kỳ, đếm số lượng kí tự `vowels` có trong chuỗi.
// vowels là các kí tự u e o a i
// Ví dụ "evondev" -> 3
function countVowels(str){
    let count = 0;
    const vowels = 'euoai'
    for(let c of str){
        if(vowels.includes(c)) count += 1;
    } 

    return count;
}

// console.log(countVowels("evondev"));

// 6. Cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]. Viết một function trả về một mảng với các giá trị unique. 
// Kết quả ở trên sẽ là [1,2,3,5,7,6];
function unique(arr){
    let result = [];
    if(!Array.isArray(arr)) return false;
    for(let i = 0; i < arr.length; i++){
        if(!result.includes(arr[i])) result.push(arr[i]);
    }

    return result;
}

// console.log(unique([1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]));

// 7. Viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dựa vào một số nguyên đầu vào.
// Ví dụ ([1,2,3,4,5], 2) -> [[1,2], [3,4], [5]]
// ([1,2,3,4,5,6], 3) -> [[1,2,3], [4,5,6]]
function splitArray(arr, number){
    let result = [];
    let index = 0;
    while(index < arr.length){
        let childArr = arr.slice(index, index + number);
        result.push(childArr);
        index += number;
    }

    return result;
}
console.log(splitArray([1,2,3,4,5], 2));
console.log(splitArray([1,2,3,4,5,6], 3));