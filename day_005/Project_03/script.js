const date = document.body.querySelector("#date");
const time = document.body.querySelector("#time");
const weekday = document.body.querySelector("#weekday");

setInterval(() => {
  let currDate = new Date();
  date.innerText = `${currDate.toLocaleString("default", {
    day: "numeric",
    // weekday: "long",
    year: "numeric",
    month: "long",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
  })}`;

  weekday.innerText = `${currDate.toLocaleString("default", {
    // day: "numeric",
    weekday: "long",
    // year: "numeric",
    // month: "long",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
  })}`;

  time.innerText = `${currDate.toLocaleString("default", {
    // weekday: "long",
    // year: "numeric",
    // month: "long",
    // day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })}`;
}, 1000);
