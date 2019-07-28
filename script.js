var Timer = 6;
var timerCount = null;
var start = document.querySelector("#start");

var color_1 = document.querySelector(".big-lamp li:nth-of-type(1)").classList;
var color_2 = document.querySelector(".big-lamp li:nth-of-type(2)").classList;
var color_3 = document.querySelector(".big-lamp li:nth-of-type(3)").classList;

start.addEventListener("click", countDown);

document.getElementById("timer").innerHTML = Timer;

function countDown() {  
  if(Timer > 0) {  
  
  if (Timer == 1) {
      color_2.remove("yellow");
      color_3.add("green");
      --Timer;
    } else {
      if (Timer > 3) {
        Timer--;
      } else {
        color_1.remove("red");
        color_2.add("yellow");
        Timer--;
      }
    }
  } else {
    return;
  }

  

  document.getElementById("timer").innerHTML = Timer;
  timerCount = setTimeout(countDown, 1000);

}
