$(function(){
  var target_date = new Date("May 31, 2066").getTime();
  var years, months, days, hours, minutes, seconds

  var setTimer = function(){
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    years = parseInt(seconds_left / 3.15569e7)
    seconds_left = seconds_left % 3.15569e7

    months = parseInt(seconds_left / (2.63e+6))
    seconds_left = seconds_left % (2.63e+6)

    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    countdown.innerHTML = years + "-"+ months + "-" + days + " " + hours + ":" + minutes + ":" + seconds;
  };

  setTimer();

  setInterval(function () {
    setTimer()
  }, 1000);
});
