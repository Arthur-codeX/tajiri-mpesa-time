const mpesa_time = (gmt = 3) => {
  let timeElapsed = Date.now();

  timeElapsed = timeElapsed + gmt * 3600000;
  const today = new Date(timeElapsed);
  let YYYY = today.getFullYear();
  let MM = today.getMonth() + 1;
  let DD = today.getDate();
  let HH = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds();

  t = `${YYYY}${doubleDig(MM)}${doubleDig(DD)}${doubleDig(HH)}${doubleDig(
    mm
  )}${doubleDig(ss)}`;
  t = parseInt(t);
  return t;
};

const doubleDig = (dd) => {
  return dd < 10 ? "0" + dd : "" + dd;
};

module.exports = mpesa_time;
