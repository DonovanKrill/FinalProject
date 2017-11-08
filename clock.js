function clock() {
  var date = new Date();
      hours = date.getHours();  
      minutes = date.getMinutes();
      seconds = date.getSeconds();
      

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var color = "" + seconds + minutes + hours;
  document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds;
  document.body.style.background = "#" + color;
}

setInterval(function() { 
 clock();
}, 100);
