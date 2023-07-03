let sec = 0;
let min = 0;
let hr = 0;
let timer = false;

function start() {
  timer = true;
  myfun();
}
function reset() {
  location.reload();
}
function stop() {
  timer = false;
  myfun();
}

function myfun() {
  if (timer == true) {
    sec = sec + 1;
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
    }
    let getSec = sec;
    let getMin = min;
    let getHr = hr;
    if (sec < 10) {
      getSec = "0" + sec;
    }
    if (min < 10) {
      getMin = "0" + min;
    }
    if (hr < 10) {
      getHr = "0" + hr;
    }
    setTimeout("myfun()", 1000);
    document.getElementById("sec").innerHTML = getSec;
    document.getElementById("min").innerHTML = getMin;
    document.getElementById("hr").innerHTML = getHr;
  }
}
