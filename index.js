function menu() {
  let h2s = document.querySelectorAll("main > aside h2");
  for (h2 of h2s) {
    h2.addEventListener("click", function (event) {
      let title = event.target;
      let dataNav = title.getAttribute("data-nav");
      let ul = document.querySelector("ul[data-nav='" + dataNav + "']");
      ul.classList.toggle("close");
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  menu();
});
