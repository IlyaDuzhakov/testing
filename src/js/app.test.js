import { validation } from "./validation";

test("невалидный номер карты", () => {
  expect(validation("5517420071750828")).toBe(false);
});

test("валидный mastercard", () => {
  expect(validation("5517420071750827")).toBe(true);
});
test("пустая строка", () => {
  expect(validation("")).toBe(false);
});
