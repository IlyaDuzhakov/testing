import { validation } from "./validation";

const checkVisa = (numberCard, visa) => {
  const checkLengthVisa =
    numberCard.length === 13 ||
    numberCard.length === 16 ||
    numberCard.length === 19;
  if (numberCard.startsWith("4") && checkLengthVisa && validation(numberCard)) {
    visa.classList.add("active");
    // console.log('jjkj')
  } else {
    visa.classList.remove("active");
  }
};

const checkMastercard = (numberCard, mastercard) => {
  // console.log( typeof numberCard)
  const firstNumbers = numberCard.slice(0, 4); // 4 не включительно
  // console.log(firstNumbers)
  const firstCheck = firstNumbers >= 2221 && firstNumbers <= 2720;
  const firstTwoNumbers = numberCard.slice(0, 2);
  const secondCheck = firstTwoNumbers >= 51 && firstTwoNumbers <= 55;
  if (
    numberCard.length === 16 &&
    (firstCheck || secondCheck) &&
    validation(numberCard)
  ) {
    mastercard.classList.add("active");
  } else {
    mastercard.classList.remove("active");
  }
};

const checkAmericanCard = (numberCard, american) => {
  const firstTwoNumbers = Number(numberCard.slice(0, 2));
  // console.log(typeof firstTwoNumbers, firstTwoNumbers)
  const secondCheck = firstTwoNumbers === 34 || firstTwoNumbers === 37;
  if (numberCard.length === 15 && secondCheck && validation(numberCard)) {
    american.classList.add("active");
    // console.log("сработало");
  } else {
    american.classList.remove("active");
    // console.log(numberCard.length);
  }
};

const checkDiscoverCard = (numberCard, discover) => {
  const firstCheck = numberCard.length >= 16 && numberCard.length <= 19;
  const firstNumbers = numberCard.slice(0, 4);
  const secondCheck =
    firstNumbers == 6011 ||
    firstNumbers.slice(0, 2) == 65 ||
    (firstNumbers.slice(0, 3) >= 644 && firstNumbers.slice(0, 3) <= 649);
  if (firstCheck && secondCheck && validation(numberCard)) {
    discover.classList.add("active");
  } else {
    discover.classList.remove("active");
  }
};

// const checkDinnersCard = (numberCard, dinners) => {
//   const firstCheck = numberCard.length >= 16 && numberCard.length <= 19;
//   const firstNumbers = Number(numberCard.slice(0, 2));
//   const secondCheck =
//     firstNumbers === 30 ||
//     firstNumbers === 36 ||
//     firstNumbers === 38 ||
//     firstNumbers === 39;
//   const firstThirdNumbers = numberCard.slice(0, 3);
//   const thirdCheck = firstThirdNumbers >= 300 && firstThirdNumbers <= 305;
//   const firstFourNumbers = numberCard.slice(0, 4);
//   const fourCheck = firstFourNumbers === 3095;
//   if (
//     firstCheck &&
//     secondCheck &&
//     thirdCheck &&
//     fourCheck &&
//     validation(numberCard)
//   ) {
//     dinners.classList.add("active");
//   } else {
//     dinners.classList.remove("active");
//   }
// };

const checkDinersCard = (numberCard, diners) => {
  const firstCheck = numberCard.length === 14;
  const firstNumbers = Number(numberCard.slice(0, 2));
  const secondCheck = firstNumbers === 36;
  if (firstCheck && secondCheck && validation(numberCard)) {
    diners.classList.add("active");
  } else {
    diners.classList.remove("active");
  }
};

const checkMirCard = (numberCard, mir) => {
  const firstCheck = numberCard.length >= 16 && numberCard.length <= 19;
  const firstNumbers = numberCard.slice(0, 4);
  const secondCheck = firstNumbers >= 2200 && firstNumbers <= 2204;
  if (firstCheck && secondCheck && validation(numberCard)) {
    mir.classList.add("active");
  } else {
    mir.classList.remove("active");
  }
};

export {
  checkVisa,
  checkMastercard,
  checkAmericanCard,
  checkDiscoverCard,
  checkDinersCard,
  checkMirCard,
};
