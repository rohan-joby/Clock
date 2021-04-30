const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setClock() {
  const time = new Date();
  //setting seconds hand movement
  const second = time.getSeconds();
  const secondDeg = (second / 60) * 360 + 90; //+90 to acccount for 90deg rotationn applied initially
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  //setting minutes hand movement
  const minute = time.getMinutes();
  const minuteDeg = (minute / 60) * 360 + ((seconds/60)*6) + 90; //+90 to acccount for 90deg rotationn applied initially
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

  //setting hours hand movement
  const hour = time.getHours();
  const hourDeg = (hour / 12) * 360 + ((seconds/60)*30) + 90; //+90 to acccount for 90deg rotationn applied initially
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setClock, 1000);
setClock();
