let start = document.body.querySelector("#start");
let stop = document.body.querySelector("#stop");

let run = null;

start.addEventListener("click", (e) => {
   if(run  != null) return;
  run = setInterval(() => {
    document.body.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(run);
  run = null;
});
