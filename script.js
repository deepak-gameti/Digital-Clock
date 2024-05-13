const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
  const curruntTime = new Date();
  const h = curruntTime.getHours();
  const m = curruntTime.getMinutes();
  const s = curruntTime.getSeconds();

  hrs.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
}, 1000);
