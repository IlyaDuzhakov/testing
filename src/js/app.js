import { validation } from "./validation";
import {
  checkVisa,
  checkMastercard,
  checkAmericanCard,
  checkDiscoverCard,
} from "./checkpaysystem";

const btnClick = document.querySelector(".click__validate");
const input = document.querySelector(".input");
const visa = document.querySelector(".visa");
const mastercard = document.querySelector(".mastercard");
const american = document.querySelector(".american");
const discover = document.querySelector(".discover");
const modal = document.querySelector(".modal");

btnClick.addEventListener("click", () => {
  const numberCard = input.value;
  checkVisa(numberCard, visa);
  checkMastercard(numberCard, mastercard);
  checkAmericanCard(numberCard, american);
  checkDiscoverCard(numberCard, discover);
  if (validation(numberCard) === false) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
  // const checkCodeMastercard =
});
