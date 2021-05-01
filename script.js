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
  const minuteDeg = (minute / 60) * 360 + 90 + second * 0.1; //+90 to acccount for 90deg rotationn applied initially
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

  //setting hours hand movement
  const hour = time.getHours();
  const hourDeg = (hour / 12) * 360 + 90 + second * (1 / 120); //+90 to acccount for 90deg rotationn applied initially
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  //to handle sudden rotation when hands hit 12
  if (second === 0) {
    secondHand.style.transition = "all 0s";
    minuteHand.style.transition = "all 0s";
    hourHand.style.transition = "all 0s";
  } else {
    secondHand.style.transition = "transform 0.02s ease-in";
    minuteHand.style.transition = "transform 0.02s ease-in";
    hourHand.style.transition = "transform 0.02s ease-in";
  }
}

setInterval(setClock, 1000);
setClock();
