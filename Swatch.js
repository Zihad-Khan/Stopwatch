const minute = document.getElementById('minute');
const second = document.getElementById('second');
const milliSecond = document.getElementById('msecond');
const btnStart = document.getElementById('btn1');
const btnPause = document.getElementById('btn2');
const btnReset = document.getElementById('btn3');

var min;
var sec;
var msec = 0;
var intervalFunction = null;
var controlStarting = true;

function start(){
  if(controlStarting){
    controlStarting = false;
    intervalFunction = setInterval(function(){
      msec ++;
      sec = parseInt(msec/100);
      var newSec = parseInt(sec%60);
      (newSec<10)?newSec = "0"+newSec:newSec;
      second.textContent = newSec;
      min = parseInt(msec / 6000);
      (min<10)?min = "0" + min:min;
      minute.textContent = min;
      var newMilliSec = parseInt(msec%100);
      (newMilliSec<10)? newMilliSec ="0"+ newMilliSec: newMilliSec;
      milliSecond.textContent = newMilliSec;
   },10)
  }
}

function pause(){
  clearInterval(intervalFunction);
  controlStarting = true;
}

function reset(){
  clearInterval(intervalFunction);
  controlStarting = true;
  minute.textContent = "00";
  second.textContent = "00";
  milliSecond.textContent = "00";
  msec =0;
  sec =0;
  min = 0;
}

