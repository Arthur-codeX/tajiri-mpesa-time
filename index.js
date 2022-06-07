const axios = require("axios");

const mpesa_time = async (timeZone = "Africa", Area = "Nairobi") => {
  try {
    let res = await axios.get(
      `http://worldtimeapi.org/api/timezone/${timeZone}/${Area}`
    );
    timeElapsed = res.data.unixtime * 1000;
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
  } catch (e) {
    if (e.response.data != null) {
      throw new Error(e.response.data);
    } else {
      throw new Error(e.message);
    }
  }
};

const doubleDig = (dd) => {
  return dd < 10 ? "0" + dd : "" + dd;
};

module.exports = mpesa_time;
