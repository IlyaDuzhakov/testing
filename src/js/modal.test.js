describe("check modal", () => {
  beforeEach(() => {
    document.body.innerHTML = `
       <div class="container">
        <div class="visa card"></div>
        <div class="mastercard card"></div>
        <div class="american card"></div>
        <div class="discover card"></div>
        <div class="diners card"></div>
        <div class="mir card"></div>
        <input class="input" type="text">
        <button class="click__validate">Нажать</button>
        <div class="modal hidden"></div>
      </div>
       <div class="modal hidden">
      <button class="close-btn">×</button>
      <span class="exit">Отмена</span>
    </div>
      `;
  });
  it("check show modal", async () => {
    //ассинхронная функция
    await import("./app.js");
    const input = document.querySelector(".input");
    const btn = document.querySelector(".click__validate");
    const modal = document.querySelector(".modal");

    input.value = "2201382000000011";
    btn.click();
    expect(modal.classList.contains("hidden")).toBe(false);
  });
  it("check close modal", async () => {
    //ассинхронная функция
    await import("./app.js");
    const input = document.querySelector(".input");
    const btn = document.querySelector(".click__validate");
    const modal = document.querySelector(".modal");

    input.value = "2201382000000013";
    btn.click();
    expect(modal.classList.contains("hidden")).toBe(true);
  });
});
