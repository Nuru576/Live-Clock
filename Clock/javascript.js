let second = 0;
let minute = 0;
let hour = 0;
let d = new Date();
/*Date onject in Javascript is used to work with dates and Times
It allows suitable methods to get the current date and time, 
store a date in a variale

setInterval() method calls function at specified intervals (in milliseconds).
setInterval()==>repeatedly calls a function or executes a code snippet,
with a fixed time delay between each call*/

setInterval(
    function(){
        d=new Date();
        second=d.getSeconds()*6; //306 divided by 60 = 6
        minute=d.getMinutes()*6;
        //hour=d.getHour()*30; //360 divided by 12=30
        hour=d.getHours()*30+Math.round(minute/12); 
        //math.round() static method return the value of a number rounded to the neaerst integer
        document.getElementById("second-hand").style.transform="rotate("+second+"deg)";
        document.getElementById("minute-hand").style.transform="rotate("+minute+"deg)";
        document.getElementById("hour-hand").style.transform="rotate("+hour+"deg)";
    }, 1000
);

