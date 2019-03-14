// Importing
import './resources/css/master.css'
import getDay from './resources/js/getday.js';
// import mainClock from './resources/js/clock.js';
import checkStatus from './resources/js/status.js';



// Housekeeping tasks
var bodyApp, counterBox, boxHeader, clockText, boxFooter;
var currentStatus, isFriday;
// Creating counterBox
bodyApp = document.getElementById('App');

counterBox = document.createElement("div");
counterBox.setAttribute("id", "counterBox");

boxHeader = document.createElement("h2");
clockText = document.createElement("p");
boxFooter = document.createElement("p");
boxFooter.innerHTML = "for next Friday...";


// Building interface
counterBox.appendChild(boxHeader);
counterBox.appendChild(clockText);
counterBox.appendChild(boxFooter);
bodyApp.appendChild(counterBox);



// Detail loop tasks
function updateBox() {
  // variables
  let isFriday = checkStatus();
  if (isFriday) {
    boxHeader.innerHTML = "Finally, it's here!";
    clockText.innerHTML = "Happy Friday my lovely french fry!"
    boxFooter.style.visibility = "hidden";
  } else {
    boxHeader.innerHTML = "Time left:";
    boxFooter.style.visibility = "visible"
  }
}

function updateClock() {
  // Variables
  var timeStamp = new Date();
  var daysLeft;

  // Calculating next Friday time left
  daysLeft = 5 - (timeStamp.getDay());
  if (daysLeft == -1) {
    daysLeft = 6;
  }

  var nextFriday = new Date(timeStamp.getFullYear(), timeStamp.getMonth(), (timeStamp.getDate() + daysLeft));

  var distance = nextFriday.getTime() - timeStamp.getTime();
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var hours = Math.floor(distance / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Updating clock box
  clockText.innerHTML = hours + ":" + minutes + ":" + seconds;
}

var intervalClock = setInterval(function () {
  isFriday = checkStatus();
  if (isFriday == true) {
    // It is friday
    if (currentStatus == "Friday") {
      // Do nothing
    } else {
      // Update box
      updateBox();
      currentStatus = "Friday";
    }
  } else {
    // Constantly update clock
    if (currentStatus == "Weekday") {
      // Constantly update clock
      updateClock();
    } else {
      // Update box and update clock
      updateBox();
      updateClock();
      currentStatus = "Weekday";
    }
  }
}, 1000); // This will repeat every second



// End-of-job tasks
