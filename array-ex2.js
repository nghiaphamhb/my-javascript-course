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

