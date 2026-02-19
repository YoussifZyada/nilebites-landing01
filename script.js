    const btn1 = document.getElementById("order-action");
const btn2 = document.getElementById("view-action");

btn1.addEventListener("click", () => {
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
});

btn2.addEventListener("click", () => {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});
