import getDay from './getday.js';

export default function checkStatus() {
  // Housekeeping tasks
  // Declaring variables
  var isFriday;
  var day = getDay();

  // Detail loop tasks
  if (day == "Friday") {
    isFriday = true;
  } else {
    isFriday = false;
  }

  // End-of-job tasks
  return isFriday;
}
