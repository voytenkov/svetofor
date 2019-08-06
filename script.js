var mainTimer = 9;
var waitTimer = 3;
var timerCount = null;
var walk = document.querySelector("#walk");
var stop = document.querySelector("#stop");

walk.disabled = false;

var bigLamp_up = document.querySelector(".big-lamp li:nth-of-type(1)").classList;
var bigLamp_mid = document.querySelector(".big-lamp li:nth-of-type(2)").classList;
var bigLamp_down = document.querySelector(".big-lamp li:nth-of-type(3)").classList;
var smallLamp_up = document.querySelector(".small-lamp li:nth-of-type(1)").classList;
var smallLamp_down = document.querySelector(".small-lamp li:nth-of-type(2)").classList;

var Timer = mainTimer;

document.getElementById("bigLampTimer").innerHTML = mainTimer;

function countDownWalk(Timer, callback) {
  walk.disabled = true;
  document.getElementById("bigLampTimer").innerHTML = Timer;
  if (Timer == 0) {
    bigLamp_up.remove("red");
    bigLamp_mid.remove("red");
    bigLamp_down.add("green");
    smallLamp_down.remove("green");
    smallLamp_up.add("red");
    callback(mainTimer, countDownWalk);
    return;
  } else {
    if (Timer > waitTimer) {
      Timer--;
    } else {
      bigLamp_mid.add("red");
      Timer--;
    }
  }
  timerCount = setTimeout(function () {
    countDownWalk(Timer, countDownDrive)
  }, 1000);
}

function countDownDrive(Timer, callback) {
  walk.disabled = true;
  document.getElementById("bigLampTimer").innerHTML = Timer;
  if (Timer == 0) {
    bigLamp_mid.remove("yellow");
    bigLamp_up.add("red");
    smallLamp_up.remove("red");
    smallLamp_down.add("green");
    callback(mainTimer, countDownWalk);
    return;
  } else {
    if (Timer > waitTimer) {
      Timer--;
    } else {
      bigLamp_down.remove("green");
      bigLamp_mid.add("yellow");
      Timer--;
    }
  }
  timerCount = setTimeout(function () {
    countDownDrive(Timer, countDownWalk)
  }, 1000);
}

function countDownReturn() {
  Timer = document.getElementById("bigLampTimer").innerHTML;
  clearTimeout(timerCount);
  walk.disabled = false;
}


walk.addEventListener("click", function() {countDownWalk(Timer, countDownDrive)});
stop.addEventListener("click", countDownReturn);

//window.onload = function() {countDownWalk(Timer, walkDisabled)};