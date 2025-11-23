// const now = new Date();
// const now = new Date("Thu May 5 2022");

// const myYear = now.getFullYear();
// const myMonth = now.getMonth() + 1;  // index 0 -> 11
// const myDate = now.getDate();

// const prefixMoth = myMonth < 10 ? "0" : "";

// const showTime = `${prefixMoth}${myDate}/${myMonth}/${myYear}`;

// alert(showTime);

// setTimeout(function() {
// 	alert("Stop 3s");
// }, 3000); // 3s = 3000 ms

let i = 0;

const timer = setInterval(function(){
    i = i + 1;
    console.log(`i now: ${i}`);
}, 1000);

setTimeout( () => {
     clearInterval(timer);
     console.log("timer stop");
}, 5000);