let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let day = document.getElementById("day");
let dd = document.getElementById("dd");
let mm = document.getElementById("mm");
let yyyy = document.getElementById("yyyy");
setInterval(() => {
  let getTime = new Date();
  hrs.innerHTML = getTime.getHours();
  min.innerHTML = getTime.getMinutes();
  sec.innerHTML = getTime.getSeconds();
  dd.innerHTML = getTime.getDate();
  mm.innerHTML = getTime.getMonth() + 1;
  yyyy.innerHTML = getTime.getFullYear();

  if (getTime.getHours() < 12) {
    day.innerHTML = "Good Morning";
  } else if (getTime.getHours() < 18) {
    day.innerHTML = "Good Afternoon";
  } else {
    day.innerHTML = "Good Evening";
  }
}, 1000);
