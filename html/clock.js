var time=60;

setInterval(function(){
    time=time-1;
    console.log(parseInt(time/60),":"+time%60);
    document.getElementsByClassName("minutes")[0].innerText=parseInt(time/60);
    document.getElementsByClassName("seconds")[0].innerText=(time%60);
},1000);
setTimeout(function(){
    alert("Time is up");
    document.getElementsByClassName("minutes")[0].innerText=0;
    document.getElementsByClassName("seconds")[0].innerText=0;
},60000); // 60000 milliseconds = 60 seconds