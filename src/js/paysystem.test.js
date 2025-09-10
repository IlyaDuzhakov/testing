import {
  checkVisa,
  checkMastercard,
  checkAmericanCard,
  checkDiscoverCard,
  checkMirCard,
} from "./checkpaysystem";

const mockElement = () => {
  return {
    classList: {
      classes: new Set(),
      add(cls) {
        this.classes.add(cls);
      },
      remove(cls) {
        this.classes.delete(cls);
      },
      contains(cls) {
        return this.classes.has(cls);
      },
    },
  };
};

describe("check pay system", () => {
  let visa, mastercard, american, discover, mir;
  beforeEach(() => {
    visa = mockElement();
    mastercard = mockElement();
    american = mockElement();
    discover = mockElement();
    mir = mockElement();
  });
  test("check visa", () => {
    checkVisa("4929169365290469568", visa);
    expect(visa.classList.contains("active")).toBe(true);
  });
  test("check invalid visa", () => {
    checkVisa("4929169365290469569", visa);
    expect(visa.classList.contains("active")).toBe(false);
  });
  test("check mastercard", () => {
    checkMastercard("5517420071750827", mastercard);
    expect(mastercard.classList.contains("active")).toBe(true);
  });
  test("check invalid mastercard", () => {
    checkMastercard("5517420071750828", mastercard);
    expect(mastercard.classList.contains("active")).toBe(false);
  });
  test("check american", () => {
    checkAmericanCard("346114017230345", american);
    expect(american.classList.contains("active")).toBe(true);
  });
  test("check invalid american", () => {
    checkAmericanCard("346114017230346", american);
    expect(american.classList.contains("active")).toBe(false);
  });
  test("check discover", () => {
    checkDiscoverCard("6011251050060576", discover);
    expect(discover.classList.contains("active")).toBe(true);
  });
  test("check invalid discover", () => {
    checkDiscoverCard("6011251050060577", discover);
    expect(discover.classList.contains("active")).toBe(false);
  });
  test("check mir", () => {
    checkMirCard("2201382000000013", mir);
    expect(mir.classList.contains("active")).toBe(true);
  });
  test("check invalid mir", () => {
    checkMirCard("2201382000000014", mir);
    expect(mir.classList.contains("active")).toBe(false);
  });
});
