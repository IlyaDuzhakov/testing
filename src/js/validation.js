const validation = (ccnS) => {
  if (ccnS === "") {
    return false;
  }
  // const ccnS = ccn.toString(); у нас сразу string
  let sum = 0;
  const parity = ccnS.length % 2;
  for (let i = 0; i < ccnS.length; i += 1) {
    // i = i +1
    let digit = Number(ccnS[i]);
    if (i % 2 === parity) {
      digit *= 2; // digit = digit * 2
      if (digit > 9) {
        digit -= 9; // digit = digit - 9
      }
    }
    sum += digit; // sum = sum + digit
  }
  return Number(sum % 10) === 0;
};

export { validation };
