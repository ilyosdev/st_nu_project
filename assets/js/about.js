function activeDrop(parentElement, childElement) {
  const parentWrap = document.querySelector(`.${parentElement}`);
  const childItem = parentWrap.querySelectorAll(`.${childElement}`);

  childItem.forEach(function (dropItem) {
    dropItem.addEventListener("click", function () {
      const panel = this.children[1];
      if (this.classList.contains("active") && panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.classList.remove("active");
      } else {
        for (let active of childItem) {
          active.children[1].style.maxHeight = null;
          active.classList.remove("active");
        }
        this.classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}
activeDrop("ask-menu", "ask-menu__item");
