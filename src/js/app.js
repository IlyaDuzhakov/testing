import { validation } from "./validation";
import {
  checkVisa,
  checkMastercard,
  checkAmericanCard,
  checkDiscoverCard,
  checkDinersCard,
  checkMirCard,
} from "./checkpaysystem";

const btnClick = document.querySelector(".click__validate");
const input = document.querySelector(".input");
const visa = document.querySelector(".visa");
const mastercard = document.querySelector(".mastercard");
const american = document.querySelector(".american");
const discover = document.querySelector(".discover");
const diners = document.querySelector(".diners");
const mir = document.querySelector(".mir");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const exit = document.querySelector(".exit");

btnClick.addEventListener("click", () => {
  const numberCard = input.value;
  checkVisa(numberCard, visa);
  checkMastercard(numberCard, mastercard);
  checkAmericanCard(numberCard, american);
  checkDiscoverCard(numberCard, discover);
  checkDinersCard(numberCard, diners);
  checkMirCard(numberCard, mir);
  if (validation(numberCard) === false) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
exit.addEventListener("click", () => {
  modal.classList.add("hidden");
});
