let days1 = document.querySelector(".days");
let hour1 = document.querySelector(".hour");
let minutes1 = document.querySelector(".minutes");
let seconds1 = document.querySelector(".seconds");



function countDown(){
  let futurDate = new Date("04 20 2024");
    let now = new Date();

  let diff = futurDate - now;
  let days = Math.floor(diff /1000 /60 /60 /24);
  let hour = Math.floor(diff /1000 /60 /60) % 24;
  let minutes = Math.floor(diff /1000/60)%60;
  let seconds = Math.floor(diff /1000) %60;
  console.log(days)


  days = (days<10)? "0" +days :days;
  hour = (hour<10)? "0" + hour :hour;
  minutes =(minutes <10)? "0"+minutes:minutes;
  seconds =(seconds<10)? "0" +seconds:seconds; 
days1.innerText = days;
hour1.innerText = hour;
minutes1.innerText = minutes;
seconds1.innerText = seconds;





}
countDown();

setInterval(countDown,1000);