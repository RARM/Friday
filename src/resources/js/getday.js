export default function getDay() {
  // Housekeeping tasks
  var date, day;
  var weekday = new Array(7);

  // Deatil loop tasks
  date = new Date();

  weekday[0] =  "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var day = weekday[date.getDay()];

  // End-of-job tasks
  return day;
}
