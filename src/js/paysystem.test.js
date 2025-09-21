import {
  checkVisa,
  checkMastercard,
  checkAmericanCard,
  checkDiscoverCard,
  checkDinersCard,
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
  let visa, mastercard, american, discover, diners, mir;
  beforeEach(() => {
    visa = mockElement();
    mastercard = mockElement();
    american = mockElement();
    discover = mockElement();
    diners = mockElement();
    mir = mockElement();
  });
  test("check visa", () => {
    checkVisa("4929169365290469568", visa);
    expect(visa.classList.contains("active")).toBe(true);
  });
  test("check invalid visa", () => {
    visa.classList.remove("active");
    checkVisa("4929169365290469569", visa);
    expect(visa.classList.contains("active")).toBe(false);
  });
  test("check mastercard", () => {
    checkMastercard("5517420071750827", mastercard);
    expect(mastercard.classList.contains("active")).toBe(true);
  });
  test("check invalid mastercard", () => {
    mastercard.classList.remove("active");
    checkMastercard("5517420071750828", mastercard);
    expect(mastercard.classList.contains("active")).toBe(false);
  });
  test("check american", () => {
    checkAmericanCard("346114017230345", american);
    expect(american.classList.contains("active")).toBe(true);
  });
  test("check invalid american", () => {
    american.classList.remove("active");
    checkAmericanCard("346114017230346", american);
    expect(american.classList.contains("active")).toBe(false);
  });
  test("check discover", () => {
    checkDiscoverCard("6011251050060576", discover);
    expect(discover.classList.contains("active")).toBe(true);
  });
  test("check invalid discover", () => {
    discover.classList.remove("active");
    checkDiscoverCard("6011251050060577", discover);
    expect(discover.classList.contains("active")).toBe(false);
  });
  test("check diners", () => {
    checkDinersCard("36456823391810", diners);
    expect(diners.classList.contains("active")).toBe(true);
  });
  test("check invalid diners", () => {
    diners.classList.remove("active");
    checkDinersCard("36456823391811", diners);
    expect(diners.classList.contains("active")).toBe(false);
  });
  test("check mir", () => {
    checkMirCard("2201382000000013", mir);
    expect(mir.classList.contains("active")).toBe(true);
  });
  test("check invalid mir", () => {
    mir.classList.remove("active");
    checkMirCard("2767658675675675", mir);
    expect(mir.classList.contains("active")).toBe(false);
  });
});
