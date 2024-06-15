const button = document.getElementById("button");
const placeForAnswer = document.querySelector(".block2");

function daysUntilBirthday() {
  let input = document.getElementById("input");
  let chosenDate = new Date(input.value);
  let currentDate = new Date();
  let text;
  let answer = Math.floor((chosenDate - currentDate) / (24 * 3600 * 1000));
  placeForAnswer.innerHTML = "";

  if (isNaN(answer)) {
    placeForAnswer.classList.add("error");
    placeForAnswer.innerHTML += "Пожалуйста, введите дату";
  } else {
    let lastDigit = answer % 10;
    let lastTwoDigits = answer % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      text = "дней";
    } else if (lastDigit == 1) {
      text = "день";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      text = "дня";
    } else {
      text = "дней";
    }
    placeForAnswer.classList.add("bdayMessage");
    placeForAnswer.innerHTML += `До вашего дня рождения ${answer} ${text}`;
  }
}

button.addEventListener("click", daysUntilBirthday);
