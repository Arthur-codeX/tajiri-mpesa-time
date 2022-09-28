const { formatInTimeZone } = require("date-fns-tz");

const mpesa_time = (timeZone = "Africa", Area = "Nairobi") => {
  let t = formatInTimeZone(
    Date.now(),
    `${timeZone}/${Area}`,
    "yyyy-MM-dd HH:mm:ss"
  );

  let newDate = new Date(t);
  let year = newDate.getFullYear();
  let month = doubleDig(newDate.getMonth() + 1);
  let date = doubleDig(newDate.getDate());
  let hours = doubleDig(newDate.getHours());
  let minutes = doubleDig(newDate.getMinutes());
  let seconds = doubleDig(newDate.getSeconds());
  // console.log(year);
  // console.log(month);
  // console.log(date);
  // console.log(hours);
  // console.log(minutes);
  // console.log(seconds);

  // // return t;
  // console.log(year + month + date + hours + minutes + seconds);
  return year + month + date + hours + minutes + seconds;
};

const doubleDig = (dd) => {
  return dd < 10 ? "0" + dd : "" + dd;
};

module.exports = mpesa_time;
