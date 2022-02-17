let navItems = document.getElementById("nav-items");
navItems && console.log("Hello");
navItems.querySelectorAll("div span").forEach((item) => {
  item.onmouseover = () => {
    navItems
      .querySelector("div span.nav__item__dark")
      .classList.remove("nav__item__dark");
    item.classList.add("nav__item__dark");
  };
});
