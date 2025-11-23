// 1. Nhap nam sinh va in ra so tuoi


function getAge() {
    const now = new Date();
    const nowYear = now.getFullYear();
    const myYear = prompt("Enter your birth year: ", "");
    return nowYear - myYear;
}
// const myAge = getAge();
// alert(`Your age is: ${myAge}`);

// 2. Viet ctinh dem nguoc thoi gian (s) theo thoi gian dau vao
function countDown(time){
    let remain = time / 1000; 

    const timer = setInterval(() => {
        remain --;
        console.log(remain);
    }, 1000);

    setTimeout(() => {
        clearInterval(timer);
        console.log("Your time is end");
    }, time);
}

// const timeToCountDown = prompt("Enter your time (second): ", "");
// countDown(timeToCountDown * 1000);

// 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian
//  hiện tại, ví dụ: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A 
// vừa online `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước` - khó
const yearSeconds = 365 * 24 * 60 * 60;
const monthSeconds = 31 * 24 * 60 * 60;
const weekSeconds = 7 * 24 * 60 * 60;
const daySeconds = 24 * 60 * 60;
const hourSeconds = 60 * 60;
const minuteSeconds = 60;

function timeSince(date){
    const now = new Date();
    const interval = now.getTime() - new Date(date); // timestamp

    if(interval < 0) {
        alert("Your time is invalid");
    }

    const secondsItv = Math.floor(interval / 1000);  // seconds interval

    let timer = secondsItv / yearSeconds;
    if(timer > 1) console.log(`${Math.floor(timer)} year(s) ago`);

    timer = secondsItv / monthSeconds;
    if(timer > 1) console.log(`${Math.floor(timer)} month(s) ago`);

    timer = secondsItv / weekSeconds;
    if(timer > 1) console.log(`${Math.floor(timer)} week(s) ago`);

    timer = secondsItv / daySeconds;
    if(timer > 1) console.log(`${Math.floor(timer)} day(s) ago`);

    timer = secondsItv / hourSeconds;
    if(timer > 1) console.log(`${Math.floor(timer)} hour(s) ago`);

    timer = secondsItv / minuteSeconds;
    if(timer > 1) console.log(`${Math.floor(timer)} minute(s) ago`);
}

timeSince("Mon Nov 24 2025 01:18:52 GMT+0300 (Moscow Standard Time)");
// console.log(new Date());

