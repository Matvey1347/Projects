// SMOOTH SCROOLL
const goto = document.querySelectorAll("[data-goto]");
if (goto.length > 0) {
  goto.forEach((item) => {
    item.addEventListener("click", function (e) {
      const item = e.target;
      if (
        item.dataset.goto &&
        document.querySelector(item.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(item.dataset.goto);
        e.preventDefault();
        goToEl(gotoBlock);
      }
    });
  });
}

function goToEl(gotoBlock) {
  const iconMenu = document.querySelector(".menu__icon");
  const menuBody = document.querySelector(".menu__body");
  const gotoBlockValue =
    gotoBlock.getBoundingClientRect().top +
    pageYOffset - 20;
  if (iconMenu?.classList.contains("_active")) {
    iconMenu?.classList.remove("_active");
    menuBody?.classList.remove("_active");
    document.body.classList.remove("_lock");
  }
  window.scrollTo({
    top: gotoBlockValue,
    behavior: "smooth",
  });
}